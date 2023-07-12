const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Open Sans Variable"', ...defaultTheme.fontFamily.sans],
      serif: ['Kaisei Tokumin', ...defaultTheme.fontFamily.serif],
      mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono]
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
