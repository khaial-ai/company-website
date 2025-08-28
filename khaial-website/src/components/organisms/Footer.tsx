"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { LEGAL_LINKS } from "@config/links";
import Cal, { getCalApi } from "@calcom/embed-react";

const Footer = () => {
  const { t } = useTranslation("common");
  const params = useParams<{ locale: string }>();
  const localePrefix = `/${params?.locale ?? "en"}`;

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "discovery-call" });
      cal("ui", { hideEventTypeDetails: true, layout: "month_view" });
    })();
  }, []);

  return (
    <footer className="relative text-white">
      <div className="relative bg-footer-gradient">
        {/* Booking CTA + Calendar layout */}
        <section id="book-a-call" className="relative w-full px-6 pt-12 md:pt-20 pb-10 min-h-screen">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(600px_160px_at_50%_-20px,rgba(var(--k-ring-rgb),0.22),transparent_70%)]" />
          <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:[grid-template-columns:1fr_560px] gap-10 lg:gap-14 items-start lg:items-center">
            {/* Left copy */}
            <div className="flex flex-col justify-center min-h-[520px] lg:min-h-[560px]">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight text-balance">
                {t("discovery.title_l1")}<span className="block">{t("discovery.title_l2")}</span>
              </h2>
              <p className="mt-2 text-4xl sm:text-5xl italic font-serif text-white/90">{t("discovery.title_italic")}</p>
              <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/80">
                {t("discovery.subtitle")}
              </p>
            </div>

            {/* Right calendar card */}
            <div className="w-full lg:justify-self-end max-w-[560px]">
              {/* Notice */}
              <div className="mb-4 rounded-2xl border border-fuchsia-600/40 bg-fuchsia-900/20 p-4 text-sm text-fuchsia-200">
                <p>
                  Experiencing a high volume of bookings, so slots are limited. For faster
                  service, email <a href="mailto:info@khaial.ai" className="underline hover:text-white">info@khaial.ai</a> for a same-day response.
                </p>
              </div>

              {/* Calendar container */}
              <div className="rounded-2xl border border-white/10 bg-black/30 p-2 min-h-[520px] lg:min-h-[560px] max-h-[72vh] md:max-h-[78vh] overflow-y-auto">
                <Cal
                  namespace="discovery-call"
                  calLink="khaial-ai/discovery-call"
                  style={{ width: "100%", height: "100%" }}
                  config={{ layout: "month_view" }}
                />
              </div>
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
                  {idx < LEGAL_LINKS.length - 1 ? (
                    <span aria-hidden className="hidden md:inline-block h-4 w-px bg-white/20" />
                  ) : null}
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


