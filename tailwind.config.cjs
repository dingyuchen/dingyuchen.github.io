/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.mdx"
  ],
  theme: {
    extend: {
      fontFamily: {
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
