 'use client';
 
 import { PropsWithChildren, useMemo, useEffect } from "react";
 import i18next, { i18n as I18nInstance } from "i18next";
 import { initReactI18next, I18nextProvider } from "react-i18next";
 import enCommon from "@/../public/locales/en/common.json";
 import arCommon from "@/../public/locales/ar/common.json";
 
 type ProvidersProps = PropsWithChildren<{ locale: string }>;
 
 export default function Providers({ children, locale }: ProvidersProps) {
   const i18n = useMemo<I18nInstance>(() => {
     const instance = i18next.createInstance();
     instance.use(initReactI18next).init({
       resources: {
         en: { common: enCommon as unknown as Record<string, unknown> },
         ar: { common: arCommon as unknown as Record<string, unknown> },
       },
       lng: locale === 'ar' ? 'ar' : 'en',
       fallbackLng: 'en',
       interpolation: { escapeValue: false },
     });
     return instance;
   }, [locale]);
 
   useEffect(() => {
     const html = document.documentElement;
     html.lang = locale === 'ar' ? 'ar' : 'en';
     html.dir = locale === 'ar' ? 'rtl' : 'ltr';
   }, [locale]);
 
   return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
 }
 
