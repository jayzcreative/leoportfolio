 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"], // This tells Tailwind to scan these files
  theme: {
    extend: {
      colors: {
        brand: '#a855f7',
        dark: '#050505',
      },
    },
  },
  plugins: [],
}