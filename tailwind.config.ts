import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--bg-base, #09090b)",
        surface: "var(--bg-surface, #121217)",
        "surface-elevated": "var(--bg-elevated, #18181f)",
        border: "var(--border-subtle, #27272a)",
        accent: {
          DEFAULT: "var(--accent, #f4f4f5)",
          muted: "var(--accent-muted, #a1a1aa)",
          glow: "var(--accent-glow, rgba(255, 255, 255, 0.1))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "marquee-x": "marquee 25s linear infinite",
        "pulse-ring": "pulse-ring 2.8s cubic-bezier(0.16, 1, 0.3, 1) infinite",
        "depth-breathe": "depth-breathe 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.85)", opacity: "0.9" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        "depth-breathe": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.45" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
