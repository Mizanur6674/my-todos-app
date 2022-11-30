/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        lg: "1440px",
      },
      colors: {
        primary: "hsl(220, 98%, 61%)",
        bgLinear: "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
      },
      fontFamily: {
        josefin: ["Josefin Sans"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
