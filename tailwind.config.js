/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'maincustombg': "url('/public/images/darkgreenbg.jpg')",
        'gallery1bg': "url('/public/images/green_plaster.jpg')",
      }
    },
  },
  plugins: [],
}

