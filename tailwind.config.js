/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFF',
          DEFAULT: '#F5F5F5',
          dark: '#eee',
        },
        secondary: {
          light: '#67eeff',
          DEFAULT: '#00BBF0',
          dark: '#008bbd',
        },
        tertiary: {
          light: '#2d2d2d',
          DEFAULT: '#1a1a1a',
          dark: '#000',
        },
      },
    },
  },
  plugins: [],
};
