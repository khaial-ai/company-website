"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export type ContactFormData = {
	firstName: string;
	lastName: string;
	email: string;
	country: string;
	companyType: string;
	message: string;
};

type ContactFormProps = {
	id?: string;
};

const COUNTRIES = [
	"United Arab Emirates",
	"Saudi Arabia",
	"Egypt",
	"Jordan",
	"Kuwait",
	"Qatar",
	"Bahrain",
	"Oman",
	"Lebanon",
	"Other",
];

const COMPANY_TYPES = [
	"Agency",
	"E‑commerce",
	"SaaS",
	"Education",
	"Healthcare",
	"SMB",
	"Enterprise",
	"Other",
];

const ContactForm = ({ id }: ContactFormProps) => {
	const { t } = useTranslation("common");
	const params = useParams<{ locale: string }>();
	const isRTL = params?.locale === "ar";

	const [formData, setFormData] = useState<ContactFormData>({
		firstName: "",
		lastName: "",
		email: "",
		country: "",
		companyType: "",
		message: "",
	});

	const handleChange = (
		field: keyof ContactFormData,
	) => (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
	) => {
		setFormData((prev) => ({ ...prev, [field]: e.target.value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert(t("contact.submitted"));
	};

	return (
		<section id={id} className="relative isolate px-6 pb-16">
			<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_200px_at_50%_-50px,rgba(124,58,237,0.35),transparent_60%)]" />

			<div className="mx-auto max-w-6xl">
				<div className="overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-4 shadow-[0_40px_120px_-20px_rgba(124,58,237,0.35)] md:p-8">
					<form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6" aria-label={t("contact.title")}>
						<div className="grid gap-6 md:grid-cols-2">
							<div>
								<label className="mb-2 block text-sm text-white/80">{t("contact.fields.firstName")}</label>
								<input
									type="text"
									required
									value={formData.firstName}
									onChange={handleChange("firstName")}
									dir={isRTL ? "rtl" : "ltr"}
									className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 ring-brand"
									placeholder={t("contact.placeholders.firstName")}
									aria-label={t("contact.fields.firstName")}
								/>
							</div>
							<div>
								<label className="mb-2 block text-sm text-white/80">{t("contact.fields.lastName")}</label>
								<input
									type="text"
									required
									value={formData.lastName}
									onChange={handleChange("lastName")}
									dir={isRTL ? "rtl" : "ltr"}
									className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 ring-brand"
									placeholder={t("contact.placeholders.lastName")}
									aria-label={t("contact.fields.lastName")}
								/>
							</div>
						</div>

						<div>
							<label className="mb-2 block text-sm text-white/80">{t("contact.fields.email")}</label>
							<input
								type="email"
								required
								value={formData.email}
								onChange={handleChange("email")}
								dir={isRTL ? "rtl" : "ltr"}
								className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 ring-brand"
								placeholder={t("contact.placeholders.email")}
								aria-label={t("contact.fields.email")}
							/>
						</div>

						<div className="grid gap-6 md:grid-cols-2">
							<div>
								<label className="mb-2 block text-sm text-white/80">{t("contact.fields.country")}</label>
								<select
									value={formData.country}
									onChange={handleChange("country")}
									className="w-full appearance-none rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:ring-2 ring-brand"
									aria-label={t("contact.fields.country")}
								>
									<option value="" className="text-black">{t("contact.placeholders.country")}</option>
									{COUNTRIES.map((c) => (
										<option key={c} value={c} className="text-black">
											{c}
										</option>
									))}
								</select>
							</div>
							<div>
								<label className="mb-2 block text-sm text-white/80">{t("contact.fields.companyType")}</label>
								<select
									value={formData.companyType}
									onChange={handleChange("companyType")}
									className="w-full appearance-none rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none focus:ring-2 ring-brand"
									aria-label={t("contact.fields.companyType")}
								>
									<option value="" className="text-black">{t("contact.placeholders.companyType")}</option>
									{COMPANY_TYPES.map((c) => (
										<option key={c} value={c} className="text-black">
											{c}
										</option>
									))}
								</select>
							</div>
						</div>

						<div>
							<label className="mb-2 block text-sm text-white/80">{t("contact.fields.message")}</label>
							<textarea
								rows={5}
								value={formData.message}
								onChange={handleChange("message")}
								dir={isRTL ? "rtl" : "ltr"}
								className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 ring-brand"
								placeholder={t("contact.placeholders.message")}
								aria-label={t("contact.fields.message")}
							/>
						</div>

						<div>
							<button
								type="submit"
								className="w-full rounded-xl bg-white px-6 py-3 text-base font-semibold text-black shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:bg-white/90 focus:outline-none focus:ring-2 ring-brand"
								aria-label={t("contact.submit")}
							>
								{t("contact.submit")}
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;

