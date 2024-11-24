/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        purple: {
          400: "#9F7AEA",
          600: "#805AD5",
          700: "#6B46C1",
        },
        pink: {
          500: "#ED64A6",
        },
        red: {
          500: "#F56565",
        },
        indigo: {
          600: "#5A67D8",
          700: "#4C51BF",
        },
      },
    },
  },
  plugins: [],
};
