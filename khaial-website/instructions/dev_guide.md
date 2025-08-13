# 🧑‍💻 Khaial AI Website — Developer Guide

This document provides clear guidelines for building and maintaining the Khaial AI website. Follow these principles to ensure a clean, modular, and scalable codebase.

---

## 📦 1. Project Setup

### Requirements
- Node.js >= 18
- Yarn or npm
- Git

### Getting Started

```bash
git clone https://github.com/khaial-ai/company-website.git
cd khaial-ai
npm install
npm run dev
```

---

## 📁 2. Folder Structure

```
khaial-ai/
├── public/               # Static assets (images, video, favicon)
├── src/
│   ├── components/       # Reusable UI components (Header, Footer, VideoPlayer)
│   ├── pages/            # Route-based pages
│   ├── styles/           # Tailwind and global CSS
│   ├── lib/              # Utility functions (e.g. form handlers)
│   └── i18n/             # Translation JSON files (en.json, ar.json)
```

---

## 🧱 3. Component Development Guidelines

### ✅ Best Practices

- **Keep components small and single-purpose**  
  > One component = one responsibility.

- **Use functional components + TypeScript**
  ```tsx
  type Props = {
    title: string;
  };

  const SectionTitle: React.FC<Props> = ({ title }) => (
    <h2 className="text-xl font-bold">{title}</h2>
  );
  ```

- **Avoid inline styles.** Use Tailwind for all styling.
- **Re-use components.** Never copy-paste between pages.
- **Use `className` not `style`.**

---

## 🌍 4. Internationalization (i18n)

- Text content must be dynamic, pulled from `en.json` and `ar.json`.
- Language toggle component will switch between locales and RTL/LTR mode.
- Example:
  ```ts
  import translations from "@/i18n/en.json";
  const { heroTitle } = translations;
  ```

### Language Selection (English / Arabic)

**1. Language Determination:**

* Default language = **English**
* Auto-detect browser language on first visit *(only once)* using `Accept-Language` header.
* Save user’s choice in `localStorage` to persist preference across sessions.

**2. Manual Language Toggle:**

* Add a language switcher in the top-right corner.
* Toggle options: `EN | AR`
* Clicking toggles between locales without reloading the page.

**3. URL Structure:**

* English: `/`
* Arabic: `/ar`
* All internal links must support both locales.

**4. i18n Strategy:**

* Use Next.js `app` directory with built-in i18n routing.
* Place translations in `/locales/en/` and `/locales/ar/` folders as JSON files.

**5. Direction & Styling:**

* Set `dir="rtl"` for Arabic pages.
* Dynamically adjust fonts, layout direction, and alignment based on selected locale.

**6. SEO Considerations:**

* Use `<html lang="en">` and `<html lang="ar">` appropriately.
* Add `<link rel="alternate" hreflang="ar" href="https://.../ar" />` and vice versa.

---

## 🎨 5. Styling Guidelines

### Tailwind CSS Rules

- Use **utility-first** classes (no custom CSS unless necessary).
- Use **responsive** classes (`md:`, `lg:`) for layout tweaks.
- Always use `rem`/`em` spacing, not `px` in custom styles.
- Use **predefined spacing units** (`mt-8`, `p-4`, `gap-6`).
- No inline styles unless dynamic or conditional.

---

## 📹 6. Video Integration

### How to Add the VSL:

- Place MP4/WEBM in `/public/video/`
- Use the `<video>` tag (not iframe unless fallback)
- Example:
  ```tsx
  <video
    src="/video/vsl.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-auto rounded-xl shadow-lg"
  />
  ```

---

## 📄 7. Forms & Integrations

### Form Setup

- HTML form in `/contact` page
- Connect to [Formspree](https://formspree.io/) / [SheetMonkey](https://sheetmonkey.io/)
- Submit via POST
- Include:
  - Name
  - Email
  - Company
  - WhatsApp Number
  - Message

### Calendly

- Use the `<InlineWidget />` from `react-calendly`
- Embed inline in Contact + CTA section

---

## ✨ 8. Development Practices

| Practice                | Rule                                                                 |
|-------------------------|----------------------------------------------------------------------|
| Naming                  | Use `camelCase` for variables, `PascalCase` for components           |
| Component files         | One component per file, named after component                        |
| File organization       | Group files by type, not by feature (flat structure)                 |
| Commits                 | Use clear, conventional commit messages                              |
| PRs                     | Small, frequent pull requests (1 page max per PR)                    |
| Comments                | Only for complex logic or integrations                               |
| Env Variables           | Use `.env.local` for keys (if needed in future)                      |

---

## 🧪 9. Testing & QA Checklist

- ✅ Mobile-friendly
- ✅ Arabic RTL displays correctly
- ✅ Forms work and submit to spreadsheet
- ✅ Calendly widget is responsive
- ✅ Video loads + autoplays
- ✅ All links/pages render without 404
- ✅ SEO meta tags present

---

## 🚀 10. Deployment

### Recommended: **Vercel**

```bash
# Deploy from GitHub
# OR deploy manually:
vercel deploy
```

- Push to `main` branch
- Add custom domain in Vercel dashboard
- Enable `i18n` config in `next.config.js` if needed

---

## 🧼 11. Code Quality Tools (Optional but Suggested)

- **ESLint** — for code linting
- **Prettier** — for consistent formatting
- **Husky** — for pre-commit hooks (format on commit)
- **VSCode Settings Sync** — for standard dev environment

---

## 🛠 12. Example Commands

```bash
# Run dev server
npm run dev

# Build for production
npm run build

# Format files
npx prettier --write .

# Lint check
npm run lint
```

---

## ✅ Conclusion

Follow this guide to keep the Khaial AI website:
- Clean
- Performant
- Easy to maintain
- Ready to scale

If you're unsure about a decision:
**Keep it simple, DRY, and readable.**
