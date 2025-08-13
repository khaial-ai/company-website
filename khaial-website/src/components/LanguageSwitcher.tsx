"use client";
import { useParams, usePathname, useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const params = useParams<{ locale: string }>();
  const pathname = usePathname();
  const router = useRouter();
  const isArabic = params?.locale === "ar";

  const handleSwitch = (locale: "en" | "ar") => () => {
    const parts = pathname?.split("/") ?? [];
    if (parts.length > 1) {
      parts[1] = locale;
    }
    const target = parts.join("/") || "/";
    router.push(target);
  };

  return (
    <div className="inline-flex items-center gap-2" role="group" aria-label="Language switcher">
      <button
        onClick={handleSwitch("en")}
        className={`px-3 py-1 rounded border ${isArabic ? "bg-transparent" : "bg-black text-white"}`}
        aria-pressed={!isArabic}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={handleSwitch("ar")}
        className={`px-3 py-1 rounded border ${isArabic ? "bg-black text-white" : "bg-transparent"}`}
        aria-pressed={isArabic}
        aria-label="التبديل إلى العربية"
      >
        ع
      </button>
    </div>
  );
};

export default LanguageSwitcher;


