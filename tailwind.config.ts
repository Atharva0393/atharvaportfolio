import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F8F7F1", // Primary warm off-white notebook paper
          secondary: "#EEECE3", // Secondary paper / card surface
          border: "rgba(33, 31, 28, 0.14)", // Thin paper border
          rule: "rgba(33, 31, 28, 0.055)",  // Subtle horizontal ruling line
        },
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
        mustard: {
          DEFAULT: "#F5CC45", // Retro mustard yellow highlight
          hover: "#E5BC35",
          active: "#D4AB25",
          light: "#FCEAA6",
          border: "#DEB52E",
          muted: "rgba(245, 204, 69, 0.2)",
        },
        pink: {
          DEFAULT: "#F28AA8", // Candy pink sticker
          hover: "#E87494",
          border: "#DC6B8C",
          dark: "#8F2C4A",
          light: "#FCE4EC",
        },
        mint: {
          DEFAULT: "#9FD8C0", // Mint green sticker
          hover: "#87CEB1",
          border: "#76BEA0",
          dark: "#2A664E",
          light: "#E8F5EE",
        },
        blue: {
          DEFAULT: "#7799E8", // Sky / royal blue sticker
          hover: "#6287DE",
          border: "#5076D3",
          dark: "#25458F",
          light: "#E6ECFC",
        },
        neutralGray: "#888780",

        // Compatibility aliases for smooth transition
        cream: {
          DEFAULT: "#F8F7F1",
          50: "#FFFFFF",
          100: "#F8F7F1",
          200: "#EEECE3",
          300: "#E2DFC5",
        },
        terracotta: {
          DEFAULT: "#F5CC45", // Map legacy terracotta to Mustard Yellow
          hover: "#E5BC35",
          active: "#D4AB25",
          light: "#FCEAA6",
          muted: "rgba(245, 204, 69, 0.2)",
        },
        lavender: {
          DEFAULT: "#E6ECFC",
          hover: "#D6DCFC",
          border: "#5076D3",
          dark: "#25458F",
        },
        peach: {
          DEFAULT: "#FCE4EC",
          hover: "#F8D4E0",
          border: "#DC6B8C",
          dark: "#8F2C4A",
        },
        neutralWhite: "#FFFFFF",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "'Anton'", "'Space Grotesk'", "sans-serif"],
        bebas: ["'Bebas Neue'", "sans-serif"],
        anton: ["'Anton'", "sans-serif"],
        heading: ["'Bebas Neue'", "'Anton'", "'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'Space Mono'", "'JetBrains Mono'", "monospace"],
        handwriting: ["'Caveat'", "cursive"],
      },
      borderRadius: {
        none: "0px",
        xs: "2px",
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(33, 31, 28, 0.06)",
        md: "0 4px 12px rgba(33, 31, 28, 0.08)",
        lg: "0 10px 24px rgba(33, 31, 28, 0.12)",
        "offset-sm": "2px 2px 0px #211F1C",
        "offset-md": "3px 3px 0px #211F1C",
        "offset-lg": "5px 5px 0px #211F1C",
        "offset-mustard": "3px 3px 0px #F5CC45",
        tape: "0 1px 4px rgba(33, 31, 28, 0.12)",
        polaroid: "0 4px 16px -2px rgba(33, 31, 28, 0.1), 0 2px 4px rgba(33, 31, 28, 0.06)",
      },
      maxWidth: {
        container: "1280px",
        editorial: "1120px",
        narrow: "840px",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
