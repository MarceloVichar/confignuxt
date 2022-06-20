/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: [
    {
      myTheme: {
        "primary": "#0d63bf",
        "secondary": "#dbd827",
        "accent": "#0a2e87",
        "neutral": "#1B202C",
        "base-100": "#E8E6EA",
        "info": "#82AEE8",
        "success": "#1D7260",
        "warning": "#E9900C",
        "error": "#F31251",
      },
    },
    "corporate"
  ],
  plugins: [require("daisyui")],
}
