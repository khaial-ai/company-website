Khaial AI Website — Project Requirement Document (PRD)

---

## 1. 🚀 Project Overview

**Website Goal:**
Generate leads through paid ads and book demos via Calendly.

**Audience:**
B2B founders, ops managers, and marketing leads in the Gulf/MENA region.

**Core Actions Users Should Take:**

* Watch the VSL (video sales letter).
* Book a call using Calendly.
* Learn more about AI agents and solutions.

**Languages:**

* English
* Arabic (RTL layout where needed)

---

## 2. 📄 Website Pages & Structure

### 🌐 Primary Pages (Header Nav)

| Page               | Path        | Purpose                                             |
| ------------------ | ----------- | --------------------------------------------------- |
| Home               | `/`         | Main landing for pitch, VSL, benefits, CTA          |
| WhatsApp AI Agents | `/whatsapp` | Dedicated pitch for WhatsApp agents use cases + CTA |
| Contact Us         | `/contact`  | Lead form + Calendly embed                          |

### 📎 Secondary Pages (Footer Links Only)

| Page             | Path              | Purpose                   |
| ---------------- | ----------------- | ------------------------- |
| About Us         | `/about`          | Simple overview of Khaial |
| Privacy Policy   | `/privacy-policy` | Legal                     |
| Terms of Service | `/terms`          | Legal                     |

---

## 3. 🧱 Directory & Project Structure

```bash
khaial-ai/
├── public/
│   ├── images/
│   └── video/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── VideoPlayer.tsx
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── whatsapp.tsx
│   │   ├── contact.tsx
│   │   ├── about.tsx
│   │   ├── privacy-policy.tsx
│   │   └── terms.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── theme.css
│   ├── lib/
│   │   └── utils.ts
│   └── i18n/
│       ├── en.json
│       └── ar.json
├── .env
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

---

## 4. ⚙️ Tech Stack

| Category          | Tool/Stack                                                               |
| ----------------- | ------------------------------------------------------------------------ |
| Framework         | Next.js (App Router optional)                                            |
| Styling           | Tailwind CSS                                                             |
| Language          | TypeScript                                                               |
| Forms             | HTML form + Google Sheets webhook (via SheetMonkey / Formspree / Zapier) |
| Booking           | Calendly Embed                                                           |
| Video             | Self-hosted MP4 + fallback to Vimeo/YouTube if needed                    |
| Bilingual Support | JSON translation + manual RTL switching                                  |
| Hosting           | Vercel or Netlify                                                        |

---

## 5. 🎨 Color Scheme & Assets

> **Leave this section blank for now. You’ll plug in final colors + design assets.**

### 🎨 Color Palette


theme: {
  extend: {
    colors: {
      primary: ' #131313, #080808',
      secondary: ' #4F1AD6',
      background: ' #000000',
      text: ' #FFFFFF',
      accent: ' #XXXXXX',
    },
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
    },
  },
}


### 📦 Assets Needed

* [ ] Logo (light + dark background)
* [ ] Hero images / icons
* [ ] VSL video file (MP4/WebM)
* [ ] Language toggle icon (EN/AR)
* [ ] WhatsApp agent visuals / mockups
* [ ] Contact form background image or accent

---

## 6. 📺 Video Embed Guidelines

### 🎥 Where:

* Homepage hero section (VSL)

### 💡 Recommended Setup:

* Use HTML5 `<video>` tag with:

  * Poster image fallback
  * Controls disabled
  * Autoplay muted
  * Loop on
* Use responsive wrapper with aspect-ratio (16:9)
* Host in `/public/video/` folder for direct access

```tsx
<video
  src="/video/intro.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-auto rounded-xl shadow-lg"
/>
```

* Optional: Detect device and fallback to iframe from Vimeo/YT if needed.

---

## 7. 📩 Contact Form + Calendly Setup

### 📄 Form

* Fields: Name, Email, Company, WhatsApp number, Message
* Method: POST to Google Sheets using [Formspree](https://formspree.io/) / [SheetMonkey](https://sheetmonkey.io/) / Zapier

### 📆 Calendly

* Embedded as inline widget (`<InlineWidget url="https://calendly.com/YOUR-LINK" />`)
* Also placed in CTA buttons across site

---

## 8. 📱 Responsive Layout Notes

* Fully mobile-first
* Language switch must switch direction (LTR ↔ RTL)
* Hero VSL scales responsively
* Sticky top header
* Bottom CTA strip for mobile recommended

---

## 9. 🧪 QA Checklist (Before Going Live)

| Section                       | Checklist ✅ |
| ----------------------------- | ----------- |
| Mobile Responsiveness         |             |
| Video Autoplay Works          |             |
| Calendly Loads on All Devices |             |
| Form Submits to Sheet         |             |
| RTL/Arabic Works Fully        |             |
| Meta Titles & Descriptions    |             |
| Social Sharing Preview OK     |             |
| Sitemap.xml + robots.txt      |             |
| Favicon and OG Image added    |             |

---

## 10. 🚀 Deployment Plan

1. **Install Next.js App:**

   ```bash
   npx create-next-app@latest khaial-ai --typescript
   cd khaial-ai
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

2. **Configure Tailwind in `tailwind.config.js`:**

   ```js
   content: ["./src/**/*.{js,ts,jsx,tsx}"],
   ```

3. **Setup routing + page structure (see file tree above)**

4. **Copy design assets into `/public/images/` and `/public/video/`**

5. **Embed Calendly + Form + Video**

6. **Handle translations with simple i18n JSON files and a manual toggle**

7. **Deploy to Vercel:**

   ```bash
   git init
   git remote add origin <repo-url>
   git push -u origin main
   ```

