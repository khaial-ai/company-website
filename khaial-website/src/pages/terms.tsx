import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const TermsPage = () => {
  const router = useRouter();
  const isRTL = router.locale === "ar";

  return (
    <Layout>
      <Head>
        <title>{isRTL ? "الشروط والأحكام" : "Terms and Conditions"} | Khaial AI</title>
      </Head>
      <main className="flex-1 px-6 py-12 max-w-4xl mx-auto prose">
        <h1 className={`${isRTL ? "text-right" : "text-left"}`}>{isRTL ? "الشروط والأحكام" : "Terms and Conditions"}</h1>
        <p className={`${isRTL ? "text-right" : "text-left"}`}>
          {isRTL
            ? "سيتم توفير الشروط والأحكام التفصيلية لاحقًا."
            : "Detailed terms and conditions will be provided later."}
        </p>
      </main>
    </Layout>
  );
};

export default TermsPage;

export async function getStaticProps({ locale }: { locale: string }) {
  const { serverSideTranslations } = await import("next-i18next/serverSideTranslations");
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}


