## Khaial AI Website

Modern, bilingual marketing site for Khaial AI focused on lead generation and demo bookings via Calendly.

- Audience: B2B founders, operations managers, and marketing leads in the Gulf/MENA region
- Core actions: Watch VSL, book a call, learn about WhatsApp AI agents and solutions
- Languages: English and Arabic (RTL support)

### Tech Stack

- Next.js (Pages Router, TypeScript)
- Tailwind CSS
- Optional i18n: `next-i18next`/`react-i18next`
- Hosting: Vercel

### Prerequisites

- Node.js >= 18
- npm (or yarn)

### Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

### Project Structure

```text
.
├── public/
│   ├── images/
│   └── video/
├── src/
│   ├── components/
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── contact.tsx
│   │   ├── whatsapp.tsx
│   │   ├── about.tsx
│   │   ├── privacy-policy.tsx
│   │   └── terms.tsx
│   ├── styles/
│   │   └── globals.css
│   ├── lib/
│   └── i18n/
├── instructions/
│   ├── instructions.md
│   ├── dev_guide.md
│   └── localisation.md
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

### Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Production build
- `npm run start`: Start the production server
- `npm run lint`: Lint the codebase (if configured)

### Styling (Tailwind CSS)

- Tailwind is used for all styling. Prefer utility classes over custom CSS.
- Ensure `content` in `tailwind.config.js` includes the `src` directory, for example:

```js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

### Localization (English/Arabic)

This project targets full bilingual support with RTL for Arabic.

- Recommended approach (Pages Router): `next-i18next`
- Install (if not already):

```bash
npm install next-i18next react-i18next i18next @tailwindcss/typography
```

- Add `next-i18next.config.js`, configure `i18n` in `next.config.js`, and place translations under `public/locales/{en,ar}`.
- Adjust layout direction based on locale (`dir="rtl"` for Arabic).
- See `instructions/localisation.md` for step-by-step details and examples.

### Video and Calendly

- Place VSL files in `public/video/` and embed with the HTML `<video>` tag
- Use the `react-calendly` InlineWidget to embed Calendly in the Contact page and CTAs

### Deployment

- Recommended: Vercel. Push the repository and connect it in the Vercel dashboard.

### QA Checklist (Go-Live)

- Mobile responsive across breakpoints
- Video autoplay works
- Calendly loads reliably
- Contact form submits to Sheet (Formspree/SheetMonkey/Zapier)
- Arabic RTL layout verified end-to-end
- Meta tags, Open Graph, sitemap/robots ready
- Favicon and OG image present

### Reference Docs (in-repo)

- `instructions/instructions.md`: PRD, pages, assets, deployment plan
- `instructions/dev_guide.md`: coding standards, structure, scripts
- `instructions/localisation.md`: i18n setup, RTL tips, examples

### Initialize From Scratch (optional)

If you are recreating this project from an empty folder:

```bash
npx create-next-app@latest khaial-ai --typescript --eslint --src-dir --no-app --use-npm --import-alias "@/*"
cd khaial-ai
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then follow the localization and structure guidelines above.
