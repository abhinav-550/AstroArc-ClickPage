/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./markup/*.{html,js}"],
  theme: {
    fontFamily:{
      QuickSand : ['QuickSand'],
      Eudoxus: ['Eudoxus']
    },
    extend: {
      width: {
        '80vw': '80vw',
        '90vw' : '90vw',
      },
    },
  },
  plugins: [],
}

