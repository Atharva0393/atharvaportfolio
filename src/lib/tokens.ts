/**
 * Atharva Kale — Retro Notebook Design Tokens
 * Aesthetic: Retro editorial scrapbook / notebook-inspired personal portfolio.
 * Source of Truth: Ruled notebook paper, mustard highlights, colorful stickers, tape decorations, sharp paper edges.
 */

export const colors = {
  // Global Paper Canvas
  paper: {
    DEFAULT: "#F8F7F1", // Primary warm off-white notebook paper
    secondary: "#EEECE3", // Secondary paper / card surface
    border: "rgba(33, 31, 28, 0.14)", // Thin paper border
    rule: "rgba(33, 31, 28, 0.055)",  // Subtle horizontal ruling line
  },

  // Primary Typography & Ink
  ink: {
    DEFAULT: "#211F1C", // Main deep ballpoint / typewriter ink
    pure: "#121214",
    800: "#2A2824",
    600: "#4D4B45",
    400: "#75736C",
    200: "#A8A69E",
    100: "#D6D4CC",
    50: "#EFECE4",
  },

  // Highlight Elements (Mustard Yellow)
  mustard: {
    DEFAULT: "#F5CC45",
    hover: "#E5BC35",
    active: "#D4AB25",
    light: "#FCEAA6",
    muted: "rgba(245, 204, 69, 0.2)",
    border: "#DEB52E",
  },

  // Scrapbook Sticker Accents
  pink: {
    DEFAULT: "#F28AA8",
    hover: "#E87494",
    border: "#DC6B8C",
    dark: "#8F2C4A",
    light: "#FCE4EC",
  },
  mint: {
    DEFAULT: "#9FD8C0",
    hover: "#87CEB1",
    border: "#76BEA0",
    dark: "#2A664E",
    light: "#E8F5EE",
  },
  blue: {
    DEFAULT: "#7799E8",
    hover: "#6287DE",
    border: "#5076D3",
    dark: "#25458F",
    light: "#E6ECFC",
  },

  // Supporting Neutrals
  neutralGray: "#888780",
  tape: {
    white: "rgba(255, 255, 255, 0.72)",
    yellow: "rgba(245, 204, 69, 0.75)",
    blue: "rgba(119, 153, 232, 0.75)",
    pink: "rgba(242, 138, 168, 0.75)",
  },

  // Compatibility aliases
  cream: {
    DEFAULT: "#F8F7F1",
    50: "#FFFAF6",
    100: "#F8F7F1",
    200: "#EEECE3",
    300: "#E2DFC5",
  },
  terracotta: {
    DEFAULT: "#F5CC45", // Map legacy accent to Mustard Yellow
    hover: "#E5BC35",
    active: "#D4AB25",
    light: "#FCEAA6",
    muted: "rgba(245, 204, 69, 0.2)",
  },
  neutralWhite: "#FFFFFF",
} as const;

export const typography = {
  fonts: {
    display: "var(--font-bebas-neue)",
    anton: "var(--font-anton)",
    heading: "var(--font-bebas-neue)",
    body: "var(--font-inter)",
    mono: "var(--font-space-mono)",
    handwriting: "var(--font-caveat)",
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
} as const;

export const radii = {
  none: "0px",
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  "2xl": "16px",
  full: "9999px",
} as const;

export const containers = {
  narrow: "840px",
  editorial: "1120px",
  container: "1280px",
  max: "1440px",
} as const;

export const shadows = {
  sm: "0 1px 3px rgba(33, 31, 28, 0.06)",
  md: "0 4px 12px rgba(33, 31, 28, 0.08)",
  lg: "0 10px 24px rgba(33, 31, 28, 0.12)",
  offsetSm: "2px 2px 0px #211F1C",
  offsetMd: "3px 3px 0px #211F1C",
  offsetLg: "5px 5px 0px #211F1C",
  offsetMustard: "3px 3px 0px #F5CC45",
  tape: "0 1px 4px rgba(33, 31, 28, 0.1)",
} as const;
