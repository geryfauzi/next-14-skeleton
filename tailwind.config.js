/** @type {{colors: colors}} */

const colors = require("./settings/colors");
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}"],
  important: true,
  darkMode: "class",
  theme: {
    extend: {
      colors: colors,
      keyframes: {
        load: {
          "0%": { transform: "translate(0, 100px)" },
          "10%": { transform: "translate(0, 100px)" },
          "100%": { transform: "translate(0, 0px)" }
        },
        blur: {
          "0%": { filter: "blur(1.5rem)" },
          "10%": { filter: "blur(1rem)" },
          "100%": { filter: "blur(0)" }
        }
      },
      animation: {
        "load-scale": "load 0.7s ease-in-out",
        "load-blur": "blur 0.7s ease-in-out"
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        light: {}
      }
    ]
  }
};
