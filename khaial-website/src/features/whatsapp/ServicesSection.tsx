"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import Pill from "@components/atoms/Pill";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const IconShell = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
    {children}
  </div>
);

const AgentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-6 w-6">
    <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm-9 9a9 9 0 1118 0H3z" />
  </svg>
);

const SupportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-6 w-6">
    <path d="M12 2a8 8 0 00-8 8v3a3 3 0 003 3h1v-6H6a6 6 0 1112 0h-2v6h1a3 3 0 003-3v-3a8 8 0 00-8-8z" />
  </svg>
);

const LoopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-6 w-6">
    <path d="M17 1l4 4-4 4V6H7a3 3 0 000 6h2v2H7a5 5 0 110-10h10V1zm0 9h-2V8h2a3 3 0 010 6H7l4 4-4 4v-3H7a5 5 0 100-10h10z" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-6 w-6">
    <path d="M7 2h2v2h6V2h2v2h3a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h3V2zm14 8H3v10h18V10z" />
  </svg>
);

const BoltIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-6 w-6">
    <path d="M13 2L3 14h7v8l10-12h-7z" />
  </svg>
);

const MegaphoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-6 w-6">
    <path d="M21 8l-8 4v8l8-4V8zM3 10h8v8H3a2 2 0 01-2-2v-4a2 2 0 012-2z" />
  </svg>
);


const WhatsAppServicesSection = () => {
  const { t } = useTranslation("common");
  const params = useParams<{ locale: string }>();
  const isRTL = params?.locale === "ar";

  const services: Service[] = [
    {
      title: t("whatsappServices.items.0.title"),
      description: t("whatsappServices.items.0.desc"),
      icon: (
        <IconShell>
          <AgentIcon />
        </IconShell>
      ),
    },
    {
      title: t("whatsappServices.items.1.title"),
      description: t("whatsappServices.items.1.desc"),
      icon: (
        <IconShell>
          <SupportIcon />
        </IconShell>
      ),
    },
    {
      title: t("whatsappServices.items.2.title"),
      description: t("whatsappServices.items.2.desc"),
      icon: (
        <IconShell>
          <LoopIcon />
        </IconShell>
      ),
    },
    {
      title: t("whatsappServices.items.3.title"),
      description: t("whatsappServices.items.3.desc"),
      icon: (
        <IconShell>
          <CalendarIcon />
        </IconShell>
      ),
    },
    {
      title: t("whatsappServices.items.4.title"),
      description: t("whatsappServices.items.4.desc"),
      icon: (
        <IconShell>
          <BoltIcon />
        </IconShell>
      ),
    },
    {
      title: t("whatsappServices.items.5.title"),
      description: t("whatsappServices.items.5.desc"),
      icon: (
        <IconShell>
          <MegaphoneIcon />
        </IconShell>
      ),
    },
  ];

  const handleSeeItInAction = () => {
    const anchor = document.getElementById("demo");
    if (!anchor) return;
    anchor.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="relative isolate overflow-hidden mx-auto mt-24 md:mt-32 w-full max-w-7xl px-6 py-24 sm:py-32 scroll-mt-24"
      aria-label={t("whatsappServices.aria")}
    >
      {/* Heading group */}
      <div className="flex justify-center mb-8">
        <Pill label={t("whatsappServices.pill")} variant="brand" ariaLabel={t("whatsappServices.pill")} />
      </div>
      <h2 className="text-center text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
        {t("whatsappServices.heading")}
      </h2>
      <p className="mx-auto mt-8 max-w-3xl text-center text-base text-white/70 md:text-lg leading-relaxed">
        {t("whatsappServices.subtitle")}
      </p>
      {/* Subtle background accents to match Benefits */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-gray-900/35 to-black/0" />
        <div className="absolute inset-x-0 top-0 h-[220px] bg-[radial-gradient(900px_220px_at_50%_-40px,rgba(var(--k-ring-rgb),0.06),transparent_72%)]" />
      </div>

      {/* Panel wrapper for clear segregation */}
      <div className="mt-10 rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-sm">
        <div className={`grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 ${isRTL ? "[direction:rtl]" : ""}`}>
          {services.map((service, idx) => (
            <article
              key={idx}
              tabIndex={0}
              role="article"
              aria-label={service.title}
              className="group relative min-h-[220px] rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 lg:p-7 text-white shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] focus:outline-none"
            >
              {/* Subtle glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--k-ring-rgb)]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex items-center">{service.icon}</div>
                <h3 className="mt-3 text-base font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">{service.description}</p>
                <button
                  type="button"
                  onClick={handleSeeItInAction}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-white/90 transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 ring-brand"
                  aria-label={t("whatsappServices.cta")}
                >
                  {t("whatsappServices.cta")}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsAppServicesSection;


