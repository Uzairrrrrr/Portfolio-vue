/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': 'rgba(255, 255, 255, 0.5)', 
      },
      fontFamily: {
        'lora': ['Lora', 'serif'],
      },
      letterSpacing: {
        'extra-wide': '0.2rem',
      },
    },
  },
  plugins: [],
};
