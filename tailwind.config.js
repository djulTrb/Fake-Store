/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
    ,
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        customSh: "0 0 10px rgba(0,0,0,0.25) inset",
        customSh2: "-7px 0 10px rgba(0,0,0,0.3)",
      },
      fontSize: {
        customFS: "1.4rem",
        xxs: ".65rem",
        "2.5xl": "1.7rem",
      },
      fontFamily: {
        merri: "merriweather",
        playfair: "playfair",
        harelyn: "harelyn",
      },
      backgroundColor: {
        custom: "#d0cfd3",
      },
      backdropBlur: {
        xs: "2px",
        xxs: "1px",
      },
      gridTemplateColumns: {
        customCart: "repeat(2,1fr)",
      },
      gridTemplateRows: {
        customR: "repeat(2,130px)",
      },
      maxWidth: {
        custom: "90%",
      },
      screens: {
        custom: "810px",
        xxxs: "320px",
        xxs: "420px",
        xs: "560px",
      },
      padding: {
        "10percent": "0 10%",
        "15percent": "0 15%",
      },
      height: {
        custom: "95%",
        horizontal: "3px",
      },
    },
  },
  plugins: [require("daisyui")],
};
