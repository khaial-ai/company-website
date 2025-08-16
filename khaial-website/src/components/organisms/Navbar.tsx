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

  const linksToShow = NAV_LINKS.filter((l) => l.href !== "/#about");

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 border-b border-[var(--k-border)]/60 transition-all duration-300",
        isHidden ? "-translate-y-full" : "translate-y-0",
        isTransparent ? "bg-transparent" : "bg-black",
      ].join(" ")}
      aria-label="Main Navigation"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex h-14 items-center justify-between gap-3 md:h-16">
          <Link href={localePrefix} className="inline-flex items-center gap-2" aria-label="Khaial AI Home">
            <Image src="/assets/logos/logo.png" alt="Khaial AI" width={28} height={28} className="h-7 w-7 object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm">
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
              className="hidden md:inline-flex btn-brand-gradient text-sm font-semibold text-white rounded-xl px-5 py-2 focus:outline-none focus:ring-2 ring-brand"
            >
              {locale === "ar" ? "تواصل معنا" : "Get In Touch"}
            </Link>

            <button
              type="button"
              aria-label="Toggle Navigation"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((v) => !v)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--k-border)]/60 text-white/80"
            >
              <span className="sr-only">Menu</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-3 rounded-lg border border-[var(--k-border)]/60 bg-black/80 p-3">
              {linksToShow.map((item) => (
                <Link
                  key={item.href}
                  href={`${localePrefix}${item.href}`}
                  className="rounded-md px-3 py-2 text-white/80 hover:text-white hover:bg-white/5"
                >
                  {t(item.labelKey)}
                </Link>
              ))}
              <Link
                href={`${localePrefix}/contact`}
                className="btn-brand-gradient text-sm font-semibold text-white rounded-lg px-4 py-2 text-center"
              >
                {locale === "ar" ? "تواصل معنا" : "Get In Touch"}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;


