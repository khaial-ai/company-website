export type BrandPalette = {
  backgroundFrom: string;
  backgroundTo: string;
  surface: string;
  primaryFrom: string;
  primaryTo: string;
  ringRgb: string;
  textMuted: string;
  border: string;
};

export const BRAND_COLORS: BrandPalette = {
  // Dark space/purple gradient inferred from the provided footer design
  backgroundFrom: "#0b0517",
  backgroundTo: "#160b2a",
  // Panels / inputs on dark
  surface: "#121022",
  // Purple CTA gradient
  primaryFrom: "#7C3AED",
  primaryTo: "#6D28D9",
  // For glows and focus rings (r,g,b only)
  ringRgb: "124,58,237",
  // Muted foreground on dark
  textMuted: "#9CA3AF",
  // Subtle borders on dark
  border: "#2A2A2A",
};

export const BRAND_SHADOWS = {
  glow: `0 0 40px rgba(${BRAND_COLORS.ringRgb}, 0.25)`,
} as const;

export const BRAND_RADII = {
  pill: "9999px",
  lg: "0.75rem",
} as const;


