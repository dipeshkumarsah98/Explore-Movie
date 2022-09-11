/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        wave: "url('/src/img/wave.svg')",
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        openSans: ["'Open Sans'", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],
        kalam: ["Kalam", "cursive"],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("flowbite/plugin")],
};
