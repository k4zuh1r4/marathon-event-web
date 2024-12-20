/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown-black': '#333333',
        'ice-blue': '#E1F4F3',
        'coffee-web': '#706C61',
        'snow': "#FCF7F8",
        'auburn': '#A22C29',
        'burnt-umber': '#902923',
        'rich-black': '#0D1F2D',
        'paynes-gray': '#546A7B',
        'cadets-gray': '#9EA3B0',
        'misty-rose': '#FAE1DF',
        'desert-sand': '#E4C3AD',

      },
      fontFamily:{
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],

      },
    },
  },
  plugins: [],
});
