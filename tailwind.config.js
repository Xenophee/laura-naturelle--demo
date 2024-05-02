/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './index.html',
        './src/**/*.js',
        './pages/*.html'
    ],
    theme: {
          extend: {
              fontFamily: {
                  'sans': ['Lato', ...defaultTheme.fontFamily.sans],
                  'petrona': ['Petrona', 'serif'],
                  'dancing': ['Dancing Script', 'cursive'],
              },
              colors: {
                  'pink-50': '#faf5f8',
                  'pink-100': '#f7ecf3',
                  'pink-200': '#f0dae9',
                  'pink-300': '#e5bcd6',
                  'pink-400': '#d492bb',
                  'pink-500': '#c470a0',
                  'pink-600': '#af5384',
                  'pink-700': '#95416b',
                  'pink-800': '#7c3859',
                  'pink-900': '#69324d',
                  'pink-950': '#3e192b',
              },
          },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
};
