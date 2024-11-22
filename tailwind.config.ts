import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: "class",
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      none: "0px",
      sm: "calc(var(--radius) - 3px)",
      DEFAULT: "var(--radius)",
      md: "var(--radius)",
      lg: "calc(var(--radius) + 3px)",
      xl: "calc(var(--radius) + 6px)",
      "2xl": "calc(var(--radius) + 9px)",
      "3xl": "calc(var(--radius) + 12px)",
      full: "9999px",
    },
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        primary: {
          base: "var(--primary-1)",
          "bg-subtle": "var(--primary-2)",
          bg: "var(--primary-3)",
          "bg-hover": "var(--primary-4)",
          "bg-active": "var(--primary-5)",
          line: "var(--primary-6)",
          border: "var(--primary-7)",
          "border-hover": "var(--primary-8)",
          "focus-ring": "var(--primary-8)",
          solid: "var(--primary-9)",
          "solid-hover": "var(--primary-10)",
          text: "var(--primary-11)",
          "text-contrast": "var(--primary-12)",
        },

        grey: {
          base: "var(--grey-1)",
          "bg-subtle": "var(--grey-2)",
          bg: "var(--grey-3)",
          "bg-hover": "var(--grey-4)",
          "bg-active": "var(--grey-5)",
          line: "var(--grey-6)",
          border: "var(--grey-7)",
          "border-hover": "var(--grey-8)",
          "focus-ring": "var(--grey-8)",
          solid: "var(--grey-9)",
          "solid-hover": "var(--grey-10)",
          text: "var(--grey-11)",
          "text-contrast": "var(--grey-12)",
        },

        info: {
          base: "var(--info-1)",
          "bg-subtle": "var(--info-2)",
          bg: "var(--info-3)",
          "bg-hover": "var(--info-4)",
          "bg-active": "var(--info-5)",
          line: "var(--info-6)",
          border: "var(--info-7)",
          "border-hover": "var(--info-8)",
          "focus-ring": "var(--info-8)",
          solid: "var(--info-9)",
          "solid-hover": "var(--info-10)",
          text: "var(--info-11)",
          "text-contrast": "var(--info-12)",
        },

        success: {
          base: "var(--success-1)",
          "bg-subtle": "var(--success-2)",
          bg: "var(--success-3)",
          "bg-hover": "var(--success-4)",
          "bg-active": "var(--success-5)",
          line: "var(--success-6)",
          border: "var(--success-7)",
          "border-hover": "var(--success-8)",
          "focus-ring": "var(--success-8)",
          solid: "var(--success-9)",
          "solid-hover": "var(--success-10)",
          text: "var(--success-11)",
          "text-contrast": "var(--success-12)",
        },

        warning: {
          base: "var(--warning-1)",
          "bg-subtle": "var(--warning-2)",
          bg: "var(--warning-3)",
          "bg-hover": "var(--warning-4)",
          "bg-active": "var(--warning-5)",
          line: "var(--warning-6)",
          border: "var(--warning-7)",
          "border-hover": "var(--warning-8)",
          "focus-ring": "var(--warning-8)",
          solid: "var(--warning-9)",
          "solid-hover": "var(--warning-10)",
          text: "var(--warning-11)",
          "text-contrast": "var(--warning-12)",
        },

        error: {
          base: "var(--error-1)",
          "bg-subtle": "var(--error-2)",
          bg: "var(--error-3)",
          "bg-hover": "var(--error-4)",
          "bg-active": "var(--error-5)",
          line: "var(--error-6)",
          border: "var(--error-7)",
          "border-hover": "var(--error-8)",
          "focus-ring": "var(--error-8)",
          solid: "var(--error-9)",
          "solid-hover": "var(--error-10)",
          text: "var(--error-11)",
          "text-contrast": "var(--error-12)",
        },
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "collapsible-down": {
          from: { height: "0" },
          to: {
            height: "var(--radix-collapsible-content-height)",
          },
        },
        "collapsible-up": {
          from: {
            height: "var(--radix-collapsible-content-height)",
          },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "collapsible-down": "collapsible-down 0.15s ease-out",
        "collapsible-up": "collapsible-up 0.15s ease-out",
      },
    },
  },
  plugins: [animate],
} satisfies Config;