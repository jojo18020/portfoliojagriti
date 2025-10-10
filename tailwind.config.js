/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#121F45",
        navy2: "#0f1a38",
        brand: "#223971",
        accent: {
          50: "#fff1f3",
          100: "#fee2e7",
          200: "#fecdd6",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48", // 🔴 use this a lot
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },
        gold: "#FFC906",
      },
    },
  },
  plugins: [],
};
