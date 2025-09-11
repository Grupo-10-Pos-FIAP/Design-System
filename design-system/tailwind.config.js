/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
        backgroundSoft: "var(--color-background-soft)",
        text: "var(--color-text)",
        textSecondary: "var(--color-text-secondary)",
        feedback: {
          success: "var(--color-feedback-success)",
          warning: "var(--color-feedback-warning)",
          error: "var(--color-feedback-error)",
        },
      },
    },
  },
  plugins: [],
};