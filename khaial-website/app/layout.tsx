import type { ReactNode } from "react";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17627519855"
        />
        <Script id="google-ads-tracking">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17627519855');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
