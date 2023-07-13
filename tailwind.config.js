/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'azul-agua':'#D2EDF9' 
      }
    },
  },
  plugins: [],
}

