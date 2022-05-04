module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'dark': '#0f1720',
        'white': '#fff'
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: 'class',
  mode: 'jit'
}
