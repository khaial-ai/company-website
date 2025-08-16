"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { BOOK_APPOINTMENT_URL } from "@config/links";

type Testimonial = {
  name: string;
  role: string;
  rating: number; // 1..5
  quote: string;
  avatarInitial?: string; // Fallback if no image
  avatarSrc?: string; // Optional, not required
};

type TestimonialsProps = {
  items?: Testimonial[];
};

const Star = ({ filled }: { filled: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden
      className={filled ? "text-yellow-400" : "text-white/20"}
    >
      <path
        fill="currentColor"
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>
  );
};

const Avatar = ({ initial, src, alt }: { initial: string; src?: string; alt: string }) => {
  if (src) {
    return (
      <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full">
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(var(--k-ring-rgb),0.45),transparent_60%)]" />
        <Image src={src} alt={alt} width={48} height={48} className="relative h-12 w-12 rounded-full object-cover" />
      </span>
    );
  }
  return (
    <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full">
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(var(--k-ring-rgb),0.45),transparent_60%)]" />
      <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white text-lg font-semibold">
        {initial}
      </span>
    </span>
  );
};

const Testimonials = ({ items }: TestimonialsProps) => {
  const { t } = useTranslation("common");

  const defaultItems: Testimonial[] = [
    {
      name: "Sara",
      role: "Founder",
      rating: 5,
      quote:
        t("testimonials.quotes.0") ||
        "They not only delivered a top‑notch website but also provided strategic guidance that moved our metrics.",
      avatarInitial: "S",
    },
    {
      name: "Omar",
      role: "Product Lead",
      rating: 5,
      quote:
        t("testimonials.quotes.1") ||
        "The team understood our complex requirements and delivered a user‑friendly, scalable solution.",
      avatarInitial: "O",
    },
    {
      name: "Yousef",
      role: "Operations Manager",
      rating: 5,
      quote:
        t("testimonials.quotes.2") ||
        "Innovative solutions streamlined our operations; the experience and results exceeded expectations.",
      avatarInitial: "Y",
    },
  ];

  const testimonialsToRender = items && items.length > 0 ? items : defaultItems;

  return (
    <section
      aria-label={t("testimonials.section_aria")}
      className="relative isolate overflow-hidden py-24 sm:py-28"
    >
      {/* Top subtle purple band & dotted overlay */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[300px] bg-[radial-gradient(1200px_260px_at_50%_-30px,rgba(var(--k-ring-rgb),0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(#ffffff14_1px,transparent_1px),linear-gradient(90deg,#ffffff14_1px,transparent_1px)] bg-[size:22px_22px] opacity-[0.08]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Pill */}
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-[var(--k-border)]/60 bg-black/40 px-3 py-1 text-sm text-white/90 backdrop-blur">
          <span className="inline-flex h-6 min-w-10 items-center justify-center rounded-full btn-brand-gradient px-2 text-xs font-semibold">
            {t("testimonials.pill")}
          </span>
          <span className="text-white/80">{t("testimonials.pill_label")}</span>
        </div>

        {/* Title */}
        <h2 className="text-center text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          {t("testimonials.title_line1")}<br className="hidden sm:block" />
          <span className="text-white/90">{t("testimonials.title_line2")}</span>
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-base text-white/70 md:text-lg">
          {t("testimonials.subtitle")}
        </p>

        {/* CTA */}
        <div className="mt-8 mb-12 flex items-center justify-center">
          <Link
            href={BOOK_APPOINTMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand-gradient rounded-2xl px-6 py-3 text-base font-semibold text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] focus:outline-none focus:ring-2 ring-brand"
            aria-label={t("testimonials.cta_aria")}
          >
            {t("testimonials.cta")}
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsToRender.map((tItem, index) => (
            <article
              key={`${tItem.name}-${index}`}
              className="relative rounded-2xl border border-[var(--k-border)]/60 bg-black/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <Avatar initial={(tItem.avatarInitial || tItem.name?.[0] || "").slice(0, 1)} src={tItem.avatarSrc} alt={tItem.name} />
                <div className="flex min-w-0 flex-col">
                  <span className="truncate text-sm font-semibold text-white">{tItem.name}</span>
                  <span className="truncate text-xs text-white/60">{tItem.role}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1" aria-label={`Rating: ${tItem.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} filled={i < tItem.rating} />
                ))}
              </div>

              <p className="mt-4 text-[15px] leading-7 text-white/80">“{tItem.quote}”</p>

              {/* Decorative corner marks to mimic the reference */}
              <span className="pointer-events-none absolute right-4 top-4 text-white/20">×</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

 /* TODO: Implement Testimonials organism per maintenance_guide.md */

