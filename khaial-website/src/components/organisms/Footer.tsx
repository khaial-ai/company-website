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
            <div className="flex items-center gap-4">
              <p className="text-sm text-white/70">© {new Date().getFullYear()} Khaial AI</p>
              <div className="hidden md:flex items-center gap-3" aria-label={t("footer.social")}>
                <a
                  href="https://instagram.com/khaial_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("social.instagram") as string}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6"/>
                    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@khaial.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("social.tiktok") as string}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M15.5 3.5c.7 1.5 2.1 3 4 3.3v3c-1.7-.1-3.3-.7-4.6-1.7v6.2c0 3-2.4 5.4-5.4 5.4S4.1 17.3 4.1 14.3c0-2.7 1.9-5 4.5-5.4v3C7.6 12.2 6.6 13.2 6.6 14.4c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V3.5h3.9z" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@khaialai"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("social.youtube") as string}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.5 5 12 5 12 5s-6.5 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.5 2 12 2 12s0 3.5.4 4.8c.2.9.9 1.6 1.8 1.8C5.5 19 12 19 12 19s6.5 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.3.4-4.8.4-4.8s0-3.5-.4-4.8zM10 15V9l5 3-5 3z"/>
                  </svg>
                </a>
              </div>
            </div>
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


