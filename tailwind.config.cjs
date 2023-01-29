/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': 'hsl(230, 17%, 14%)',
        'dark-desaturated-blue': 'hsl(228, 28%, 20%)',
        'desaturated-blue': 'hsl(228, 34%, 66%)',
        'white-color': 'hsl(0, 0%, 100%)'
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
