/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Design tokens: change the CSS variable in globals.css and every
      // component using bg-surface / text-primary / border-border etc.
      // updates automatically. Nothing below should be hardcoded again.
      colors: {
        canvas: "var(--color-canvas)",
        surface: {
          DEFAULT: "var(--color-surface)",
          hover: "var(--color-surface-hover)",
          raised: "var(--color-surface-raised)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          hover: "var(--color-border-hover)",
        },
        content: {
          DEFAULT: "var(--color-text)",
          muted: "var(--color-text-muted)",
          subtle: "var(--color-text-subtle)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
        },
        success: {
          DEFAULT: "var(--color-success)",
          hover: "var(--color-success-hover)",
          soft: "var(--color-success-soft)",
        },
        danger: {
          DEFAULT: "var(--color-danger)",
          hover: "var(--color-danger-hover)",
          soft: "var(--color-danger-soft)",
        },
      },
      borderRadius: {
        card: "1rem", // rounded-2xl equivalent, named for intent
        control: "0.75rem", // rounded-xl equivalent
      },
    },
  },
  plugins: [],
};
