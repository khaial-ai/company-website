"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

export type FAQItem = { q: string; a: string };

type FAQProps = {
  items?: FAQItem[];
};

const PlusIcon = ({ open }: { open: boolean }) => (
  <span
    className={[
      "inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-white/80 transition-transform",
      open ? "rotate-45" : "rotate-0",
    ].join(" ")}
    aria-hidden
  >
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </span>
);

const FAQ = ({ items }: FAQProps) => {
  const { t } = useTranslation("common");
  const defaultItems: FAQItem[] = (
    (t("faqSection.items", { returnObjects: true }) as unknown as FAQItem[]) || []
  ).map((it) => ({ q: it.q, a: it.a }));
  const data = items && items.length > 0 ? items : defaultItems;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="relative isolate overflow-hidden py-24 sm:py-28 scroll-mt-24" aria-label={t("faqSection.aria")}>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_500px_at_10%_10%,rgba(var(--k-ring-rgb),0.15),transparent_50%)]" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-2">
        {/* Left copy */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--k-border)]/60 bg-white/5 px-3 py-1 text-sm text-white/90">
            <span className="inline-flex h-6 min-w-10 items-center justify-center rounded-full btn-brand-gradient px-2 text-xs font-semibold">
              {t("faqSection.pill")}
            </span>
            <span>FAQ</span>
          </div>
          <h2 className="text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            {t("faqSection.title_line1")}
          </h2>
          <h3 className="mt-2 text-3xl font-semibold text-white/70 sm:text-4xl">
            {t("faqSection.title_line2")}
          </h3>
          <p className="mt-6 max-w-xl text-base text-white/70 md:text-lg">{t("faqSection.subtitle")}</p>
        </div>

        {/* Right accordion */}
        <div className="flex flex-col gap-4">
          {data.map((item, idx) => {
            const isOpen = openIndex === idx;
            const answerId = `faq-answer-${idx}`;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[var(--k-border)]/60 bg-black/40 p-1 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-5 text-left text-white/90 focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => handleToggle(idx)}
                >
                  <span className="text-lg md:text-xl">{item.q}</span>
                  <PlusIcon open={isOpen} />
                </button>
                <div
                  id={answerId}
                  className={[
                    "grid overflow-hidden px-5 transition-all",
                    isOpen ? "grid-rows-[1fr] py-0 pb-5" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="min-h-0">
                    <p className="text-[15px] leading-7 text-white/70">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


