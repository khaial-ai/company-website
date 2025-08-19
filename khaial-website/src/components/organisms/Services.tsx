"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { BOOK_APPOINTMENT_URL } from "@config/links";
import Pill from "@components/atoms/Pill";



const Services = () => {
  const { t } = useTranslation("common");

  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-32">
      {/* Enhanced background with deep purple gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Primary deep gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/80 via-purple-900/60 to-black" />
        {/* Central purple glow */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px] bg-[radial-gradient(1200px_400px_at_50%_50%,rgba(147,51,234,0.4),transparent_70%)]" />
        {/* Top accent */}
        <div className="absolute inset-x-0 top-0 h-[400px] bg-[radial-gradient(1400px_300px_at_50%_-50px,rgba(147,51,234,0.2),transparent_60%)]" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-t from-black to-transparent" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Pill */}
        <div className="flex justify-center mb-8">
          <Pill 
            label={t("services.pill")} 
            variant="brand"
            icon={
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor" />
                </svg>
              </span>
            }
          />
        </div>

        {/* Title lines */}
        <h2 className="text-center text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          {t("services.title_line1")}<br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            {t("services.title_line2")}
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-base text-white/60 md:text-lg leading-relaxed">
          {t("services.subtitle")}
        </p>

        {/* CTA */}
        <div className="mt-12 flex items-center justify-center">
          <Link
            href={BOOK_APPOINTMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand-gradient rounded-2xl px-8 py-4 text-base font-semibold text-white shadow-[0_12px_40px_rgba(147,51,234,0.3),0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_16px_50px_rgba(147,51,234,0.4),0_0_0_1px_rgba(255,255,255,0.1)] transition-all duration-300 focus:outline-none focus:ring-2 ring-purple-500"
          >
            {t("services.cta")}
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;


