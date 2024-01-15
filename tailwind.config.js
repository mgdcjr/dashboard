/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,js}'],

  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito'],
      },
      backgroundImage: {
        background: "url('./build/img/background.webp')",
      },
    },
  },
  plugins: [],
};
