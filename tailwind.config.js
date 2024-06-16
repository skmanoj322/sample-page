/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {},
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
    },
  },
  plugins: [],
};
