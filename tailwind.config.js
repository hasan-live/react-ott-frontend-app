/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        ottheme: {
          primary: "#936EE3",
          secondary: "#FF3333",
          accent: "#080D33",
          neutral: "#3d4451",
          grey: "#363853",
          dark: "#1B2430",
          "base-100": "#F5FFFE",
        },
      },
      "dark",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],
}