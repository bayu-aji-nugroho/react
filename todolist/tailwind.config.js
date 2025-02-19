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
        menghilang:{
          "0%":{opacity:"0"},
          "100%":{opacity:"1"}
        }
      },
      animation:{
        "geser": "shift 0.5s linear",
        "hilang":"menghilang 0.9s linear"
        

      }
    },
  },
  plugins: [
    
  ],
}

