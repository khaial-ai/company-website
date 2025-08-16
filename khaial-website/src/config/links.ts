export type NavItem = { labelKey: string; href: string };
export type SocialItem = { labelKey: string; href: string };

export const NAV_LINKS: NavItem[] = [
  { labelKey: "navigation.home", href: "/" },
  // About is an in-page anchor on home for now
  { labelKey: "navigation.about", href: "/#about" },
  { labelKey: "navigation.contact", href: "/contact" },
  { labelKey: "navigation.faq", href: "/faq" },
];

export const SOCIAL_LINKS: SocialItem[] = [
  { labelKey: "social.twitter", href: "https://twitter.com" },
  { labelKey: "social.instagram", href: "https://instagram.com" },
  { labelKey: "social.youtube", href: "https://youtube.com" },
];

export const LEGAL_LINKS: NavItem[] = [
  { labelKey: "navigation.terms", href: "/terms" },
  { labelKey: "navigation.privacy", href: "/privacy-policy" },
];

// External appointment link (can be Calendly or any booking tool)
export const BOOK_APPOINTMENT_URL = "https://cal.com/";


