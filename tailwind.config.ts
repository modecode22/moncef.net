/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "25px",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px",
      large: "12px",
    },
    fontSize: {
      "7.5xl": "5.5rem",
      "10xl": "10rem",
      "11xl": "12rem",
      "12xl": "14rem",
      "14xl": "18rem",
      "16xl": "24rem",
      "20xl": "30rem",
      ...defaultTheme.fontSize,
    },

    screens: {
      xs: "380px",
      xxl: "1400px",
      ...defaultTheme.screens,
    },
    extend: {
      listStyleImage: {
        star: 'url("../../public/list.png")',
      },
      boxShadow: {
     },
      backgroundImage: {
        "pattern-right": "url('../../public/pattern-right.svg')",
        "pattern-left": "url('../../public/pattern-left.svg')",
        "pattern-up": "url('../../public/pattern-up.svg')",
      },
      colors: {
        primary: {
          50: "hsl( 115  , 30%, 90%)",
          100: "hsl(115  , 30%, 85%)",
          200: "hsl(115  , 30%, 75%)",
          300: "hsl(115  , 30%, 65%)",
          400: "hsl(115  , 30%, 55%)",
          500: "hsl(115  , 30%, 45%)",
          600: "hsl(115  , 30%, 35%)",
          700: "hsl(115  , 30%, 25%)",
          800: "hsl(115  , 30%, 15%)",
          900: "hsl(115  , 30%, 10%)",
          950: "hsl(115  , 30%, 5%)",
        },
        light: {
          50: "hsl( 180, 0%, 99%)",
          100: "hsl(180, 0%, 98%)",
          200: "hsl(180, 0%, 96%)",
          300: "hsl(180, 0%, 94%)",
          400: "hsl(180, 0%, 92%)",
          500: "hsl(180, 0%, 90%)",
          600: "hsl(180, 0%, 88%)",
          700: "hsl(180, 0%, 80%)",
          800: "hsl(180, 0%, 70%)",
          900: "hsl(180, 0%, 50%)",
          950: "hsl(180, 0%, 30%)",
        },
        dark: {
          50:  "hsl(180, 11%, 29%)",
          100: "hsl(180, 11%, 23%)",
          200: "hsl(180, 11%, 19%)",
          300: "hsl(180, 11%, 15%)",
          400: "hsl(180, 11%, 13%)",
          500: "hsl(180, 11%, 11%)",
          600: "hsl(180, 11%, 9%)",
          700: "hsl(180, 11%, 7%)",
          800: "hsl(180, 11%, 4%)",
          900: "hsl(180, 11%, 3%)",
          950: "hsl(180, 11%, 2%)",
        },
        error: {
          50: "hsl(0, 90%, 95%)",
          100: "hsl(0, 85%, 90%)",
          200: "hsl(0, 80%, 85%)",
          300: "hsl(0, 75%, 75%)",
          400: "hsl(0, 70%, 65%)",
          500: "hsl(0, 65%, 55%)",
          600: "hsl(0, 60%, 45%)",
          700: "hsl(0, 55%, 35%)",
          800: "hsl(0, 50%, 25%)",
          900: "hsl(0, 45%, 15%)",
          950: "hsl(0, 40%, 10%)",
        },
        alert: {
          50: "hsl(50, 85%, 90%)",
          100: "hsl(50, 80%, 85%)",
          200: "hsl(50, 75%, 75%)",
          300: "hsl(50, 70%, 65%)",
          400: "hsl(50, 60%, 55%)",
          500: "hsl(50, 60%, 45%)",
          600: "hsl(50, 55%, 35%)",
          700: "hsl(50, 50%, 25%)",
          800: "hsl(50, 45%, 15%)",
          900: "hsl(50, 40%, 10%)",
          950: "hsl(50, 35%, 10%)",
        },
        success: {
          50: "hsl(120, 90%, 95%)",
          100: "hsl(120, 85%, 90%)",
          200: "hsl(120, 80%, 85%)",
          300: "hsl(120, 75%, 75%)",
          400: "hsl(120, 70%, 65%)",
          500: "hsl(120, 65%, 55%)",
          600: "hsl(120, 60%, 45%)",
          700: "hsl(120, 55%, 35%)",
          800: "hsl(120, 50%, 25%)",
          900: "hsl(120, 45%, 15%)",
          950: "hsl(120, 40%, 10%)",
        },
        happy: {
          50: "hsl(240, 90%, 95%)",
          100: "hsl(240, 85%, 90%)",
          200: "hsl(240, 80%, 85%)",
          300: "hsl(240, 75%, 75%)",
          400: "hsl(240, 70%, 65%)",
          500: "hsl(240, 65%, 55%)",
          600: "hsl(240, 60%, 45%)",
          700: "hsl(240, 55%, 35%)",
          800: "hsl(240, 50%, 25%)",
          900: "hsl(240, 45%, 15%)",
          950: "hsl(240, 40%, 10%)",
        },
        info: {
          50: "hsl(210, 90%, 95%)",
          100: "hsl(210, 85%, 90%)",
          200: "hsl(210, 80%, 85%)",
          300: "hsl(210, 75%, 75%)",
          400: "hsl(210, 70%, 65%)",
          500: "hsl(210, 65%, 55%)",
          600: "hsl(210, 60%, 45%)",
          700: "hsl(210, 55%, 35%)",
          800: "hsl(210, 50%, 25%)",
          900: "hsl(210, 45%, 15%)",
          950: "hsl(210, 40%, 10%)",
        },
      },
      keyframes: {
        slow: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "slow-spin": "slow 10s alternate ease-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
