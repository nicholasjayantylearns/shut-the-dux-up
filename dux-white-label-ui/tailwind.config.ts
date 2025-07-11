import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateColumns: {
        // Add a 12-column grid system
        "12": "repeat(12, minmax(0, 1fr))",
      },
      gridColumn: {
        // Add column span utilities for the 12-column grid
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        barlow: ["var(--font-barlow)", "sans-serif"],
        monospace: ["var(--font-monospace)", "monospace"],
        sansBody: ["var(--font-sans-body)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom Neon Colors
        "neon-dark-bg": "#0A0A1A", // Very dark blue-black for background
        "neon-pink": "#FF00CC", // Vibrant magenta
        "neon-blue": "#00CCFF", // Bright cyan

        // New CSS variables for whitelabeling
        "bg-primary": "hsl(var(--background-primary))",
        "bg-secondary": "hsl(var(--background-secondary))",
        "bg-tertiary": "hsl(var(--background-tertiary))",
        "border-default": "hsl(var(--border-default))",
        "text-primary": "hsl(var(--text-primary))",
        "text-secondary": "hsl(var(--text-secondary))",
        "text-muted": "hsl(var(--text-muted))",
        "text-placeholder": "hsl(var(--text-placeholder))",

        "card-clarity-bg": "hsl(var(--card-clarity-bg))",
        "card-clarity-border": "hsl(var(--card-clarity-border))",
        "card-clarity-text-primary": "hsl(var(--card-clarity-text-primary))",
        "card-clarity-text-secondary": "hsl(var(--card-clarity-text-secondary))",
        "card-clarity-text-muted": "hsl(var(--card-clarity-text-muted))",
        "card-clarity-text-italic": "hsl(var(--card-clarity-text-italic))",

        "card-monospace-bg": "hsl(var(--card-monospace-bg))",
        "card-monospace-border": "hsl(var(--card-monospace-border))",
        "card-monospace-text-primary": "hsl(var(--card-monospace-text-primary))",
        "card-monospace-text-secondary": "hsl(var(--card-monospace-text-secondary))",

        "accent-problem": "hsl(var(--accent-problem))",
        "accent-behavior": "hsl(var(--accent-behavior))",
        "accent-result": "hsl(var(--accent-result))",
        "accent-positive": "hsl(var(--accent-positive))",
        "accent-negative": "hsl(var(--accent-negative))",
        "accent-warning": "hsl(var(--accent-warning))",
        "accent-warning-border": "hsl(var(--accent-warning-border))",
        "accent-warning-text": "hsl(var(--accent-warning-text))",

        "problem-node-bg": "hsl(var(--problem-node-bg))",
        "problem-node-border": "hsl(var(--problem-node-border))",
        "behavior-node-bg": "hsl(var(--behavior-node-bg))",
        "behavior-node-border": "hsl(var(--behavior-node-border))",
        "result-node-bg": "hsl(var(--result-node-bg))",
        "result-node-border": "hsl(var(--result-node-border))",

        "carousel-bg": "hsl(var(--carousel-bg))",
        "carousel-border": "hsl(var(--carousel-border))",
        "carousel-text-primary": "hsl(var(--carousel-text-primary))",
        "evidence-highlight-bg": "hsl(var(--evidence-highlight-bg))",
        "evidence-highlight-border": "hsl(var(--evidence-highlight-border))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "reveal-left": {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0% 0 0)" },
        },
        // New keyframes for fade-in
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Adjusted reveal-left to run once per content change
        "reveal-left": "reveal-left 6.5s ease-in-out forwards",
        // New animation for fade-in
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
      boxShadow: {
        // Re-added Custom Neon Shadows for progress bars
        "neon-pink-glow": "0 0 8px var(--neon-pink), 0 0 12px var(--neon-pink)",
        "neon-blue-glow": "0 0 8px var(--neon-blue), 0 0 12px var(--neon-blue)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
