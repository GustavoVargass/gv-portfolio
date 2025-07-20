/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Ativa o modo baseado em classe
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'axk-blue': '#0DF5E3',
      },
      scrollBehavior: ['responsive'],
    },
  },
  plugins: [],
};
