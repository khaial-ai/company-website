export const theme = {
  colors: {
    background: "#000000",
    foreground: "#FFFFFF",
    primary: "#131313",
    secondary: "#4F1AD6",
    accent: "#6D28D9",
    border: "#E5E7EB",
    black: "#000000",
    white: "#FFFFFF",
    muted: "#6B7280"
  },
  fonts: {
    english: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
    arabic: 'Cairo, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"'
  },
  radii: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem"
  },
} as const;

export type Theme = typeof theme;


