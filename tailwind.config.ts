/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        saira: ["var(--font-saira)"],
      },
      colors: {
        darkGreen: "#24424D",
        lightGreen: "#80CF8B",
        yellow: "#CEF169",
        purple: "#CEC4F4",
        lightGrey: "#EBECEF",
        white: "#FEFEFE",
        orange: "#EF7709"
      },
    },
  },
  plugins: [],
};
