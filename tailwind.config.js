/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './assets/**/*.{vue,js,css}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    // './nuxt.config.{js,ts}',
  ],
  mode: "jit",
  // The dark mode feature is now enabled using the media strategy by default, so you can remove this key entirely
  darkMode: 'class', // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [],
}
