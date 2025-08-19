"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const LanguageSwitcher = () => {
  const params = useParams<{ locale: string }>();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const currentLocale = params?.locale ?? "en";

  const handleSwitch = (locale: "en" | "ar") => {
    const parts = pathname?.split("/") ?? [];
    if (parts.length > 1) {
      parts[1] = locale;
    }
    const target = parts.join("/") || "/";
    router.push(target);
    setIsOpen(false);
  };

  const languages = [
    {
      code: "en",
      name: "English",
      nativeName: "English",
    },
    {
      code: "ar", 
      name: "Arabic",
      nativeName: "العربية",
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLocale) ?? languages[0];
  const otherLanguages = languages.filter(lang => lang.code !== currentLocale);

  return (
    <div className="relative">
      {/* Current Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-[var(--k-border)]/60 bg-black/40 text-white/90 hover:text-white hover:bg-black/60 transition-all duration-200 backdrop-blur-sm"
        aria-label={`Current language: ${currentLanguage.name}. Click to change language`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-sm font-medium">{currentLanguage.code.toUpperCase()}</span>
        <svg 
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 z-50 min-w-[120px] bg-black/90 border border-[var(--k-border)]/60 rounded-lg shadow-lg backdrop-blur-sm overflow-hidden">
            {otherLanguages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleSwitch(language.code as "en" | "ar")}
                className="w-full flex flex-col items-start px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-150 text-left"
                aria-label={`Switch to ${language.name}`}
              >
                <span className="text-sm font-medium">{language.name}</span>
                <span className="text-xs text-white/60">{language.nativeName}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;