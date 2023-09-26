/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'maincustombg': "url('/public/images/stock/darkgreenbg.jpg')",
        'overlay1': "url('/public/images/stock/green_plaster.jpg')",
        'musiciansgallerybg': "url('/public/images/stock/musiciansgallerybg.jpg')",
        "overlay2": "url('/public/images/stock/mainbg.jpg')",
        'publicationsgallerybg': "url('/public/images/stock/publicationsgallerybg.jpg')",
      }
    },
  },
  plugins: [],
}

