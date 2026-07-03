import type { Config } from "tailwindcss";

/**
 * Barvna shema Decerno — spremeni vrednosti tukaj, če se brand barve spremenijo.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAFAF8",
        ink: {
          DEFAULT: "#0B0B0F",
          soft: "#15151C",
        },
        primary: {
          DEFAULT: "#4F46E5",
          dark: "#3F38C9",
          light: "#EEEDFC",
          glow: "#818CF8",
        },
        accent: {
          DEFAULT: "#10B981",
          light: "#E7F8F1",
        },
        body: "#111114",
        bodylight: "#F5F5F4",
        muted: "#5C5C66",
        mutedark: "#A0A0AC",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(17, 17, 20, 0.04), 0 8px 24px rgba(17, 17, 20, 0.06)",
        "card-hover":
          "0 2px 4px rgba(79, 70, 229, 0.06), 0 16px 40px rgba(79, 70, 229, 0.12)",
        cta: "0 1px 2px rgba(79, 70, 229, 0.3), 0 8px 20px rgba(79, 70, 229, 0.25)",
        offer:
          "0 1px 2px rgba(16, 185, 129, 0.15), 0 12px 32px rgba(16, 185, 129, 0.12)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
