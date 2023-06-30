/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        lime: "#D4F229",
        homepageCard: "#3C3C3C",
        homepageBg: "#031229",
        homepageCardArrowBg: "#9B9B9B",
      },
      colors: {
        lime: "#D4F229",
      },
      fontSize: {
        "15px": "15px",
      },
    },
    plugins: [],
  },
};
