const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#1f1f38",
      "background-variant": "#2c2c6c",
      primary: "#4db5ff",
      "primary-variant": "rgba(77, 181, 255, 0.4)",
      "custom-light": "rgba(255, 255, 255, 0.6)",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 960px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
