"use client";

import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import OptimizedVideo from "@components/molecules/OptimizedVideo";

const WhatsAppIntro = () => {
	const { t } = useTranslation("common");
	const params = useParams<{ locale: string }>();
	const isRTL = params?.locale === "ar";

	return (
		<section className="relative isolate overflow-hidden pt-16 md:pt-24">
			<div className="mx-auto max-w-6xl px-6">
				{/* Tag */}
				<div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-sm text-white/90 backdrop-blur">
					<span className="inline-flex h-6 min-w-10 items-center justify-center rounded-full btn-brand-gradient px-2 text-xs font-semibold">
						{t("whatsappIntro.badge_year")}
					</span>
					<span>{t("whatsappIntro.badge_label")}</span>
				</div>

				{/* Heading */}
				<h1 className={`text-center text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl`}>
					{t("whatsappIntro.title_l1")}<br className="hidden sm:block" />
					{t("whatsappIntro.title_l2")}
				</h1>

				{/* Subheading */}
				<p className="mx-auto mt-6 max-w-2xl text-center text-base text-white/70 md:text-lg">
					{t("whatsappIntro.subtitle")}
				</p>

				{/* Video showcase */}
				<div className="mt-12 md:mt-16">
					<OptimizedVideo ariaLabel={t("whatsappIntro.video_aria")} />
				</div>
			</div>
		</section>
	);
};

export default WhatsAppIntro;

