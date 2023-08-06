const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        'tomato': 'hsl(4, 100%, 67%)',
        'dark-slate-grey': 'hsl(234, 29%, 20%)',
        'charcoal-grey': 'hsl(235, 18%, 26%)',
        'grey': 'hsl(231, 7%, 60%)',
        'white': 'hsl(0, 0%, 100%)',
      },
      listStyleImage: {
        checkmark: 'url("/assets/images/icon-list.svg")',
      },
    },
  },
  plugins: [],
}
