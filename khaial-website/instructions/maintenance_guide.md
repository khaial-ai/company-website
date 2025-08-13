## **Senior Dev Modular Website Checklist**

*(Optimized for MNC-level maintainability & future scalability)*

### **1. Project Structure & Config**

1. **Feature-based folder structure**

   * Group related components, assets, styles, and tests by feature/page (e.g., `/src/features/home`, `/src/features/contact`) rather than type-only grouping.
2. **`src/config` for all constants**

   * Centralize links, routes, API endpoints, site metadata, SEO defaults, brand colors, and reusable text snippets.
3. **Dedicated `/src/assets` folder**

   * Store all images, logos, icons, and pre-rendered 3D objects in organized subfolders (`/logos`, `/bg`, `/3d`, `/icons`).
4. **Alias imports** via `tsconfig.json`

   * Example: `@components/*`, `@assets/*`, `@config/*` for cleaner imports.

---

### **2. Component Architecture**

5. **Global Layout Component**

   * Single `Layout.tsx` that wraps all pages with Navbar, Footer, MetaTags, and LanguageSwitcher.
6. **Atomic Design + ShadCN**

   * Build reusable `atoms` (buttons, inputs), `molecules` (cards, feature sections), `organisms` (hero section, testimonials).
7. **Props-driven styling**

   * No hardcoded content inside components; pass text, links, and assets via props or config files.
8. **Generic section wrappers**

   * Create a `<Section>` component with consistent padding, max-width, and responsive spacing so every section looks uniform without extra CSS.

---

### **3. Theming & Styles**

9. **Dark theme-first Tailwind config**

   * Define all brand colors in `tailwind.config.js` with `--variables` for consistency.
10. **Central typography scale**

    * Create a `theme/typography.ts` with reusable Tailwind class sets for headings, paragraphs, and captions.
11. **RTL/LTR automatic handling**

    * Use `dir` attribute at `<html>` level and Tailwind's `rtl:` variants for spacing/margins automatically.

---

### **4. Routing & Pages**

12. **Dynamic route generation**

    * Use a single page template + MD/JSON content for static pages like privacy-policy, terms, FAQs to avoid duplicate code.
13. **404 & fallback pages**

    * Custom `404.tsx` with your branding and helpful navigation links.
14. **Centralized link constants**

    * Never hardcode URLs in components; store them in `/src/config/links.ts`.

---

### **5. Assets & Media**

15. **Pre-optimized assets**

    * All images in WebP/AVIF format, with Next.js `<Image>` for responsive sizes.
16. **SVG as React components**

    * Store logos/icons as `.tsx` for inline coloring, scaling, and theming.
17. **3D objects in a dedicated loader**

    * Even for pre-rendered images/videos, have a `<ThreeDDisplay>` component that handles them for consistency.

---

### **6. Forms & Integrations**

18. **Form abstraction**

    * Build a `<ContactForm>` component that takes `onSubmit` as a prop so it can be reused with different APIs later.
19. **Calendly/Booking embed wrapper**

    * Create a `<BookingWidget>` component to avoid embedding scripts directly in pages.

---

### **7. Dev Experience & Maintenance**

20. **Boilerplate “new page” template**

    * A ready-to-use TSX file with `Layout`, SEO tags, and `Section` imports so creating a new page is just filling in content.

---


## **Proposed Directory Structure**

```
khaial-website
├── README.md
├── eslint.config.mjs
├── next-env.d.ts
├── next-i18next.config.js
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── instructions/                     # Your existing docs & guides
│   ├── dev_guide.md
│   ├── instructions.md
│   ├── localisation.md
│   └── website_content.md
├── public/
│   ├── locales/                       # i18n translations
│   │   ├── ar
│   │   │   └── common.json
│   │   └── en
│   │       └── common.json
│   ├── assets/                        # Public assets (fallbacks)
│   │   ├── logos/
│   │   ├── bg/
│   │   ├── icons/
│   │   ├── 3d/
│   │   └── misc/
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── components/                    # Reusable UI components
    │   ├── atoms/                      # Smallest building blocks
    │   │   ├── Button.tsx
    │   │   ├── Heading.tsx
    │   │   ├── Paragraph.tsx
    │   │   ├── Icon.tsx
    │   │   └── ImageWrapper.tsx
    │   ├── molecules/                  # Combinations of atoms
    │   │   ├── Card.tsx
    │   │   ├── ContactForm.tsx
    │   │   ├── LanguageSwitcher.tsx
    │   │   └── Section.tsx
    │   ├── organisms/                  # Complex reusable sections
    │   │   ├── Navbar.tsx
    │   │   ├── Footer.tsx
    │   │   ├── Hero.tsx
    │   │   ├── Features.tsx
    │   │   ├── Testimonials.tsx
    │   │   └── BookingWidget.tsx
    │   ├── layouts/
    │   │   └── Layout.tsx
    │   └── loaders/                    # Reusable loaders or media displays
    │       └── ThreeDDisplay.tsx
    │
    ├── config/                         # Centralized configs
    │   ├── site.ts                      # SEO defaults, site name, meta
    │   ├── links.ts                     # All navigation & external URLs
    │   ├── theme.ts                     # Tailwind & ShadCN theme tokens
    │   ├── sections.ts                  # Predefined homepage/feature section data
    │   └── api.ts                       # API endpoints & keys (env-driven)
    │
    ├── features/                        # Page-specific sections
    │   ├── home/
    │   │   ├── HeroSection.tsx
    │   │   ├── FeaturesSection.tsx
    │   │   ├── TestimonialsSection.tsx
    │   │   └── index.ts
    │   ├── contact/
    │   │   ├── ContactIntro.tsx
    │   │   └── index.ts
    │   └── whatsapp/
    │       ├── WhatsAppIntro.tsx
    │       └── index.ts
    │
    ├── pages/
    │   ├── _app.tsx
    │   ├── _document.tsx
    │   ├── index.tsx                    # Imports sections from /features/home
    │   ├── contact.tsx
    │   ├── faq.tsx
    │   ├── privacy-policy.tsx
    │   ├── terms.tsx
    │   ├── whatsapp.tsx
    │   └── 404.tsx
    │
    ├── styles/
    │   ├── globals.css
    │   └── typography.css               # Optional extra typography styling
    │
    ├── theme/
    │   ├── typography.ts                # Tailwind text class presets
    │   └── tailwind-variables.css       # CSS variables for theme colors
    │
    ├── types/
    │   ├── global.d.ts
    │   └── index.ts
    │
    └── utils/
        ├── helpers.ts                    # Small reusable functions
        ├── seo.ts                        # Functions to build dynamic meta tags
        └── formatters.ts                 # Format dates, currency, etc.
```

---

## **Key Features of This Structure**

* **Components are atomic** → Navbar, Footer, Sections are plug-and-play.
* **Config-driven site** → All routes, links, and brand data in `/src/config`. No hunting through code to update.
* **Features folder for sections** → Each page’s unique sections are grouped, making it easy to reuse or rearrange.
* **Layouts folder** → `Layout.tsx` ensures every page automatically has Navbar, Footer, Language Switcher, SEO, etc.
* **Boilerplate-friendly** → Creating a new page = copy `pages/_template.tsx`, drop in section imports from `/features`.
* **Theming is central** → Tailwind tokens & CSS variables in one place for instant brand changes.

---
