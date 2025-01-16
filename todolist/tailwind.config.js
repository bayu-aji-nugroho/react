/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        shift:{
          "0%":{transform: "translateX(-100%)"},
          "100%":{transform: "translateX(0px)"},
        },
        shiftL:{
          "0%":{transform: "translateX(0px)"},
          "100%":{transform: "translateX(-300px)",},
        }
      },
      animation:{
        "geser": "shift 0.5s linear",
        "geserL":"shiftL 0.5s linear"

      }
    },
  },
  plugins: [
    
  ],
}

