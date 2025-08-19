'use client';

import Layout from "@components/Layout";
import { WhatsAppIntro, WhatsAppRevenueSection, WhatsAppFAQSection, WhatsAppCTASection } from "@/features/whatsapp";

export default function WhatsappPage() {
  return (
    <Layout>
      <WhatsAppIntro />
      <WhatsAppRevenueSection />
      <WhatsAppFAQSection />
    </Layout>
  );
}

