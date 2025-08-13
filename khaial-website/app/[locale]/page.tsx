 'use client';
 
 import Link from "next/link";
 import { useParams } from "next/navigation";
 import { useTranslation } from "react-i18next";
import Layout from "@components/Layout";
 
 export default function HomePage() {
   const params = useParams<{ locale: string }>();
   const { t } = useTranslation("common");
   const isRTL = params?.locale === 'ar';
 
   return (
     <Layout>
       <section className="max-w-6xl mx-auto px-6 py-16">
         <div className={`flex flex-col gap-6 ${isRTL ? "text-right" : "text-left"}`}>
           <h1 className="text-4xl md:text-6xl font-bold">{t("home.hero_title")}</h1>
           <p className="text-lg text-gray-600">{t("home.hero_subtitle")}</p>
           <div className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
             <Link href={`/${params?.locale}/contact`} className="px-6 py-3 rounded-lg bg-black text-white">
               {t("home.cta_contact")}
             </Link>
             <Link href={`/${params?.locale}/whatsapp`} className="px-6 py-3 rounded-lg border border-black">
               {t("home.cta_whatsapp")}
             </Link>
           </div>
         </div>
       </section>
     </Layout>
   );
 }

