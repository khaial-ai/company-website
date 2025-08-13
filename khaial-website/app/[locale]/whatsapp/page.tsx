 'use client';
 
 import Link from "next/link";
 import { useParams } from "next/navigation";
 import { useTranslation } from "react-i18next";
import Layout from "@components/Layout";
 
 export default function WhatsappPage() {
   const params = useParams<{ locale: string }>();
   const { t } = useTranslation("common");
   const isRTL = params?.locale === 'ar';
 
   return (
     <Layout>
       <main className="flex-1 px-6 py-12 max-w-5xl mx-auto">
         <h1 className={`text-3xl md:text-5xl font-bold mb-6 ${isRTL ? "text-right" : "text-left"}`}>{t("whatsapp.title")}</h1>
         <p className={`text-lg text-gray-600 mb-8 ${isRTL ? "text-right" : "text-left"}`}>{t("whatsapp.description")}</p>
         <div className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
           <Link href={`/${params?.locale}/contact`} className="px-6 py-3 rounded-lg bg-black text-white">{t("whatsapp.cta_contact")}</Link>
           <Link href={`/${params?.locale}`} className="px-6 py-3 rounded-lg border border-black">{t("whatsapp.cta_back_home")}</Link>
         </div>
       </main>
     </Layout>
   );
 }

