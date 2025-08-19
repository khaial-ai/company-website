"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Pill from "@components/atoms/Pill";

const clamp = (value: number, min: number, max: number) => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

const toHex = (n: number) => n.toString(16).padStart(2, "0");

const interpolateGreyToWhite = (t: number) => {
  // Start from darker grey to create better contrast
  // 0 -> #4a4a4a (74), 1 -> #ffffff (255)
  const v = Math.round(lerp(74, 255, clamp(t, 0, 1)));
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
      const startPx = window.innerHeight * 0.8; // Start animation earlier
      const endPx = window.innerHeight * 0.2; // End later for smoother progression
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
    <p ref={ref} className="mx-auto max-w-5xl text-center text-2xl font-normal leading-[1.4] text-white/30 sm:text-3xl md:text-4xl lg:text-5xl">
      {characters.map((char, idx) => {
        currentIndex = idx;
        if (char === "\n") {
          return <br key={`br-${idx}`} />;
        }
        const start = step * idx;
        const end = step * (idx + 1);
        // Improved easing function for smoother animation
        const rawT = progress <= start ? 0 : progress >= end ? 1 : (progress - start) / (end - start);
        const easedT = rawT * rawT * (3 - 2 * rawT); // Smoothstep easing
        const color = idx < transitionStartIndex ? "#FFFFFF" : interpolateGreyToWhite(easedT);
        return (
          <span 
            key={idx} 
            style={{ 
              color, 
              transition: "color 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              filter: easedT > 0.5 ? `drop-shadow(0 0 8px ${color}40)` : 'none'
            }}
          >
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
    <section className="relative isolate overflow-hidden py-24 sm:py-32" aria-label={t("about.aria")}>
      {/* Enhanced background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        <div className="absolute inset-x-0 top-0 h-[300px] bg-[radial-gradient(1200px_250px_at_50%_-30px,rgba(var(--k-ring-rgb),0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6">
        {/* Pill */}
        <div className="flex justify-center mb-12">
          <Pill 
            label={t("about.pill")} 
            variant="brand"
            ariaLabel={t("about.pill_label") || t("about.pill")}
          />
        </div>

        <AnimatedText text={text} transitionStartIndex={Number(t("about.start_index")) || 0} />
      </div>
    </section>
  );
};

export default AboutUs;


