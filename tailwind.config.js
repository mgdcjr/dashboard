/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,js}'],

  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito'],
      },
      backgroundImage: {
        weatherBG: "url('/build/img/weather-bg.jpg')",
      },
    },
  },
  plugins: [],
};
