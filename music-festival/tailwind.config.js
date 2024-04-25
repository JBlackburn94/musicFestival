/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bright-turquoise": {
          50: "#edfffd",
          100: "#c0fffc",
          200: "#81fffa",
          300: "#3afff9",
          400: "#00ffee",
          500: "#00e2d4",
          600: "#00b7b0",
          700: "#00918d",
          800: "#007271",
          900: "#045d5c",
          950: "#00383a",
        },
      },
    },
  },
  plugins: [],
};
