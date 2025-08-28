"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import OptimizedVideo from "@components/molecules/OptimizedVideo";
// Route CTA to footer booking anchor

const LogoMarquee = ({ isRTL }: { isRTL: boolean }) => {
	const innerRef = useRef<HTMLDivElement | null>(null);
	const frameRef = useRef<number | null>(null);
	const positionRef = useRef<number>(0);

	useEffect(() => {
		const speedPxPerSec = 40;
		let lastTs = 0;
		const step = (ts: number) => {
			if (!innerRef.current) {
				frameRef.current = requestAnimationFrame(step);
				return;
			}
			if (!lastTs) lastTs = ts;
			const delta = (ts - lastTs) / 1000;
			lastTs = ts;
			const dir = isRTL ? 1 : -1;
			positionRef.current += dir * speedPxPerSec * delta;
			const innerWidth = innerRef.current.scrollWidth / 2;
			if (Math.abs(positionRef.current) >= innerWidth) {
				positionRef.current = 0;
			}
			innerRef.current.style.transform = `translateX(${positionRef.current}px)`;
			frameRef.current = requestAnimationFrame(step);
		};
		frameRef.current = requestAnimationFrame(step);
		return () => {
			if (frameRef.current) cancelAnimationFrame(frameRef.current);
		};
	}, [isRTL]);

	const logos = [
		"/assets/logos/logo.png",
		"/assets/logos/logo.png",
		"/assets/logos/logo.png",
		"/assets/logos/logo.png",
		"/assets/logos/logo.png",
		"/assets/logos/logo.png",
	];

	return (
		<div className="relative mx-auto mt-10 w-full max-w-5xl overflow-hidden">
			<div ref={innerRef} className="flex items-center gap-8 px-6 py-4 will-change-transform" aria-hidden>
				{[...logos, ...logos].map((src, idx) => (
					<div key={idx} className="shrink-0 opacity-70 transition-opacity hover:opacity-100">
						<Image src={src} alt="Logo" width={96} height={28} className="h-6 w-24 object-contain" />
					</div>
				))}
			</div>
		</div>
	);
};

const WhatsAppIntro = () => {
	const { t } = useTranslation("common");
	const params = useParams<{ locale: string }>();
	const isRTL = params?.locale === "ar";

	const handleBook = () => {
		const el = document.getElementById("book-a-call");
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<section className="relative isolate overflow-hidden pt-24 md:pt-32">
			<div className="mx-auto max-w-6xl px-6">

				{/* Heading */}
				<h1 className={`mx-auto max-w-5xl text-balance text-center text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl`}>
					{t("whatsappIntro.title_l1")}<br className="hidden sm:block" />
					{t("whatsappIntro.title_l2")}
				</h1>

				{/* Subheading */}
				<p className="mx-auto mt-7 md:mt-8 max-w-3xl text-center text-base text-white/75 md:text-lg">
					{t("whatsappIntro.subtitle")}
				</p>

				{/* Primary CTA */}
				<div className={`mx-auto mt-8 md:mt-10 flex w-fit ${isRTL ? "flex-row-reverse" : ""}`}>
					<button
						type="button"
						onClick={handleBook}
						className="rounded-2xl bg-white px-6 py-3 text-base font-semibold text-black shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:bg-white/90 focus:outline-none focus:ring-2 ring-brand"
						aria-label={t("whatsappIntro.cta_label")}
					>
						{t("whatsappIntro.cta_label")}
					</button>
				</div>

				{/* Trust badges */}
				<ul className={`mx-auto mt-6 md:mt-8 flex w-full max-w-4xl flex-wrap items-center justify-center gap-x-4 gap-y-2 ${isRTL ? "[direction:rtl]" : ""}`} aria-label={t("whatsappIntro.trust_aria")}>
						<li className="inline-flex items-center gap-2 text-xs text-white/75">
							<span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15" aria-hidden>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
									<path d="M3 7a2 2 0 012-2h14a2 2 0 012 2H3zm18 2H3v8a2 2 0 002 2h14a2 2 0 002-2V9zm-4 4h2v2h-2v-2z" />
								</svg>
							</span>
							<span>{t("whatsappIntro.trust_no_cc")}</span>
						</li>
						<li className="inline-flex items-center gap-2 text-xs text-white/75">
							<span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15" aria-hidden>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
									<path d="M12 10.586l4.95-4.95 1.414 1.414L13.414 12l4.95 4.95-1.414 1.414L12 13.414l-4.95 4.95-1.414-1.414L10.586 12 5.636 7.05l1.414-1.414L12 10.586z" />
								</svg>
							</span>
							<span>{t("whatsappIntro.trust_cancel_anytime")}</span>
						</li>
						<li className="inline-flex items-center gap-2 text-xs text-white/75">
							<span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15" aria-hidden>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
									<path d="M12 2l2.5 5L20 8l-4 3 .9 5L12 14l-4.9 2L8 11 4 8l5.5-1L12 2z" />
								</svg>
							</span>
							<span>{t("whatsappIntro.trust_free_trial")}</span>
						</li>
				</ul>

				{/* Video showcase */}
				<div id="demo" className="mt-16 md:mt-20 scroll-mt-24">
					<OptimizedVideo src="/assets/misc/VSL.mp4" ariaLabel={t("whatsappIntro.video_aria")} poster="/assets/bg/hero-bg.png" />
				</div>

				{/* Social proof marquee */}
				<h2 className="sr-only">{t("whatsappIntro.social_proof_aria")}</h2>
				<LogoMarquee isRTL={isRTL} />

				{/* Testimonial snippet */}
				<blockquote className="mx-auto mt-8 max-w-3xl text-center text-white/90 text-lg md:text-xl font-semibold leading-relaxed">
					“{t("whatsappIntro.testimonial_quote")}”
				</blockquote>
			</div>
		</section>
	);
};

export default WhatsAppIntro;

