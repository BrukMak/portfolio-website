/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundGradient: {
        quaternary: "linear-gradient(to right, rgb(21, 18, 39), #15037e)",
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        blueish: "#1e3a8a",
        // quaternary: "linear-gradient( rgb(21, 18, 39), #15037e)",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg3.jpg')",
      },
    },
  },
  plugins: [],
};