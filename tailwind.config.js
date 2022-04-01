const colors = require("tailwindcss/colors");
const { default: plugin } = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./core/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neu: colors.slate,
        "pri-50": "#a9d6e5",
        "pri-100": "#89c2d9",
        "pri-200": "#61a5c2",
        "pri-300": "#468faf",
        "pri-400": "#2c7da0",
        "pri-500": "#2a6f97",
        "pri-600": "#014f86",
        "pri-700": "#01497c",
        "pri-800": "#013a63",
        "pri-900": "#012a4a",
        warn: colors.red,
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
  ],
};
