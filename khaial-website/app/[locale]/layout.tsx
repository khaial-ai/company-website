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
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body>
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}

