/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors';

const color=require("tailwindcss/colors");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:colors.yellow
      }
    },
  },
  plugins: [],
}