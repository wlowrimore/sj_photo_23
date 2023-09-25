/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'maincustombg': "url('/public/images/stock/darkgreenbg.jpg')",
        'musicianscustombg': "url('/public/images/stock/green_plaster.jpg')",
      }
    },
  },
  plugins: [],
}

