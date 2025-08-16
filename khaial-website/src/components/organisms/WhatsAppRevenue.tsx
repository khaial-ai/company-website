"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { BOOK_APPOINTMENT_URL } from "@config/links";

type WhatsAppRevenueProps = {
  titleLine1Key?: string;
  titleLine2Key?: string;
  pillKey?: string;
  bulletsKeys?: string[];
  ctaKey?: string;
  ratingLabelKey?: string;
  mediaSrc?: string;
  mediaAlt?: string;
};

const Star = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 3l2.4 4.86 5.37.78-3.88 3.79.92 5.35L12 15.9 7.19 17.78l.92-5.35L4.23 8.64l5.37-.78L12 3z" />
  </svg>
);

const WhatsAppRevenue = ({
  titleLine1Key = "whatsappRevenue.title_l1",
  titleLine2Key = "whatsappRevenue.title_l2",
  pillKey = "whatsappRevenue.pill",
  bulletsKeys = [
    "whatsappRevenue.bullets.0",
    "whatsappRevenue.bullets.1",
    "whatsappRevenue.bullets.2",
    "whatsappRevenue.bullets.3",
  ],
  ctaKey = "whatsappRevenue.cta",
  ratingLabelKey = "whatsappRevenue.rating",
  mediaSrc = "/assets/bg/hero-bg.png",
  mediaAlt = "Workspace photo",
}: WhatsAppRevenueProps) => {
  const { t } = useTranslation("common");
  const params = useParams<{ locale: string }>();
  const isRTL = params?.locale === "ar";

  const handleBook = () => {
    if (!BOOK_APPOINTMENT_URL) return;
    window.open(BOOK_APPOINTMENT_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_300px_at_50%_20%,rgba(var(--k-ring-rgb),0.18),transparent_60%)]" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        {/* Left copy */}
        <div>
          {/* Tag pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-sm text-white/90 backdrop-blur">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <circle cx="12" cy="12" r="5" />
              </svg>
            </span>
            {t(pillKey)}
          </div>

          {/* Title */}
          <h2 className="text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            {t(titleLine1Key)}
          </h2>
          <h3 className="mt-2 text-3xl font-semibold leading-tight text-white/70 sm:text-4xl">
            {t(titleLine2Key)}
          </h3>

          {/* Bullets */}
          <ul className="mt-10 space-y-5 text-white/85">
            {bulletsKeys.map((key, idx) => (
              <li key={idx} className="text-lg">
                <span className="mr-2 text-white/60">=&gt;</span> {t(key)}
              </li>
            ))}
          </ul>

          {/* CTA + rating */}
          <div className={`mt-10 flex items-center gap-6 ${isRTL ? "flex-row-reverse" : ""}`}>
            <button
              type="button"
              onClick={handleBook}
              className="rounded-2xl bg-white px-6 py-3 text-base font-semibold text-black shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:bg-white/90 focus:outline-none focus:ring-2 ring-brand"
              aria-label={t(ctaKey)}
            >
              {t(ctaKey)}
            </button>
            <div className="flex items-center gap-2 text-white/80">
              <div className="flex items-center text-yellow-300">
                <Star /><Star /><Star /><Star /><Star />
              </div>
              <span className="text-sm md:text-base">{t(ratingLabelKey)}</span>
            </div>
          </div>
        </div>

        {/* Right media card */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-[0_30px_120px_-20px_rgba(124,58,237,0.35)]">
            <div className="pt-[66%]" />
            <Image
              src={mediaSrc}
              alt={mediaAlt}
              fill
              sizes="(min-width: 768px) 540px, 100vw"
              className="absolute inset-0 h-full w-full object-cover"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppRevenue;


