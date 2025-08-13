import { Html, Head, Main, NextScript } from "next/document";
// Import side-effects to ensure config is bundled; fallback to 'en' if not resolvable at runtime
let defaultLocale = "en";
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const cfg = require("../../next-i18next.config.js");
  defaultLocale = cfg?.i18n?.defaultLocale ?? "en";
} catch (e) {
  defaultLocale = "en";
}

export default function Document() {
  return (
    <Html lang={defaultLocale}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
