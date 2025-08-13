import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "@components/Layout";

const PrivacyPolicyPage = () => {
  const router = useRouter();
  const isRTL = router.locale === "ar";

  return (
    <Layout>
      <Head>
        <title>{isRTL ? "سياسة الخصوصية" : "Privacy Policy"} | Khaial AI</title>
      </Head>
      <main className="flex-1 px-6 py-12 max-w-4xl mx-auto prose">
        <h1 className={`${isRTL ? "text-right" : "text-left"}`}>{isRTL ? "سياسة الخصوصية" : "Privacy Policy"}</h1>
        <p className={`${isRTL ? "text-right" : "text-left"}`}>
          {isRTL
            ? "نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. سيتم تحديث هذا المستند لاحقًا."
            : "We respect your privacy and are committed to protecting your personal data. This document will be updated later."}
        </p>
      </main>
    </Layout>
  );
};

export default PrivacyPolicyPage;

export async function getStaticProps({ locale }: { locale: string }) {
  const { serverSideTranslations } = await import("next-i18next/serverSideTranslations");
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}


