/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // I changed the default font to Poppins
      },
      colors: {
        customBlack: '#262625',
        customYellow: '#F7DC6F',
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
}
