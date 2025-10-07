"use client";

import { useTranslation } from "react-i18next";
import { useParams, useRouter } from "next/navigation";
import { BOOK_APPOINTMENT_URL } from "@config/links";

export type CTASectionProps = {
  titlePrimaryKey?: string; // main bold line
  titleSecondaryKey?: string; // faded line
  subtitleKey?: string;
  pillKey?: string;
  ctaLabelKey?: string;
  ctaHref?: string; // override default booking URL
};

const CTASection = ({
  titlePrimaryKey = "cta.title_primary",
  titleSecondaryKey = "cta.title_secondary",
  subtitleKey = "cta.subtitle",
  pillKey = "cta.pill",
  ctaLabelKey = "cta.button",
  ctaHref,
}: CTASectionProps) => {
  const { t } = useTranslation("common");
  const params = useParams<{ locale: string }>();
  const router = useRouter();
  const locale = params?.locale ?? "en";

  const handleCtaClick = () => {
    const target = ctaHref ?? BOOK_APPOINTMENT_URL;
    if (!target) {
      console.log("CTA clicked");
      return;
    }
    if (target.startsWith("http")) {
      window.open(target, "_blank", "noopener,noreferrer");
      return;
    }
    router.push(`/${locale}${target}`);
  };

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(var(--k-ring-rgb),0.25),transparent_60%)]" />

      {/* Framed panel */}
      <div className="relative overflow-hidden rounded-3xl border border-[var(--k-border)]/60 bg-black/40 p-6 md:p-10">
        {/* Subtle dotted grid */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:12px_12px] opacity-40" />

        <div className="relative">
          {/* Pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--k-border)]/60 bg-white/5 px-3 py-1 text-sm text-white/90">
            <span aria-hidden className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3l2.1 4.26L19 8.27l-3.4 3.32L16.2 16 12 13.77 7.8 16l.6-4.41L5 8.27l4.9-1L12 3z" fill="currentColor" opacity="0.9" />
              </svg>
            </span>
            {t(pillKey)}
          </div>

          {/* Headline */}
          <h2 className="text-balance text-3xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            {t(titlePrimaryKey)}
          </h2>
          <h3 className="text-balance mt-3 text-2xl font-semibold leading-tight text-white/60 sm:text-4xl md:text-5xl">
            {t(titleSecondaryKey)}
          </h3>

          {/* Subtext */}
          <p className="mt-8 max-w-3xl text-center md:text-left text-base text-white/70 md:text-lg">
            {t(subtitleKey)}
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <button
              type="button"
              onClick={handleCtaClick}
              className="btn-brand-gradient rounded-2xl px-6 py-3 text-base font-semibold text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] focus:outline-none focus:ring-2 ring-brand"
              aria-label={t(ctaLabelKey)}
            >
              {t(ctaLabelKey)}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;


