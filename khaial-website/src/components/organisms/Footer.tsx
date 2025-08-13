"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { NAV_LINKS, SOCIAL_LINKS, LEGAL_LINKS } from "@config/links";

type SubscribeFormProps = {
  onSubmit?: (email: string) => void;
};

const SubscribeForm = ({ onSubmit }: SubscribeFormProps) => {
  const { t } = useTranslation("common");
  return (
    <form
      className="w-full max-w-xl"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = String(formData.get("email") || "");
        onSubmit?.(email);
        console.log("Subscribe:", email);
      }}
      aria-label={t("footer.subscribe_form")}
    >
      <div className="flex items-center gap-2 rounded-full border border-[var(--k-border)] bg-[var(--k-surface)]/60 px-2 py-2 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        <input
          name="email"
          type="email"
          required
          placeholder={t("footer.email_placeholder")}
          className="flex-1 bg-transparent px-3 py-1 text-sm outline-none placeholder:text-[var(--k-text-muted)]"
          aria-label={t("footer.email_input_label")}
        />
        <button
          type="submit"
          className="btn-brand-gradient text-sm font-medium text-white rounded-full px-5 py-2 focus:outline-none focus:ring-2 ring-brand"
          aria-label={t("footer.subscribe_cta")}
        >
          {t("footer.subscribe_cta")}
        </button>
      </div>
    </form>
  );
};

const Footer = () => {
  const { t } = useTranslation("common");
  const params = useParams<{ locale: string }>();
  const localePrefix = `/${params?.locale ?? "en"}`;

  return (
    <footer className="relative text-white">
      <div className="bg-brand-gradient">
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="flex flex-col gap-4">
              <Link href={localePrefix} className="inline-flex items-center gap-3" aria-label="Khaial AI Home">
                <Image src="/assets/logos/logo.png" alt="Khaial AI" width={72} height={72} className="h-14 w-14 object-contain" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="mb-3 text-lg font-semibold text-white/90">{t("footer.navigate")}</h3>
                <ul className="space-y-2">
                  {NAV_LINKS.map((item) => (
                    <li key={item.href}>
                      <Link href={`${localePrefix}${item.href}`} className="text-sm text-white/80 hover:text-white">
                        {t(item.labelKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-lg font-semibold text-white/90">{t("footer.social")}</h3>
                <ul className="space-y-2">
                  {SOCIAL_LINKS.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-white">
                        {t(item.labelKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white/90">{t("footer.subscribe_title")}</h3>
              <SubscribeForm />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--k-border)]/60 bg-black/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-4 md:flex-row">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Khaial AI</p>
          <nav className="flex items-center gap-6" aria-label={t("footer.legal_nav")}> 
            {LEGAL_LINKS.map((item) => (
              <Link key={item.href} href={`${localePrefix}${item.href}`} className="text-xs text-white/70 hover:text-white">
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


