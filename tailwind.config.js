/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      main: ["Inter", "sans-serif"],
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    backgroundSize: {
      quotesSm: "60px",
      quotesMd: "120px",
      curveSm: "400px",
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      right: "right",
      top: "top",
      "bottom-4": "center bottom 1rem",
      "top-left": "top  left 6rem",
      "bottom-left": "bottom left",
    },
    extend: {
      colors: {
        darkBlue: "hsl(240, 38%, 20%)",
        grayishBlue: "hsl(240, 18%, 77%)",
      },
    },
  },
  plugins: [],
};
