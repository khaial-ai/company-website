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
  ctaPrimaryHref = "/contact",
  ctaSecondaryHref = "/#about",
}: HeroProps) => {
  const { t } = useTranslation("common");
  const params = useParams<{ locale: string }>();
  const localePrefix = `/${params?.locale ?? "en"}`;

  return (
    <section className="relative isolate overflow-hidden pt-16 md:pt-24">
      {/* Background image per provided CSS */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgSrc}
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center w-full h-[70%]"
        />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Badge */}
        <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-[var(--k-border)]/60 bg-black/40 px-3 py-1 text-sm text-white/90 backdrop-blur">
          <span className="inline-flex h-6 min-w-10 items-center justify-center rounded-full btn-brand-gradient px-2 text-xs font-semibold">{t(
            "hero.year_badge"
          )}</span>
          <span>{t("hero.studio_label")}</span>
        </div>

        {/* Title */}
        <h1 className="text-center text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          {t("hero.title_line1")}<br className="hidden sm:block" />
          {t("hero.title_line2")}<br className="hidden sm:block" />
          {t("hero.title_line3")}
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-base text-white/70 md:text-lg">
          {t("hero.subtitle")}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href={`${localePrefix}${ctaPrimaryHref}`}
            className="rounded-xl border border-[var(--k-border)]/60 bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90"
          >
            {t("hero.cta_primary")}
          </Link>
          <Link
            href={`${localePrefix}${ctaSecondaryHref}`}
            className="btn-brand-gradient rounded-xl px-5 py-2.5 text-sm font-semibold text-white focus:outline-none focus:ring-2 ring-brand"
          >
            {t("hero.cta_secondary")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;


