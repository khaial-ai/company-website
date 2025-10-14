 
 
 import Layout from "@components/Layout";
 import Hero from "@components/organisms/Hero";
 import { TestimonialsSection } from "@/features/home";
 import { ComparisonSection } from "@/features/home";
 import { ServicesSection } from "@/features/home";
 import { AboutSection } from "@/features/home";
 import { FAQSection } from "@/features/home";
// Footer CTA now embedded inside Footer; removed HomeCTASection import
 
 export default function HomePage() {
   return (
     <Layout>
       <Hero />
       <TestimonialsSection />
       <ComparisonSection />
       <ServicesSection />
       <AboutSection />
       <FAQSection />
     </Layout>
   );
 }

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

 