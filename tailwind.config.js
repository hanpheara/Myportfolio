/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // pinkCustom: "#FF2EC6",
        // purpleCustom: "#8753F3",
        // blueCustom: "#2EA8FF",
        // cyanCustom: "#26D9C5",
        spaceBlue: "#1A2B6D",  // Replace with extracted colors
        cosmicPink: "#E84A80",
        nebulaPurple: "#5E2D79",
        galaxyTeal: "#2A9D8F",
      },
    },
  },
  plugins: [require('daisyui'),],
}

