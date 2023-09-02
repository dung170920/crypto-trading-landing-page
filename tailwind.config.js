/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: "'Josefin Sans', sans-serif",
        space: "'Space Mono', monospace",
      },
      container: {
        padding: "5rem",
      },
      colors: {
        pink: {
          200: "#fdc8e6",
        },
        yellow: {
          200: "#ffec8d",
        },
        purple: {
          50: "#f8f7fd",
          500: "#855ed9",
        },
        gray: {
          900: "#1a1a24",
        },
      },
    },
  },
  plugins: [],
};
