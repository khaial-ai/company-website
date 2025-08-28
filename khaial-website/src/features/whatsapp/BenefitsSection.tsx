"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import Pill from "@components/atoms/Pill";

type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
    {children}
  </div>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    className="h-6 w-6"
  >
    <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
  </svg>
);

const SparkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-6 w-6">
    <path d="M12 2l1.7 4.8L18 8.5l-4.3 1.7L12 15l-1.7-4.8L6 8.5l4.3-1.7z" />
  </svg>
);

const LoopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-6 w-6">
    <path d="M17 1l4 4-4 4V6H7a3 3 0 000 6h2v2H7a5 5 0 110-10h10V1zm0 9h-2V8h2a3 3 0 010 6H7l4 4-4 4v-3H7a5 5 0 100-10h10z" />
  </svg>
);

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-6 w-6">
    <path d="M3.9 12a5 5 0 015-5h3v2h-3a3 3 0 100 6h3v2h-3a5 5 0 01-5-5zm6-1h4v2h-4v-2zm5.1-4h-3V5h3a5 5 0 110 10h-3v-2h3a3 3 0 100-6z" />
  </svg>
);

const BenefitsSection = () => {
  const { t } = useTranslation("common");
  const params = useParams<{ locale: string }>();
  const isRTL = params?.locale === "ar";

  const benefits: Benefit[] = [
    {
      title: t("whatsappBenefits.items.0.title"),
      description: t("whatsappBenefits.items.0.desc"),
      icon: (
        <IconWrapper>
          <CheckIcon />
        </IconWrapper>
      ),
    },
    {
      title: t("whatsappBenefits.items.1.title"),
      description: t("whatsappBenefits.items.1.desc"),
      icon: (
        <IconWrapper>
          <SparkIcon />
        </IconWrapper>
      ),
    },
    {
      title: t("whatsappBenefits.items.2.title"),
      description: t("whatsappBenefits.items.2.desc"),
      icon: (
        <IconWrapper>
          <LoopIcon />
        </IconWrapper>
      ),
    },
    {
      title: t("whatsappBenefits.items.3.title"),
      description: t("whatsappBenefits.items.3.desc"),
      icon: (
        <IconWrapper>
          <LinkIcon />
        </IconWrapper>
      ),
    },
  ];

  return (
    <section
      className="relative isolate overflow-hidden mx-auto mt-24 md:mt-32 py-24 sm:py-32 scroll-mt-24 mb-24 sm:mb-32"
      aria-label={t("whatsappBenefits.aria")}
    >
      {/* Subtle background accents to match Testimonials */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-gray-900/35 to-black/0" />
        <div className="absolute inset-x-0 top-0 h-[220px] bg-[radial-gradient(900px_220px_at_50%_-40px,rgba(var(--k-ring-rgb),0.06),transparent_72%)]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Pill */}
        <div className="flex justify-center mb-8">
          <Pill
            label={t("whatsappBenefits.pill")}
            variant="brand"
            ariaLabel={t("whatsappBenefits.pill")}
          />
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          {t("whatsappBenefits.heading")}
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-base text-white/70 md:text-lg leading-relaxed">
          {t("whatsappBenefits.subtitle")}
        </p>

        {/* Panel wrapper for clear segregation */}
        <div className="mt-10 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-sm">
          <div className={`grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4 ${isRTL ? "[direction:rtl]" : ""}`}>
            {benefits.map((benefit, index) => (
              <article
                key={index}
                tabIndex={0}
                role="article"
                aria-label={benefit.title}
                className="group relative min-h-[220px] rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 lg:p-7 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] focus:outline-none"
              >
                {/* Subtle glow on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--k-ring-rgb)]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center">{benefit.icon}</div>
                  <h3 className="mt-3 text-base font-semibold tracking-tight text-white">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {benefit.description}
                  </p>
                  <div className="pointer-events-none mt-4 h-[2px] w-0 bg-white/80 transition-all duration-300 ease-out group-hover:w-full group-focus:w-full" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;


