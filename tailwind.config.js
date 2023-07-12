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
        neutral: {
          400:"#F4F4F4",
          800: "#3C3C3C",
          900:"#212121"
        },
        
        homepageCardArrowBg: "#9B9B9B",
        navy: "#031229",
      },
      colors: {
        error:"#C81414",
        lime: "#D4F229",
        infoBlue: "#3285DA",
        neutral: {
          600: "#9B9B9B",
          800: "#3C3C3C",
          900: "#212121",
        },
      },
      fontSize: {
        "15px": "15px",
      },
      borderColor: {
          lime: "#D4F229",
        neutral: {
          800: "#3C3C3C",
        },
      },
      outline: {
          lime: "#D4F229",
        neutral: {
          800: "#3C3C3C",
        },
      },

      fill: {
        infoBlue: "#3285DA",
      },
    },
    plugins: [],
  },
};
