/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-30deg)" },
          "50%": { transform: "rotate(30deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out 4s infinite",
      },
      colors: {
        primarybuttoncolor: "red",
        primarybgcolor: "#243c5a",
      },
      backgroundImage:{
        'hero-pattern': "url('/img/hero-pattern.svg')",            /* if using -   make stiring */
        'footer-texture': "url('/img/footer-texture.png')",
      },
      content:{
         'symbool':'hello'
      }
      
    },
  },
  plugins: [],
};
