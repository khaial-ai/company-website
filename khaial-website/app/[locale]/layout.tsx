 import "@/styles/globals.css";
 import Providers from "./providers";
 import type { ReactNode } from "react";
 
 export default function LocaleLayout({
   children,
   params,
 }: {
   children: ReactNode;
   params: { locale: string };
 }) {
   const { locale } = params;
   const dir = locale === "ar" ? "rtl" : "ltr";
 
   return (
     <html lang={locale} dir={dir}>
       <body>
         <Providers locale={locale}>{children}</Providers>
       </body>
     </html>
   );
 }

