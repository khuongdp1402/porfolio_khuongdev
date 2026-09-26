/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
      display: ['Kanit', '"Be Vietnam Pro"', 'sans-serif'],
    },
    extend: {
      colors: {
        ink: token('ink'),
        surface: token('surface'),
        mist: token('mist'),
        strong: token('strong'),
        accent: token('accent'),
        paper: token('paper'),
        paperfg: token('paperfg'),
      },
      maxWidth: {
        page: '1200px',
      },
    },
  },
  plugins: [],
};
