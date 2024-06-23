/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#0E1015",
      gradient1: "#6f6fdb",
      gradient2: "#b66df6"
    },
    screens: {
      md: "920px",
      xl: "1150px",
      custom: "768px"
    }
  },
  plugins: [],
}