const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
      serif: defaultTheme.fontFamily.serif,
      mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono]
    }
  },
  plugins: [],
}
