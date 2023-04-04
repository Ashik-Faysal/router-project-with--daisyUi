/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fce374",

          secondary: "#aa79d8",

          accent: "#f9edae",

          neutral: "#212C36",

          "base-100": "#3B354B",

          info: "#6CC5EF",

          success: "#59E8B1",

          warning: "#AE6F0A",

          error: "#DB335D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
