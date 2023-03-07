/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
