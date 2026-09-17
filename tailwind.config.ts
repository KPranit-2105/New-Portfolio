import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0F172A",    // Deep Navy Slate
          secondary: "#1E293B",  // Dark Slate Gray
          accent: "#2563EB",     // Enterprise Blue
          accentHover: "#1D4ED8",
          success: "#16A34A",    // Security Green
          warning: "#D97706",    // Risk Amber
          danger: "#DC2626",     // Critical Red
          lightBg: "#FFFFFF",
          darkBg: "#0B0F19",
          cardLight: "#FFFFFF",
          cardDark: "#111827",
          borderLight: "#E2E8F0",
          borderDark: "#1E293B",
          textLight: "#0F172A",
          textDark: "#F8FAFC",
          mutedLight: "#64748B",
          mutedDark: "#94A3B8",
        },
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "8px",
        md: "8px",
        sm: "6px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)",
        card: "0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04)",
        dropdown: "0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.04)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
