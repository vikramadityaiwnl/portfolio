/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f97316",
        background: "#ffffff",
        surface: "#fafafa",
        text: {
          primary: "#111827",
          secondary: "#4b5563",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
