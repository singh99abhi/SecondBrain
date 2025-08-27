// tailwind.config.js
export default {
    content: [
      './index.html',  // Include HTML files
      './src/**/*.{js,ts,jsx,tsx}'  // Include JS, TS, JSX, TSX files
    ],
    theme: {
      extend: {
        colors:{
            gray:{
                100:"#eeeeef",
                200:"#e6e9ed",
                600:"#95989c"

            },
            purple:{
                200:"#d9ddee",
                500:"#9492db",
                    600:"#7164c0"
            }
        }
      },
    },
    plugins: [],
  }
  