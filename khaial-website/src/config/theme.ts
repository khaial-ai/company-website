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
  // Dark gradient seen in the footer screenshot (near-black to deep purple)
  backgroundFrom: "#0B0714",
  backgroundTo: "#1A0F2F",
  // Surface cards/inputs
  surface: "#0F0B1E",
  // CTA purple gradient (matches bright purple pill)
  primaryFrom: "#8B5CF6",
  primaryTo: "#6D28D9",
  // For glows and focus rings (r,g,b only)
  ringRgb: "139,92,246",
  // Muted foreground on dark
  textMuted: "#A1A1AA",
  // Subtle borders on dark
  border: "#26233A",
};

export const BRAND_SHADOWS = {
  glow: `0 0 40px rgba(${BRAND_COLORS.ringRgb}, 0.25)`,
} as const;

export const BRAND_RADII = {
  pill: "9999px",
  lg: "0.75rem",
} as const;


