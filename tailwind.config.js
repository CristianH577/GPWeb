const { nextui } = require("@nextui-org/react");


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': 'rgb(107, 114, 128)',
      },
    },
  },
  darkMode: "class",
  // plugins: [nextui()],
  plugins: [
    nextui({
      themes: {
        dark: {
          // colors: {
          //   // primary: {
          //   //   DEFAULT: "#BEF264",
          //   //   foreground: "#000000",
          //   // },
          // },
        },
      },
    }),
  ],
}

