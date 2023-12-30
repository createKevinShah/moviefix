/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#000000",
      white: "#ffffff",
      "grey-10": "#EDEDED",
      "grey-50": "#A6A6A6",
      "grey-100": "#4D4D4D",
      "grey-900": " #101828",
      background: "#28282B",
      "red-10": "#F4DAD6",
      "red-50": "#DC553E",
      "red-100": "#C84630",
    },
    boxShadow: {
      lg: "6px 6px 24px -4px rgba(16, 24, 40, 0.08)",
    },
  },
  plugins: [],
};
