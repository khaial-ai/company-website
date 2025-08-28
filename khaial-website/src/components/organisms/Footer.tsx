"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { NAV_LINKS, SOCIAL_LINKS, LEGAL_LINKS, BOOK_APPOINTMENT_URL } from "@config/links";
import Pill from "@components/atoms/Pill";

const Footer = () => {
  const { t } = useTranslation("common");
  const params = useParams<{ locale: string }>();
  const localePrefix = `/${params?.locale ?? "en"}`;

  return (
    <footer className="relative text-white">
      <div className="relative bg-footer-gradient">
        {/* Full-width CTA area */}
        <section className="relative w-full px-6 pt-16 md:pt-24">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(600px_160px_at_50%_-20px,rgba(var(--k-ring-rgb),0.22),transparent_70%)]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <Pill label={t("cta.pill")} variant="brand" />
            <h2 className="mt-6 text-balance text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              {t("cta.title_primary")}
            </h2>
            <h3 className="text-balance mt-2 text-3xl font-semibold leading-tight text-white/85 sm:text-4xl md:text-5xl">
              {t("cta.title_secondary")}
            </h3>
            <p className="mx-auto mt-6 max-w-3xl text-base text-white/85 md:text-lg">
              {t("cta.subtitle")}
            </p>
            <div className="mt-8">
              <a
                href={BOOK_APPOINTMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand-gradient inline-flex items-center justify-center rounded-2xl px-6 py-3 my-14 text-base font-semibold text-white focus:outline-none focus:ring-2 ring-brand"
                aria-label={t("cta.button")}
              >
                {t("cta.button")}
              </a>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:14px_14px] opacity-35" />
        </section>

        {/* Bottom legal bar */}
        <div className="border-t border-[var(--k-border)]/50 bg-black/15">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 md:flex-row">
            <p className="text-sm text-white/70">© {new Date().getFullYear()} Khaial AI</p>
            <nav className="flex items-center gap-4" aria-label={t("footer.legal_nav")}> 
              {LEGAL_LINKS.map((item, idx) => (
                <React.Fragment key={item.href}>
                  <Link
                    href={`${localePrefix}${item.href}`}
                    className="text-sm text-white/80 hover:text-white hover:underline underline-offset-4"
                  >
                    {t(item.labelKey)}
                  </Link>
                  {idx < LEGAL_LINKS.length - 1 ? (<span aria-hidden className="hidden md:inline-block h-4 w-px bg-white/20" />) : null}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


