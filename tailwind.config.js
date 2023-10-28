/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "very-dark-blue": "#1B1D23",
        "dark-grey": "#60636D",
        "medium-grey": "#7D828F",
        "light-grey": "#C8CCD8",
        "very-light-grey": "#EEEFF4",
        error: "#DF5656",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
      screens: {
        xmax: { max: "75em" },
      },
    },
  },
  plugins: [],
};
