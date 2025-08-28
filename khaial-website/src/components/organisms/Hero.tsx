"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

type HeroProps = {
  bgSrc?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryHref?: string;
};

const Hero = ({
  bgSrc = "/assets/bg/hero-bg.png",
  ctaPrimaryHref = "#book-a-call",
  ctaSecondaryHref = "/#about",
}: HeroProps) => {
  const { t } = useTranslation("common");
  const params = useParams<{ locale: string }>();
  const localePrefix = `/${params?.locale ?? "en"}`;

  return (
    <section className="relative isolate overflow-hidden pt-32 sm:pt-40 md:pt-44 lg:pt-48 pb-24 md:pb-36 lg:pb-48">
      {/* Background image per provided CSS */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgSrc}
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center w-full h-full"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Badge */}
        <div className="mx-auto mb-10 flex w-fit items-center gap-3 rounded-full border border-[var(--k-border)]/60 bg-black/40 px-4 py-1.5 text-sm text-white/90 backdrop-blur">
          <span className="inline-flex h-7 min-w-10 items-center justify-center rounded-full btn-brand-gradient px-3 text-xs font-semibold">{t(
            "hero.year_badge"
          )}</span>
          <span>{t("hero.studio_label")}</span>
        </div>

        {/* Title */}
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
          {t("hero.title_line1")}<br className="hidden sm:block" />
          {t("hero.title_line2")}<br className="hidden sm:block" />
          {t("hero.title_line3")}
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-base sm:text-lg text-white/70">
          {t("hero.subtitle")}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href={`${localePrefix}${ctaPrimaryHref}`}
            aria-label={t("hero.cta_primary") as string}
            className="inline-flex items-center justify-center text-center rounded-2xl border border-[var(--k-border)]/60 bg-white text-black px-6 py-3 text-sm md:text-base font-medium shadow-sm hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            {t("hero.cta_primary")}
          </Link>
          <Link
            href={`${localePrefix}${ctaSecondaryHref}`}
            aria-label={t("hero.cta_secondary") as string}
            className="inline-flex items-center justify-center text-center btn-brand-gradient rounded-2xl px-6 py-3 text-sm md:text-base font-semibold text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] focus:outline-none focus:ring-2 ring-brand"
          >
            {t("hero.cta_secondary")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;


