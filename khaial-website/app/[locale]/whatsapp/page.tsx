'use client';

import Layout from "@components/Layout";
import { WhatsAppIntro, WhatsAppBenefitsSection, WhatsAppServicesSection, WhatsAppFAQSection } from "@/features/whatsapp";

export default function WhatsappPage() {
  return (
    <Layout>
      <WhatsAppIntro />
      <WhatsAppBenefitsSection />
      <WhatsAppServicesSection />
      <WhatsAppFAQSection />
    </Layout>
  );
}

