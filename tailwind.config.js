/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", //css color
  purge: ["./**/*.html", "./**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        35: "35px",
        100: "100px",
      },
      colors: {
        gray33: "#333",
      },
    },
  },
  plugins: [
    {
      tailwindcss: { config: "./tailwind.config.js" },
      autoprefixer: {},
    },
  ],
};
