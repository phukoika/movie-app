/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM sans", "sans-serif"],
      },
      colors: {
        primary: "#F62682",
        secondary: "6F5CF1",
      },
    },
  },
  plugins: [],
};
