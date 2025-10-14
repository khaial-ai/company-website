import type { Metadata } from "next";
import enCommon from "@/../public/locales/en/common.json";
import arCommon from "@/../public/locales/ar/common.json";

type ThankYouDict = {
  thankYou?: {
    title?: string;
    heading?: string;
    subtitle?: string;
  };
};

export default function ThankYouRouteLayout({ children }: { children: React.ReactNode }) {
  return children;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  const dict = (isAr ? (arCommon as unknown) : (enCommon as unknown)) as ThankYouDict;
  const title = dict?.thankYou?.title ?? (isAr ? "شكرًا لك" : "Thank You");
  const heading = dict?.thankYou?.heading ?? (isAr ? "تم تأكيد الحجز" : "Booking confirmed");
  const subtitle = dict?.thankYou?.subtitle ?? (isAr ? "تم تحديد موعدك." : "Your meeting is scheduled.");

  const basePath = isAr ? "/ar" : "/en";

  return {
    title,
    description: `${heading} — ${subtitle}`,
    alternates: {
      languages: {
        en: "/en/thank-you",
        ar: "/ar/thank-you",
      },
    },
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title,
      description: `${heading} — ${subtitle}`,
      url: `${basePath}/thank-you`,
    },
  };
}


