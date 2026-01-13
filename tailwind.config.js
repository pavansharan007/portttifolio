// tailwind.config.js
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}", // includes your React + HTML files
  ],
  theme: {
    extend: {
      
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "orange-40": "#FFFDFA",
        grass: "#5CA64A",
        dirtt: "#5C4633",
        dirt: "#836953",
        stone: "#7D7D7D",
        charcoal: "#2B2B2B",
        sand:"#D6C285",
        vercel: {
          bg: "#000", // your default
          color1: "#111", // component default
          color2: "#222", // hover background
          color3: "#333", // active/state background
        },
      },
    },
  },
  plugins: [],
});
