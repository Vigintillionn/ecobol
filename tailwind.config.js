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
      "blue-darker": "#246878",
      "brown": "#A86223",
      "red": "#D81159",
      "gunmetal": "#232C33",
      "gunmetal-accent": "#232C33B3",
      "white": "#fff",
      "black": "#000",
      "transparent": "transparent",
    },
    extend: {
      gridTemplateColumns: {
        "cards": "repeat(auto-fit, minmax(300px, 1fr))"
      },
      gridTemplateRows: {
        "body": "auto 1fr auto"
      },
      borderRadius: {
        "cards": "2.5rem"
      },
      boxShadow: {
        "nibutton-inactive": "-1px -1px 3px rgba(0,0,0,.1) inset," + 
        "1px 1px 3px rgba(255,255,255,.7) inset",
        "nibutton-active": "0 1px 3px rgba(0,0,0,.2) inset," +
        "-1px -1px 4px rgba(255,255,255,.5) inset"
      }
    }
  },
  plugins: [],
}
