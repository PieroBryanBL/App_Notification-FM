/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.html", "public/**/*.js"],
  theme: {
    extend: {
      colors: {
        "primary-red": "#ff4141",
        "primary-blue": "#1e2333",
        "White": "#ffffff",
        "veryLightGrayishBlue": "#f1f7fe",
        "lightGrayishBlueOne": "#d2e1ed",
        "lightGrayishBlueTwo": "#c1cbd4",
        "grayishBlue": "#5b6d8b",
        "darkGrayishBlue": "#3d4d63",
        "darkBlue": "#0d0e12",
      },
    },
    fontFamily: {
      Jakarta: ["Plus Jakarta Sans, sans-serif"],
    },
    container: {
      center: true,
      screens: {
        lg: "850px",
        xl: "850px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
