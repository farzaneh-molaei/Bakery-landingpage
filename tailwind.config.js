/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        mustard:"rgba(233, 189, 141, 1)",
        liver:"rgba(147, 60, 36, 1)"
      },
      fontFamily:{
        sansita:["Sansita Swashed"]
      }
    },
  },
  plugins: [],
}

