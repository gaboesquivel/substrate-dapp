/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/container-queries')],
}

