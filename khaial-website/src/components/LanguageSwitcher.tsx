import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const router = useRouter();
  const isArabic = router.locale === "ar";

  const handleSwitch = (locale: "en" | "ar") => () => {
    router.push(router.asPath, router.asPath, { locale, scroll: false });
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


