# Next.js Arabic/English Localization Guide with Tailwind CSS

## Table of Contents
1. [Setup and Configuration](#setup-and-configuration)
2. [Directory Structure](#directory-structure)
3. [Internationalization Configuration](#internationalization-configuration)
4. [Translation Files](#translation-files)
5. [RTL/LTR Layout Implementation](#rtlltr-layout-implementation)
6. [Typography and Font Handling](#typography-and-font-handling)
7. [Component Examples](#component-examples)
8. [Best Practices](#best-practices)
9. [Common Pitfalls](#common-pitfalls)
10. [Testing](#testing)

## Setup and Configuration

### 1. Install Required Dependencies

```bash
npm install next-i18next react-i18next i18next
npm install @tailwindcss/typography
```

### 2. Update next.config.js

```javascript
/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  i18n,
  // Enable RTL support
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
```

### 3. Create next-i18next.config.js

```javascript
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    localeDetection: false, // Disable automatic locale detection for better control
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
```

## Directory Structure (App Router)

```
project-root/
├── public/
│   └── locales/
│       ├── ar/
│       │   ├── common.json
│       │   ├── homepage.json
│       │   └── navigation.json
│       └── en/
│           ├── common.json
│           ├── homepage.json
│           └── navigation.json
├── app/
│   ├── page.tsx                         # redirects to /en (optional)
│   └── [locale]/
│       ├── layout.tsx                   # sets html lang/dir and wraps providers
│       ├── page.tsx                     # home page
│       ├── contact/
│       │   └── page.tsx
│       ├── whatsapp/
│       │   └── page.tsx
│       ├── privacy-policy/
│       │   └── page.tsx
│       ├── terms/
│       │   └── page.tsx
│       ├── faq/
│       │   └── page.tsx
│       └── not-found.tsx
├── src/
│   ├── styles/
│   │   └── globals.css
│   └── utils/
│       └── seo.ts                       # optional helpers for metadata
├── next-i18next.config.js               # if using next-i18next
└── next.config.ts
```

## Internationalization Configuration

### 1. App Router Layout (replaces _app.js)

```tsx
// app/[locale]/layout.tsx
import "@/styles/globals.css";
import type { ReactNode } from "react";

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body>{children}</body>
    </html>
  );
}
```

### 2. No _document.js in App Router

Use the root or segment `layout.tsx` to set `<html>`, fonts, and providers. Add font links via `<link>` in `layout.tsx` or use `next/font`.

## Translation Files

### English (public/locales/en/common.json)

```json
{
  "navigation": {
    "home": "Home",
    "about": "About",
    "services": "Services",
    "contact": "Contact"
  },
  "buttons": {
    "learn_more": "Learn More",
    "get_started": "Get Started",
    "contact_us": "Contact Us"
  },
  "common": {
    "loading": "Loading...",
    "error": "Something went wrong",
    "success": "Success!"
  }
}
```

### Arabic (public/locales/ar/common.json)

```json
{
  "navigation": {
    "home": "الرئيسية",
    "about": "من نحن",
    "services": "الخدمات",
    "contact": "تواصل معنا"
  },
  "buttons": {
    "learn_more": "اعرف المزيد",
    "get_started": "ابدأ الآن",
    "contact_us": "تواصل معنا"
  },
  "common": {
    "loading": "جاري التحميل...",
    "error": "حدث خطأ ما",
    "success": "تم بنجاح!"
  }
}
```

## RTL/LTR Layout Implementation

### 1. Update tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['Cairo', 'sans-serif'],
        'english': ['Inter', 'sans-serif'],
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // Custom RTL plugin
    function({ addUtilities }) {
      const newUtilities = {
        '.rtl-space-x-reverse > :not([hidden]) ~ :not([hidden])': {
          '--tw-space-x-reverse': '1',
        },
        '.rtl-divide-x-reverse > :not([hidden]) ~ :not([hidden])': {
          '--tw-divide-x-reverse': '1',
        }
      }
      addUtilities(newUtilities)
    }
  ],
}
```

### 2. Update globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html[dir="rtl"] {
    font-family: 'Cairo', sans-serif;
  }
  
  html[dir="ltr"] {
    font-family: 'Inter', sans-serif;
  }

  /* RTL-specific styles */
  [dir="rtl"] .space-x-reverse > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 1;
  }

  [dir="rtl"] .divide-x-reverse > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-x-reverse: 1;
  }
}

@layer components {
  /* Directional margin/padding utilities */
  .ms-auto {
    margin-inline-start: auto;
  }
  
  .me-auto {
    margin-inline-end: auto;
  }
  
  .ps-4 {
    padding-inline-start: 1rem;
  }
  
  .pe-4 {
    padding-inline-end: 1rem;
  }
  
  .border-s {
    border-inline-start-width: 1px;
  }
  
  .border-e {
    border-inline-end-width: 1px;
  }

  /* Arabic text improvements */
  .arabic-text {
    line-height: 1.8;
    letter-spacing: 0.025em;
  }
  
  /* English text improvements */
  .english-text {
    line-height: 1.6;
    letter-spacing: 0;
  }
}
```

## Typography and Font Handling

### Font Component

```tsx
// components/LocalizedText.tsx
"use client";
import { useParams } from "next/navigation";

export default function LocalizedText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const params = useParams<{ locale: string }>();
  const isArabic = params?.locale === "ar";
  const fontClass = isArabic ? "font-arabic arabic-text" : "font-english english-text";
  return <span className={`${fontClass} ${className}`}>{children}</span>;
}
```

## Component Examples

### 1. Language Toggle Component

```tsx
// components/LanguageToggle.tsx
"use client";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (locale: "en" | "ar") => {
    const parts = (pathname ?? "/").split("/");
    if (parts.length > 1) parts[1] = locale;
    router.push(parts.join("/") || "/");
  };

  const isArabic = pathname?.split("/")[1] === "ar";

  return (
    <div className="flex items-center gap-2 rtl:gap-2">
      <button onClick={() => switchLanguage("en")} className={`px-3 py-1 rounded ${!isArabic ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}>EN</button>
      <button onClick={() => switchLanguage("ar")} className={`px-3 py-1 rounded ${isArabic ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}>ع</button>
    </div>
  );
}
```

### 2. Responsive Navigation

```tsx
// components/Navigation.tsx
"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import LanguageToggle from "./LanguageToggle";

export default function Navigation() {
  const params = useParams<{ locale: string }>();
  const locale = params?.locale ?? "en";
  const isRTL = locale === "ar";

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className={`flex items-center ${isRTL ? "flex-row-reverse" : ""}`}>
            <img src="/logo.svg" alt="Khaial AI" className="h-8 w-auto" />
          </div>
          <div className={`hidden md:flex items-center gap-8 ${isRTL ? "flex-row-reverse" : ""}`}>
            <Link href={`/${locale}`}>Home</Link>
            <Link href={`/${locale}/contact`}>Contact</Link>
            <Link href={`/${locale}/whatsapp`}>WhatsApp</Link>
          </div>
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}
```

### 3. Hero Section with RTL Support

```tsx
// components/HeroSection.tsx
"use client";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import LocalizedText from "./LocalizedText";

export default function HeroSection() {
  const { t } = useTranslation("homepage");
  const params = useParams<{ locale: string }>();
  const isRTL = params?.locale === "ar";

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center ${isRTL ? "rtl" : "ltr"}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <LocalizedText>{t("hero.title")}</LocalizedText>
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            <LocalizedText>{t("hero.subtitle")}</LocalizedText>
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isRTL ? "sm:flex-row-reverse" : ""}`}>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              <LocalizedText>{t("buttons.get_started")}</LocalizedText>
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              <LocalizedText>{t("buttons.learn_more")}</LocalizedText>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## Best Practices

### 1. Page-Level Implementation

```tsx
// app/[locale]/page.tsx
"use client";
import Layout from "@/src/components/Layout";

export default function HomePage() {
  return (
    <Layout>
      {/* Your sections here */}
    </Layout>
  );
}
```

### 2. SEO Considerations (Metadata API)

```ts
// app/[locale]/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khaial AI",
  description: "...",
};

// Or for dynamic values
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Khaial AI",
    alternates: {
      languages: {
        en: "https://khaial.ai/en",
        ar: "https://khaial.ai/ar",
        "x-default": "https://khaial.ai",
      },
    },
  };
}
```

### 3. Form Handling with RTL

```javascript
// components/ContactForm.js
export default function ContactForm() {
  const { t } = useTranslation('contact')
  const router = useRouter()
  const isRTL = router.locale === 'ar'

  return (
    <form className="space-y-6">
      <div>
        <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
          <LocalizedText>{t('form.name')}</LocalizedText>
        </label>
        <input
          type="text"
          className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isRTL ? 'text-right' : 'text-left'}`}
          placeholder={t('form.name_placeholder')}
          dir={isRTL ? 'rtl' : 'ltr'}
        />
      </div>
      
      <div>
        <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
          <LocalizedText>{t('form.message')}</LocalizedText>
        </label>
        <textarea
          rows={5}
          className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${isRTL ? 'text-right' : 'text-left'}`}
          placeholder={t('form.message_placeholder')}
          dir={isRTL ? 'rtl' : 'ltr'}
        />
      </div>
      
      <button
        type="submit"
        className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors ${isRTL ? 'font-arabic' : 'font-english'}`}
      >
        <LocalizedText>{t('form.submit')}</LocalizedText>
      </button>
    </form>
  )
}
```

## Common Pitfalls

### 1. Text Alignment Issues
```css
/* ❌ Wrong - Fixed alignment */
.text-left

/* ✅ Correct - Logical alignment */
.text-start

/* ❌ Wrong - Fixed margin */
.ml-4

/* ✅ Correct - Logical margin */
.ms-4 /* margin-inline-start */
```

### 2. Flexbox Direction Issues
```javascript
// ❌ Wrong - Fixed direction
<div className="flex space-x-4">

// ✅ Correct - RTL-aware direction
<div className={`flex space-x-4 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
```

### 3. Icon Positioning
```javascript
// ❌ Wrong - Fixed positioning
<ChevronRightIcon className="ml-2" />

// ✅ Correct - Conditional positioning
<ChevronRightIcon className={isRTL ? 'me-2 rotate-180' : 'ms-2'} />
```

## Testing

### 1. Manual Testing Checklist
- [ ] Text renders correctly in both languages
- [ ] Layout flows properly (LTR/RTL)
- [ ] Forms work with Arabic input
- [ ] Navigation is intuitive in both directions
- [ ] Images and icons are properly positioned
- [ ] Responsive design works in both languages

### 2. Automated Testing Example
```javascript
// __tests__/localization.test.js
import { render, screen } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n/test-config'

describe('Localization', () => {
  test('renders Arabic text correctly', async () => {
    await i18n.changeLanguage('ar')
    
    render(
      <I18nextProvider i18n={i18n}>
        <Navigation />
      </I18nextProvider>
    )
    
    expect(screen.getByText('الرئيسية')).toBeInTheDocument()
  })
})
```

### 3. Performance Considerations
- Use ISR via `export const revalidate = <seconds>` or `fetch(..., { next: { revalidate: <seconds> } })`
- Implement lazy loading for translation namespaces
- Optimize font loading with `font-display: swap`
- Consider splitting translations by page/component

## Deployment Notes

### 1. Environment Variables
```env
# .env.local
NEXT_PUBLIC_DEFAULT_LOCALE=en
NEXT_PUBLIC_SUPPORTED_LOCALES=en,ar
```

### 2. Build Optimization
```javascript
// next.config.js - Production optimizations
module.exports = {
  // ... other config
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Language',
            value: 'en, ar',
          },
        ],
      },
    ]
  },
}
```

This guide provides a comprehensive foundation for implementing Arabic/English localization in your Next.js application while maintaining performance and user experience best practices.