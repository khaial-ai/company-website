import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "@components/Layout";

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  whatsapp: string;
  message: string;
};

const ContactPage = () => {
  const router = useRouter();
  const isRTL = router.locale === "ar";
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    whatsapp: "",
    message: "",
  });

  const handleChange = (field: keyof ContactFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submit; will wire to Sheet/Forms later per PRD
    alert((router.locale === "ar" ? "تم الإرسال" : "Submitted") + ": " + JSON.stringify(formData));
  };

  return (
    <Layout>
      <Head>
        <title>{isRTL ? "تواصل معنا" : "Contact Us"} | Khaial AI</title>
      </Head>
      <main className="flex-1 px-6 py-12 max-w-3xl mx-auto">
        <h1 className={`text-3xl md:text-5xl font-bold mb-8 ${isRTL ? "text-right" : "text-left"}`}>
          {isRTL ? "تواصل معنا" : "Contact Us"}
        </h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div>
            <label className={`block text-sm mb-2 ${isRTL ? "text-right" : "text-left"}`}>{isRTL ? "الاسم" : "Name"}</label>
            <input
              type="text"
              value={formData.name}
              onChange={handleChange("name")}
              dir={isRTL ? "rtl" : "ltr"}
              className="w-full border rounded-lg px-4 py-3"
              aria-label={isRTL ? "الاسم" : "Name"}
              required
            />
          </div>
          <div>
            <label className={`block text-sm mb-2 ${isRTL ? "text-right" : "text-left"}`}>{isRTL ? "البريد الإلكتروني" : "Email"}</label>
            <input
              type="email"
              value={formData.email}
              onChange={handleChange("email")}
              dir={isRTL ? "rtl" : "ltr"}
              className="w-full border rounded-lg px-4 py-3"
              aria-label={isRTL ? "البريد الإلكتروني" : "Email"}
              required
            />
          </div>
          <div>
            <label className={`block text-sm mb-2 ${isRTL ? "text-right" : "text-left"}`}>{isRTL ? "الشركة" : "Company"}</label>
            <input
              type="text"
              value={formData.company}
              onChange={handleChange("company")}
              dir={isRTL ? "rtl" : "ltr"}
              className="w-full border rounded-lg px-4 py-3"
              aria-label={isRTL ? "الشركة" : "Company"}
            />
          </div>
          <div>
            <label className={`block text-sm mb-2 ${isRTL ? "text-right" : "text-left"}`}>{isRTL ? "رقم واتساب" : "WhatsApp Number"}</label>
            <input
              type="tel"
              value={formData.whatsapp}
              onChange={handleChange("whatsapp")}
              dir={isRTL ? "rtl" : "ltr"}
              className="w-full border rounded-lg px-4 py-3"
              aria-label={isRTL ? "رقم واتساب" : "WhatsApp Number"}
            />
          </div>
          <div>
            <label className={`block text-sm mb-2 ${isRTL ? "text-right" : "text-left"}`}>{isRTL ? "الرسالة" : "Message"}</label>
            <textarea
              rows={5}
              value={formData.message}
              onChange={handleChange("message")}
              dir={isRTL ? "rtl" : "ltr"}
              className="w-full border rounded-lg px-4 py-3"
              aria-label={isRTL ? "الرسالة" : "Message"}
            />
          </div>
          <button type="submit" className="px-6 py-3 rounded-lg bg-black text-white">
            {isRTL ? "إرسال" : "Submit"}
          </button>
        </form>
      </main>
    </Layout>
  );
};

export default ContactPage;

export async function getStaticProps({ locale }: { locale: string }) {
  const { serverSideTranslations } = await import("next-i18next/serverSideTranslations");
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}


