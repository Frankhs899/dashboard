/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary: {
        100: "#e0e0fc",
        200: "#c1c2f9",
        300: "#a1a3f7",
        400: "#8285f4",
        500: "#6366f1",
        600: "#4f52c1",
        700: "#3b3d91",
        800: "#282960",
        900: "#141430"
      },
    },
    extend: {},
  },
  plugins: [],
}

