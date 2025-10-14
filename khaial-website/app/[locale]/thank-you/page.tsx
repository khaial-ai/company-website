"use client";

import Layout from "@components/Layout";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function ThankYouPage() {
  const { t } = useTranslation("common");
  const params = useParams<{ locale: string }>();
  const locale = params?.locale === "ar" ? "ar" : "en";
  const localePrefix = `/${locale}`;
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <Layout hideFooter>
      <section className="relative isolate min-h-[calc(100vh-64px)] bg-brand-gradient">
        {/* Decorative glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-120px] h-[420px] w-[720px] -translate-x-1/2 rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(139,92,246,0.45) 0%, rgba(139,92,246,0) 100%)" }} />
        </div>

        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-6 py-20 md:py-28 text-center">
          <div className={[
            "w-full rounded-3xl border border-[var(--k-border)]/60 bg-white/5 p-8 sm:p-10 md:p-12 backdrop-blur-xl",
            "shadow-[0_10px_50px_rgba(0,0,0,0.25),inset_0_0_0_1px_rgba(255,255,255,0.04)]",
            "transition-all duration-500",
            isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          ].join(" ")}
          >
            <div className="relative mx-auto mb-6 h-16 w-16">
              <div className="absolute inset-0 rounded-full bg-[rgba(139,92,246,0.45)] animate-ping" aria-hidden />
              <div className="relative flex h-full w-full items-center justify-center rounded-full btn-brand-gradient shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="pointer-events-none absolute -right-3 top-1 h-1.5 w-1.5 rounded-full btn-brand-gradient opacity-70 animate-pulse" aria-hidden />
                <span className="pointer-events-none absolute -left-3 bottom-1 h-1 w-1 rounded-full btn-brand-gradient opacity-60 animate-pulse" aria-hidden />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              {t("thankYou.heading")}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-white/70">
              {t("thankYou.subtitle")}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={`${localePrefix}`}
                aria-label={t("whatsapp.cta_back_home") as string}
                className="inline-flex items-center justify-center text-center rounded-2xl border border-[var(--k-border)]/60 bg-white text-black px-6 py-3 text-sm md:text-base font-medium shadow-sm hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                {t("whatsapp.cta_back_home")}
              </Link>
              <a
                href="#book-a-call"
                className="btn-brand-gradient rounded-2xl px-6 py-3 text-sm md:text-base font-semibold text-white shadow-[0_12px_40px_rgba(147,51,234,0.3),0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_16px_50px_rgba(147,51,234,0.4),0_0_0_1px_rgba(255,255,255,0.1)] transition-all duration-300 focus:outline-none focus:ring-2 ring-brand"
                aria-label={t("cta.button") as string}
              >
                {t("cta.button")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}


