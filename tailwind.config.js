/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      mavenpro: ["MavenPro", "cursive"]
    },
    colors: {
      "green": "#A1C870",
      "green-accent": "#A1C87066",
      "blue": "#6BBED2",
      "brown": "#A86223",
      "white": "#fff",
      "black": "#000"
    },
    extend: {}
  },
  plugins: [],
}
