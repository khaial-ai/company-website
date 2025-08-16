"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const clamp = (value: number, min: number, max: number) => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

const toHex = (n: number) => n.toString(16).padStart(2, "0");

const interpolateGreyToWhite = (t: number) => {
  // 0 -> #666666 (102), 1 -> #FFFFFF (255)
  const v = Math.round(lerp(102, 255, clamp(t, 0, 1)));
  return `#${toHex(v)}${toHex(v)}${toHex(v)}`;
};

type AnimatedTextProps = {
  text: string;
  transitionStartIndex?: number;
};

const AnimatedText = ({ text, transitionStartIndex = 0 }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handle = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const startPx = window.innerHeight * 0.75; // when top reaches 75% viewport
      const endPx = window.innerHeight * 0.15; // until 15%
      const p = (startPx - rect.top) / (startPx - endPx);
      setProgress(clamp(p, 0, 1));
    };
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, []);

  const characters = useMemo(() => text.split("").map((c) => (c === "\n" ? "\n" : c)), [text]);
  const total = characters.length;
  const step = 1 / Math.max(total, 1);

  let currentIndex = -1;

  return (
    <p ref={ref} className="mx-auto max-w-6xl text-center text-3xl font-semibold leading-[1.2] text-white/40 sm:text-5xl md:text-6xl">
      {characters.map((char, idx) => {
        currentIndex = idx;
        if (char === "\n") {
          return <br key={`br-${idx}`} />;
        }
        const start = step * idx;
        const end = step * (idx + 1);
        const t = progress <= start ? 0 : progress >= end ? 1 : (progress - start) / (end - start);
        const color = idx < transitionStartIndex ? "#FFFFFF" : interpolateGreyToWhite(t);
        return (
          <span key={idx} style={{ color, transition: "color 0.25s ease" }}>
            {char}
          </span>
        );
      })}
    </p>
  );
};

const AboutUs = () => {
  const { t } = useTranslation("common");
  const text = t("about.text");
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-28" aria-label={t("about.aria")}>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[240px] bg-[radial-gradient(1000px_220px_at_50%_-20px,rgba(var(--k-ring-rgb),0.20),transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-6">
        {/* Pill */}
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-[var(--k-border)]/60 bg-black/40 px-3 py-1 text-sm text-white/90 backdrop-blur">
          <span className="inline-flex h-6 min-w-10 items-center justify-center rounded-full btn-brand-gradient px-2 text-xs font-semibold">
            {t("about.pill")}
          </span>
          <span className="text-white/80">{t("about.pill_label")}</span>
        </div>

        <AnimatedText text={text} transitionStartIndex={Number(t("about.start_index")) || 0} />
      </div>
    </section>
  );
};

export default AboutUs;


