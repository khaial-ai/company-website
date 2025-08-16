"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { BOOK_APPOINTMENT_URL } from "@config/links";

type ServiceCardProps = {
  iconEmoji: string;
  title: string;
  subtitle: string;
  description: string;
  imageAlt: string;
};

const IconPill = ({ emoji }: { emoji: string }) => (
  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full btn-brand-gradient text-lg">
    <span role="img" aria-hidden>
      {emoji}
    </span>
  </span>
);

const ArrowBadge = () => (
  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-white/50">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17l10-10M9 7h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const ServiceCard = ({ iconEmoji, title, subtitle, description, imageAlt }: ServiceCardProps) => {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-[var(--k-border)]/60 bg-black/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:12px_12px] opacity-40" />
      <div className="relative flex items-start justify-between">
        <IconPill emoji={iconEmoji} />
        <ArrowBadge />
      </div>

      <div className="relative mt-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{subtitle}</p>

        <p className="mt-5 text-[15px] leading-7 text-white/80">{description}</p>

        {/* Placeholder image area; replace src later */}
        <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <div className="aspect-[16/9] w-full bg-[radial-gradient(circle_at_center,rgba(var(--k-ring-rgb),0.25)_0%,transparent_70%)]" aria-label={imageAlt} />
        </div>
      </div>
    </article>
  );
};

const Services = () => {
  const { t } = useTranslation("common");

  const cards = [
    {
      iconEmoji: "⚙️",
      title: t("services.cards.0.title"),
      subtitle: t("services.cards.0.subtitle"),
      description: t("services.cards.0.desc"),
      imageAlt: t("services.cards.0.title"),
    },
    {
      iconEmoji: "💬",
      title: t("services.cards.1.title"),
      subtitle: t("services.cards.1.subtitle"),
      description: t("services.cards.1.desc"),
      imageAlt: t("services.cards.1.title"),
    },
    {
      iconEmoji: "✨",
      title: t("services.cards.2.title"),
      subtitle: t("services.cards.2.subtitle"),
      description: t("services.cards.2.desc"),
      imageAlt: t("services.cards.2.title"),
    },
  ];

  const chips: string[] = t("services.chips", { returnObjects: true }) as unknown as string[];

  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-28">
      {/* Top beam + dotted background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[300px] bg-[radial-gradient(1200px_260px_at_50%_-30px,rgba(var(--k-ring-rgb),0.25),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(#ffffff14_1px,transparent_1px),linear-gradient(90deg,#ffffff14_1px,transparent_1px)] bg-[size:22px_22px] opacity-[0.08]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Pill */}
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-[var(--k-border)]/60 bg-black/40 px-3 py-1 text-sm text-white/90 backdrop-blur">
          <span className="inline-flex h-6 min-w-10 items-center justify-center rounded-full btn-brand-gradient px-2 text-xs font-semibold">
            {t("services.pill")}
          </span>
        </div>

        {/* Title lines */}
        <h2 className="text-center text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          {t("services.title_line1")}<br className="hidden sm:block" />
          <span className="text-white/90">{t("services.title_line2")}</span>
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-base text-white/70 md:text-lg">
          {t("services.subtitle")}
        </p>

         {/* CTA */}
         <div className="mt-12 flex items-center justify-center">
          <Link
            href={BOOK_APPOINTMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand-gradient rounded-2xl px-6 py-3 text-base font-semibold text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] focus:outline-none focus:ring-2 ring-brand"
          >
            {t("services.cta")}
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <ServiceCard key={c.title} {...c} />
          ))}
        </div>

        {/* Chips */}
        {Array.isArray(chips) && chips.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {chips.map((label, idx) => (
              <span
                key={`${label}-${idx}`}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--k-border)]/60 bg-black/40 px-4 py-2 text-sm text-white/90"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full btn-brand-gradient text-[11px] text-white">
                  ●
                </span>
                {label}
              </span>
            ))}
          </div>
        )}

       
      </div>
    </section>
  );
};

export default Services;


