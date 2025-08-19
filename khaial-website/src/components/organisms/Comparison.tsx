"use client";

import { useTranslation } from "react-i18next";

type Item = { text: string };

type ComparisonProps = {
  beforeItems?: Item[];
  afterItems?: Item[];
};

const Bullet = ({ type }: { type: "bad" | "good" }) => {
  if (type === "good") {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[rgba(var(--k-ring-rgb),0.25)] text-white flex-shrink-0 mt-1">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    );
  }
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600/80 text-white flex-shrink-0 mt-1">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
};

const Comparison = ({ beforeItems, afterItems }: ComparisonProps) => {
  const { t } = useTranslation("common");

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
    <section className="relative isolate overflow-hidden py-24 sm:py-28">
      {/* Top purple glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[260px] bg-[radial-gradient(1100px_240px_at_50%_-30px,rgba(var(--k-ring-rgb),0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(#ffffff14_1px,transparent_1px),linear-gradient(90deg,#ffffff14_1px,transparent_1px)] bg-[size:22px_22px] opacity-[0.08]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Pill */}
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-[var(--k-border)]/60 bg-black/40 px-3 py-1 text-sm text-white/90 backdrop-blur">
          <span className="inline-flex h-6 min-w-10 items-center justify-center rounded-full btn-brand-gradient px-2 text-xs font-semibold">
            {t("comparison.pill")}
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-center text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          {t("comparison.title_primary")}<br className="hidden sm:block" />
        </h2>
        <h3 className="text-center mt-2 text-2xl font-semibold text-white/70 sm:text-3xl">
          {t("comparison.title_secondary")}
        </h3>

        {/* Panel with two columns */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-[var(--k-border)]/60 bg-black/40 p-6 md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:12px_12px] opacity-40" />
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
            <ul className="space-y-5">
              {left.map((it, idx) => (
                <li key={`before-${idx}`} className="flex items-start gap-3 text-white/85">
                  <Bullet type="bad" />
                  <span className="text-lg">{it.text}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-5">
              {right.map((it, idx) => (
                <li key={`after-${idx}`} className="flex items-start gap-3 text-white">
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


