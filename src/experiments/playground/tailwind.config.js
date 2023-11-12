const plugin = require("tailwindcss/plugin")

module.exports = {
  content: ["./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}"],
  daisyui: {
    // styled: 0,
    // themes: 0,
    // base: 0,
    // utils: 0,
    // logs: true,
    // prefix: "b-",
    // darkTheme: "dark",
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("../../"),
    // require('daisyui'),
    // require("tailwindcss-flip"),
  ],
}
