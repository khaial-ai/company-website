"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { NAV_LINKS } from "@config/links";

const Navbar = () => {
  const { t } = useTranslation("common");
  const params = useParams<{ locale: string }>();
  const pathname = usePathname();
  const locale = params?.locale ?? "en";
  const localePrefix = `/${locale}`;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);
  const lastYRef = useRef(0);

  useEffect(() => {
    lastYRef.current = window.scrollY || 0;
    const handleScroll = () => {
      const currentY = window.scrollY || 0;
      const goingDown = currentY > lastYRef.current;
      setIsHidden(goingDown && currentY > 24);
      setIsTransparent(!goingDown && currentY > 24);
      lastYRef.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Prevent background scroll when mobile menu is open
    if (isMenuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const linksToShow = NAV_LINKS;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 border-b border-[var(--k-border)]/30 transition-all duration-300",
        isHidden ? "-translate-y-full" : "translate-y-0",
        isTransparent ? "bg-transparent" : "bg-black",
      ].join(" ")}
      aria-label="Main Navigation"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-5 py-4 md:py-5 lg:py-6">
          <Link href={localePrefix} className="inline-flex items-center gap-2" aria-label="Khaial AI Home">
            <Image src="/assets/logos/logo.png" alt="Khaial AI" width={56} height={56} className="block shrink-0 h-12 w-12 md:h-14 md:w-14 object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-sm">
            {linksToShow.map((item) => (
              <Link
                key={item.href}
                href={`${localePrefix}${item.href}`}
                className="text-[15px] text-white/70 hover:text-white transition-colors"
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={`${localePrefix}/contact`}
              className="hidden md:inline-flex btn-brand-gradient text-sm font-semibold text-white rounded-2xl px-6 py-2.5 focus:outline-none focus:ring-2 ring-brand"
            >
              {locale === "ar" ? "تواصل معنا" : "Get In Touch"}
            </Link>

            <button
              type="button"
              aria-label="Toggle Navigation"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((v) => !v)}
              className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--k-border)]/60 text-white/80 transition-colors focus:outline-none focus:ring-2 ring-brand"
            >
              <span className="sr-only">Menu</span>
              <span
                className={[
                  "relative block h-3 w-5",
                ].join(" ")}
              >
                <span
                  className={[
                    "absolute left-0 top-0 h-[1.5px] w-5 bg-white transition-transform duration-300 ease-in-out",
                    isMenuOpen ? "translate-y-[6px] rotate-45" : "translate-y-0 rotate-0",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-1/2 h-[1.5px] w-5 -translate-y-1/2 bg-white transition-opacity duration-200 ease-in-out",
                    isMenuOpen ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 bottom-0 h-[1.5px] w-5 bg-white transition-transform duration-300 ease-in-out",
                    isMenuOpen ? "-translate-y-[6px] -rotate-45" : "translate-y-0 rotate-0",
                  ].join(" ")}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Animated mobile dropdown using CSS grid to smoothly expand/collapse */}
        <div
          id="mobile-menu"
          className={[
            "md:hidden overflow-hidden transition-all duration-300 ease-out grid mt-2",
            isMenuOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{ gridTemplateRows: isMenuOpen ? "1fr" : "0fr" }}
          aria-hidden={!isMenuOpen}
        >
          <div className="min-h-0 pb-4">
            <nav className="flex flex-col gap-2 rounded-2xl border border-[var(--k-border)]/60 bg-black/80 p-4 backdrop-blur-sm shadow-lg shadow-black/20">
              {linksToShow.map((item, idx) => (
                <Link
                  key={item.href}
                  href={`${localePrefix}${item.href}`}
                  className={[
                    "rounded-md px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 transform transition-all duration-300",
                    isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                  ].join(" ")}
                  style={{ transitionDelay: `${(idx + 1) * 40}ms` }}
                >
                  {t(item.labelKey)}
                </Link>
              ))}
              <Link
                href={`${localePrefix}/contact`}
                className={[
                  "mt-1 btn-brand-gradient text-sm font-semibold text-white rounded-2xl px-5 py-3 text-center w-full transition-transform duration-300",
                  isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                ].join(" ")}
                style={{ transitionDelay: `${(linksToShow.length + 1) * 40}ms` }}
              >
                {locale === "ar" ? "تواصل معنا" : "Get In Touch"}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


