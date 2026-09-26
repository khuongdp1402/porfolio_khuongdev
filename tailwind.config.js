/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Kanit', 'sans-serif'],
    },
    extend: {
      colors: {
        ink: '#0C0C0C',
        mist: '#D7E2EA',
      },
    },
  },
  plugins: [],
};
