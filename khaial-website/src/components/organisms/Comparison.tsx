"use client";

import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

type Item = { text: string };

type ComparisonProps = {
  beforeItems?: Item[];
  afterItems?: Item[];
};

const Bullet = ({ type }: { type: "bad" | "good" }) => {
  if (type === "good") {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[rgba(var(--k-ring-rgb),0.2)] text-white flex-shrink-0 mt-1">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500/80 text-white flex-shrink-0 mt-1">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
};

const Comparison = ({ beforeItems, afterItems }: ComparisonProps) => {
  const { t } = useTranslation("common");
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll("[data-reveal]") as NodeListOf<HTMLLIElement>);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-3");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const left = beforeItems ?? [
    { text: t("comparison.before.0") },
    { text: t("comparison.before.1") },
    { text: t("comparison.before.2") },
    { text: t("comparison.before.3") },
    { text: t("comparison.before.4") },
  ];

  const right = afterItems ?? [
    { text: t("comparison.after.0") },
    { text: t("comparison.after.1") },
    { text: t("comparison.after.2") },
    { text: t("comparison.after.3") },
    { text: t("comparison.after.4") },
  ];

  return (
    <section className="relative isolate overflow-hidden mx-auto w-full max-w-7xl px-6 py-24 sm:py-28 scroll-mt-24">
      {/* Top subtle glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[260px] bg-[radial-gradient(1100px_240px_at_50%_-30px,rgba(var(--k-ring-rgb),0.14),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(#ffffff14_1px,transparent_1px),linear-gradient(90deg,#ffffff14_1px,transparent_1px)] bg-[size:22px_22px] opacity-[0.06]" />

      <div className="mx-auto max-w-6xl">

        {/* Headline */}
        <h2 className="text-center text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          {t("comparison.title_primary")}<br className="hidden sm:block" />
        </h2>
        <h3 className="text-center mt-2 text-2xl font-semibold text-white/70 sm:text-3xl">
          {t("comparison.title_secondary")}
        </h3>

        {/* Panel with two columns */}
        <div ref={containerRef} className="mt-10 relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 md:p-10 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:14px_14px] opacity-20" />
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
            <ul className="space-y-4 md:space-y-5">
              {left.map((it, idx) => (
                <li
                  key={`before-${idx}`}
                  data-reveal
                  className="flex items-start gap-3 text-white/85 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-500 opacity-0 translate-y-3"
                  style={{ transitionDelay: `${idx * 60}ms` }}
                >
                  <Bullet type="bad" />
                  <span className="text-lg">{it.text}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-4 md:space-y-5">
              {right.map((it, idx) => (
                <li
                  key={`after-${idx}`}
                  data-reveal
                  className="flex items-start gap-3 text-white rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-500 opacity-0 translate-y-3"
                  style={{ transitionDelay: `${idx * 60}ms` }}
                >
                  <Bullet type="good" />
                  <span className="text-lg">{it.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;


