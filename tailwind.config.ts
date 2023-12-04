/* eslint @typescript-eslint/no-var-requires: "off" */
const { nextui } = require("@nextui-org/react")

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'repos': '60px 60px repeat(3, 1fr)'
      }
    }
  },
  darkMode: "class",
  plugins: [nextui()]
}
