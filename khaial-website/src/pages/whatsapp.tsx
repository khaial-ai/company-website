import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "@components/Layout";
import { useTranslation } from "next-i18next";

const WhatsappPage = () => {
  const router = useRouter();
  const isRTL = router.locale === "ar";
  const { t } = useTranslation("common");

  return (
    <Layout>
      <Head>
        <title>{t("whatsapp.title")} | Khaial AI</title>
        <meta name="description" content={t("whatsapp.description")} />
      </Head>
      <main className="flex-1 px-6 py-12 max-w-5xl mx-auto">
        <h1 className={`text-3xl md:text-5xl font-bold mb-6 ${isRTL ? "text-right" : "text-left"}`}>{t("whatsapp.title")}</h1>
        <p className={`text-lg text-gray-600 mb-8 ${isRTL ? "text-right" : "text-left"}`}>{t("whatsapp.description")}</p>
        <div className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
          <Link href="/contact" className="px-6 py-3 rounded-lg bg-black text-white">{t("whatsapp.cta_contact")}</Link>
          <Link href="/" className="px-6 py-3 rounded-lg border border-black">{t("whatsapp.cta_back_home")}</Link>
        </div>
      </main>
    </Layout>
  );
};

export default WhatsappPage;

export async function getStaticProps({ locale }: { locale: string }) {
  const { serverSideTranslations } = await import("next-i18next/serverSideTranslations");
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}


