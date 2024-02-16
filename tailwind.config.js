/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      maxWidth:{
        container: "1440px",
        contentContainer: "1140px",
        containerSmall: "1024px",
        containerxs: "768px",
        82: "23rem",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily:{
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        bodyColor: "#0A192F",
        textGreen: "#64ffda",
        textLight: "#CCD6F6",
        textDark: "#8892B0",
        hoverColor: "rgba(100,255,218,0.1)",
      },
      letterSpacing: {
        '5': "0.15em",
        '6': "0.25em",
        '7': "0.3em",
        '8': "0.35em",
        '9': "0.4em",
        '10': "0.45em",
        '11': "0.5em",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

