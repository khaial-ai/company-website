import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { useTranslation } from "next-i18next";

const FAQPage = () => {
  const router = useRouter();
  const isRTL = router.locale === "ar";
  const { t } = useTranslation("common");

  return (
    <Layout>
      <Head>
        <title>{isRTL ? "الأسئلة الشائعة" : "FAQ"} | Khaial AI</title>
      </Head>
      <main className="flex-1 px-6 py-12 max-w-4xl mx-auto">
        <h1 className={`text-3xl md:text-5xl font-bold mb-8 ${isRTL ? "text-right" : "text-left"}`}>
          {isRTL ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
        </h1>
        <div className="space-y-6">
          <div>
            <h2 className="font-semibold text-xl">{isRTL ? "ما هو كُحَيَّل AI؟" : "What is Khaial AI?"}</h2>
            <p className="text-gray-600">
              {isRTL
                ? "منصة لتطبيق وكلاء الذكاء الاصطناعي للمؤسسات عبر واتساب والويب."
                : "A platform implementing enterprise-grade AI agents for WhatsApp and web."}
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-xl">{isRTL ? "كيف يعمل وكيل واتساب؟" : "How do WhatsApp agents work?"}</h2>
            <p className="text-gray-600">
              {isRTL
                ? "يستجيب الوكيل تلقائيًا لرسائل العملاء، يحجز المواعيد، ويؤهل العملاء المحتملين."
                : "Agents auto-respond to customer messages, book meetings, and qualify leads."}
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default FAQPage;

export async function getStaticProps({ locale }: { locale: string }) {
  const { serverSideTranslations } = await import("next-i18next/serverSideTranslations");
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}


