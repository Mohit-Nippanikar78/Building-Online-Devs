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
      },
      color: {
        lime: "#D4F229",
      },
      fontSize: {
        "15px": "15px",
      },
    },
    plugins: [],
  },
};
