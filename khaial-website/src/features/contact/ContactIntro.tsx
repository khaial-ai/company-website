"use client";

import { useTranslation } from "react-i18next";

const ContactIntro = () => {
	const { t } = useTranslation("common");

	return (
		<section className="relative isolate overflow-hidden pt-16 md:pt-24">
			<div className="mx-auto max-w-6xl px-6 text-center">
				<div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-sm text-white/90 backdrop-blur">
					<span className="inline-flex h-6 min-w-10 items-center justify-center rounded-full btn-brand-gradient px-2 text-xs font-semibold">24/7</span>
					<span>Collaborate With Us</span>
				</div>

				<h1 className="text-4xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl">
					Have Any Doubts? We
					<br className="hidden sm:block" />
					are Ready to Help.
				</h1>
				<p className="mx-auto mt-6 max-w-2xl text-base text-white/70 md:text-lg">
					Whether you need guidance, support, or a fresh start, our team is ready to assist you.
				</p>
			</div>
		</section>
	);
};

export default ContactIntro;

