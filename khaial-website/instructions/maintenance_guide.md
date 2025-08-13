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

    * App Router `not-found.tsx` with your branding and helpful navigation links.
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
* **Boilerplate-friendly** → Creating a new page = create `app/[locale]/yourpage/page.tsx`, compose sections from `/features`.
* **Theming is central** → Tailwind tokens & CSS variables in one place for instant brand changes.

---

Let’s go through the **logic of each folder & file** in that proposed structure,
so you know exactly what each does and how to use it when building or extending your website.

---

## **1. `/instructions`**

* **Purpose**: Your internal documentation for the repo (developer guide, localization guide, content plan).
* **Usage**: Not imported into code. Just reference when onboarding a dev or adding new content.

---

## **2. `/public`**

Holds **static, non-processed assets** that Next.js can serve directly.

* **`/locales`** – Your translation JSON files (already using i18next).
* **`/assets`** – Logos, background images, icons, pre-rendered 3D images/videos.

  * **Rule**: Everything here is public-facing and can be linked via `/assets/...`.
  * **Example**: `<Image src="/assets/logos/logo-dark.svg" alt="Logo" />`.

---

## **3. `/src/components`**

All **reusable UI building blocks** live here, separated into levels:

### `atoms/`

**Smallest elements** — reusable anywhere.

* `Button.tsx` – Standard button styles (primary, secondary, etc.), props for size/variant.
* `Heading.tsx` – Standard `<h1>…<h6>` styles from your typography system.
* `Paragraph.tsx` – Body text styling.
* `Icon.tsx` – A wrapper for inline SVGs so you can size/color them via props.
* `ImageWrapper.tsx` – A standardized `<Image>` with default sizes & responsive behavior.

**When to use**: Whenever you need a consistent, repeatable design element.

---

### `molecules/`

**Combinations of atoms** that form slightly bigger elements.

* `Card.tsx` – Could be a feature card, testimonial card, etc. Accepts props for title, content, icon/image.
* `ContactForm.tsx` – Abstracted contact form UI with props for `onSubmit`.
* `LanguageSwitcher.tsx` – Toggle between Arabic & English.
* `Section.tsx` – **VERY important**: Wraps content with consistent padding, background, and max-width.

**When to use**: Anytime you need a repeated block pattern across multiple pages.

---

### `organisms/`

**Full reusable website sections** made from molecules/atoms.

* `Navbar.tsx` – Top navigation (reads menu items from `/config/links.ts`).
* `Footer.tsx` – Site-wide footer (reads from `/config/links.ts` & social links).
* `Hero.tsx` – Large intro section with headline, subtext, and CTA.
* `Features.tsx` – Features grid section.
* `Testimonials.tsx` – Testimonials section.
* `BookingWidget.tsx` – Embeds Calendly or similar booking tool.

**When to use**: When you have a standard section you’ll reuse across pages.

---

### `layouts/`

* `Layout.tsx` – **Master wrapper for all pages**:

  * Imports Navbar, Footer, Meta tags, and `<main>` area for page content.
  * Wraps content in a consistent page structure so every page looks uniform.

**When to use**: Always — all pages should be wrapped in `Layout`.

---

### `loaders/`

* `ThreeDDisplay.tsx` – Even though your 3D is pre-rendered, having a dedicated loader means you can swap to interactive later without breaking code.

---

## **4. `/src/config`**

Centralized **site configuration**. No hardcoding inside components.

* `site.ts` – Title, description, default meta tags, Open Graph image, favicon.
* `links.ts` – All navigation, footer, and external URLs. Example:

  ```ts
  export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
  ];
  ```
* `theme.ts` – Tailwind/ShadCN theme tokens: brand colors, spacing, border radius.
* `sections.ts` – Content data for reusable sections (titles, texts, images).
* `api.ts` – Client-side API endpoints (e.g., contact form submission URL).

**When to use**:
If you need to change a link, theme color, or headline, you change it **here**, not in the component.

---

## **5. `/src/features`**

Page-specific **composite sections** that aren’t used site-wide.

Example:

* `/home/HeroSection.tsx` – Imports `Hero` from organisms but fills it with homepage-specific content.
* `/contact/ContactIntro.tsx` – A section unique to the contact page.

**When to use**:
If a section is **only** used on one page and isn’t generic enough for `/components/organisms`.

---

## **6. `/src/pages`**

Your **Next.js page entry points**.

* `_app.tsx` – Wraps all pages (ThemeProvider, i18next provider, global state).
* `_document.tsx` – Custom HTML structure (lang dir, meta tags).
* `index.tsx` – Imports `/features/home/*` to build homepage.
* `404.tsx` – Custom not-found page.

**When to use**:
Only to assemble existing sections — never hardcode full designs here.

---

## **7. `/src/styles`**

Global CSS.

* `globals.css` – Tailwind base styles, resets, and utility imports.
* `typography.css` – Optional extra typography styles if Tailwind classes aren’t enough.

---

## **8. `/src/theme`**

Design tokens for Tailwind & ShadCN.

* `typography.ts` – Class presets for text styles, so you can do:

  ```ts
  <h2 className={typography.h2}>Section title</h2>
  ```
* `tailwind-variables.css` – CSS variables for colors, spacing — imported into `globals.css`.

---

## **9. `/src/types`**

TypeScript interfaces/types.

* `global.d.ts` – Ambient types for Next.js, modules.
* `index.ts` – Re-export all commonly used types.

---

## **10. `/src/utils`**

Helper functions.

* `helpers.ts` – Misc utilities (e.g., className merging).
* `seo.ts` – Functions to build dynamic `<Head>` tags.
* `formatters.ts` – Format dates, currencies, etc.

---

If you follow this exactly, your workflow for adding a **new page** will be:

1. Create `/features/newpage` folder.
2. Add sections (built from `/components/organisms` + custom content).
3. Create `/pages/newpage.tsx` importing those sections.
4. Add new link in `/config/links.ts`.
   No layout, styles, or positioning changes needed — it will “just work.”

---
