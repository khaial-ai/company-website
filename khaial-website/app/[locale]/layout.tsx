import "@/styles/globals.css";
import Providers from "./providers";
import type { ReactNode } from "react";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // html/body are defined at the root layout. Apply locale via Providers
  return <Providers locale={locale}>{children}</Providers>;
}

