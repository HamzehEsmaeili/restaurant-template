/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#311F09",
      },
      backgroundImage: {
        opening: "url('../images/business-hours.png')",
      },
    },
  },
  plugins: [],
};
