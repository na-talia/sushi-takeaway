/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        mitr: ["Mitr", "sans-serif"],
      },
      colors: { mainLight: "#FCEFC5", salmon: "#D76147", mainGrey: "#D6D6D6" },
    },
  },
  plugins: [],
};
