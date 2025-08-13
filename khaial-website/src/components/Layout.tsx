"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@components/LanguageSwitcher";
import Footer from "@components/organisms/Footer";

const Layout = ({ children }: PropsWithChildren) => {
  const params = useParams<{ locale: string }>();
  const isRTL = params?.locale === "ar";
  const { t } = useTranslation("common");

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <Link href={`/${params?.locale ?? "en"}`} className="text-lg font-semibold" aria-label="Khaial AI Home">
            Khaial AI
          </Link>
          <nav className={`hidden md:flex items-center gap-6 ${isRTL ? "flex-row-reverse" : ""}`} aria-label="Main Navigation">
            <Link href={`/${params?.locale ?? "en"}`} className="hover:underline">
              {t("navigation.home")}
            </Link>
            <Link href={`/${params?.locale ?? "en"}/whatsapp`} className="hover:underline">
              {t("navigation.whatsapp")}
            </Link>
            <Link href={`/${params?.locale ?? "en"}/contact`} className="hover:underline">
              {t("navigation.contact")}
            </Link>
            <Link href={`/${params?.locale ?? "en"}/faq`} className="hover:underline">
              {t("navigation.faq")}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;


