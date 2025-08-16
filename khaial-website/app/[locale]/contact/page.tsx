'use client';

import Layout from "@components/Layout";
import ContactForm from "@components/molecules/ContactForm";
import ContactIntro from "@/features/contact/ContactIntro";
import FAQ from "@components/organisms/FAQ";

export default function ContactPage() {
  return (
    <Layout>
      <ContactIntro />
      <ContactForm id="contact-form" />
      <div id="faq" />
      <FAQ />
    </Layout>
  );
}

