import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Layout from "@components/Layout";

const HomePage = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const isRTL = router.locale === "ar";

  return (
    <Layout>
      <Head>
        <title>{t("home.title")} | Khaial AI</title>
        <meta name="description" content={t("home.hero_subtitle")} />
      </Head>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className={`flex flex-col gap-6 ${isRTL ? "text-right" : "text-left"}`}>
          <h1 className="text-4xl md:text-6xl font-bold">{t("home.hero_title")}</h1>
          <p className="text-lg text-gray-600">{t("home.hero_subtitle")}</p>
          <div className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
            <Link href="/contact" className="px-6 py-3 rounded-lg bg-black text-white">
              {t("home.cta_contact")}
            </Link>
            <Link href="/whatsapp" className="px-6 py-3 rounded-lg border border-black">
              {t("home.cta_whatsapp")}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;

export async function getStaticProps({ locale }: { locale: string }) {
  const { serverSideTranslations } = await import("next-i18next/serverSideTranslations");
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}
