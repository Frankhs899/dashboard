/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      // paleta de colores
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
      secondary: {
        100: "#fbf0ce",
        200: "#f7e19c",
        300: "#f2d16b",
        400: "#eec239",
        500: "#eab308",
        600: "#bb8f06",
        700: "#8c6b05",
        800: "#5e4803",
        900: "#2f2402"
      },
      success: {
        100: "#e6f5d0",
        200: "#ceeba2",
        300: "#b5e073",
        400: "#9dd645",
        500: "#84cc16",
        600: "#6aa312",
        700: "#4f7a0d",
        800: "#355209",
        900: "#1a2904"
      },
      warning: {
        100: "#fcd1cd",
        200: "#faa39b",
        300: "#f77569",
        400: "#f54737",
        500: "#f21905",
        600: "#c21404",
        700: "#910f03",
        800: "#610a02",
        900: "#300501"
      },
      info: {
        100: "#d7ecfb",
        200: "#b0d9f8",
        300: "#88c6f4",
        400: "#61b3f1",
        500: "#39a0ed",
        600: "#2e80be",
        700: "#22608e",
        800: "#17405f",
        900: "#0b202f"
      },      
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

