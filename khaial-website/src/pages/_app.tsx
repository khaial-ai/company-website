import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import "../../next-i18next.config";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { theme } from "@/theme/theme";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const isRTL = router.locale === "ar";
    if (typeof document !== "undefined") {
      document.documentElement.dir = isRTL ? "rtl" : "ltr";
      document.documentElement.lang = router.locale ?? "en";
      // Apply theme CSS variables
      const root = document.documentElement;
      root.style.setProperty("--background", theme.colors.background);
      root.style.setProperty("--foreground", theme.colors.foreground);
      root.style.setProperty("--color-primary", theme.colors.primary);
      root.style.setProperty("--color-secondary", theme.colors.secondary);
      root.style.setProperty("--color-accent", theme.colors.accent);
      root.style.setProperty("--color-border", theme.colors.border);
      root.style.setProperty("--font-english", theme.fonts.english);
      root.style.setProperty("--font-arabic", theme.fonts.arabic);
    }
  }, [router.locale]);

  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
