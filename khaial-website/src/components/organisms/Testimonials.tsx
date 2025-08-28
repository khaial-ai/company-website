"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Pill from "@components/atoms/Pill";

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
      className="relative isolate overflow-hidden py-24 sm:py-32"
    >
      {/* Enhanced background with multiple gradient layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Primary gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/95 to-black" />
        {/* Purple accent gradients */}
        <div className="absolute inset-x-0 top-0 h-[400px] bg-[radial-gradient(1400px_300px_at_50%_-50px,rgba(var(--k-ring-rgb),0.15),transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[300px] bg-[radial-gradient(1200px_200px_at_50%_100%,rgba(var(--k-ring-rgb),0.08),transparent_60%)]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" />
        {/* Subtle dot pattern for texture */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Pill */}
        <div className="flex justify-center mb-8">
          <Pill 
            label={t("testimonials.pill")} 
            variant="brand"
            ariaLabel={t("testimonials.pill_label") || t("testimonials.pill")}
          />
        </div>

        {/* Title */}
        <h2 className="text-center text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          {t("testimonials.title_line1")}<br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            {t("testimonials.title_line2")}
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-base text-white/70 md:text-lg leading-relaxed">
          {t("testimonials.subtitle")}
        </p>

        {/* CTA */}
        <div className="mt-10 mb-16 flex items-center justify-center">
          <a
            href="#book-a-call"
            className="btn-brand-gradient rounded-2xl px-8 py-4 text-base font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.1)] transition-all duration-300 focus:outline-none focus:ring-2 ring-brand"
            aria-label={t("testimonials.cta_aria")}
          >
            {t("testimonials.cta")}
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsToRender.map((tItem, index) => (
            <article
              key={`${tItem.name}-${index}`}
              className="group relative rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-300"
            >
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--k-ring-rgb)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="flex items-center gap-4">
                  <Avatar initial={(tItem.avatarInitial || tItem.name?.[0] || "").slice(0, 1)} src={tItem.avatarSrc} alt={tItem.name} />
                  <div className="flex min-w-0 flex-col">
                    <span className="truncate text-base font-semibold text-white">{tItem.name}</span>
                    <span className="truncate text-sm text-white/60">{tItem.role}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-1" aria-label={`Rating: ${tItem.rating} out of 5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} filled={i < tItem.rating} />
                  ))}
                </div>

                <p className="mt-6 text-base leading-7 text-white/85">&ldquo;{tItem.quote}&rdquo;</p>

                {/* Subtle quote mark decoration */}
                <div className="absolute right-6 top-6 text-2xl text-white/10 font-serif">&ldquo;</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

 /* TODO: Implement Testimonials organism per maintenance_guide.md */

