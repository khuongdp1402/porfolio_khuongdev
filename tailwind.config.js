/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Space Mono"', 'monospace'],
      serif: ['"Space Mono"', 'monospace'],
      mono: ['"Space Mono"', 'monospace'],
    },
    extend: {
      fontFamily: {
        anton: ['"Anton SC"', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#010103',
          purple: '#8E7F94',
        }
      }
    },
  },
  plugins: [],
};

