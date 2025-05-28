import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#fefaf4',
          100: '#fdf3e5',
          200: '#fbe3c7',
          300: '#f8d2a9',
          400: '#f4b975',
          500: '#f0a04b',
          600: '#e88d2d',
          700: '#d97521',
          800: '#b45a1c',
          900: '#90471d',
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
