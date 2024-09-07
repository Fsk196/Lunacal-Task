/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
        "5xl": [
          "0 40px 25px rgba(0, 0, 0, 0.45)", // Less blur, darker shadow
          "0 50px 35px rgba(0, 0, 0, 0.35)", // Larger, reduced blur
        ],
        "6xl": [
          "8px 10px 5px rgba(0, 0, 0, 0.5)", // Less blur, higher opacity
          "0 60px 40px rgba(0, 0, 0, 0.4)", // Larger, reduced blur and darker
        ],
        "7xl": [
          "5px 5px 5px rgba(0, 0, 0, 0.5)", // Less blur, higher opacity
          "5px 5px 40px rgba(0, 0, 0, 0.4)", // Larger, reduced blur and darker
        ],
        "arrow-shadow": [
          "-5px -5px 10px rgba(173, 216, 230, 0.3)" /* Light blue shadow with blur */,
          "10px 10px 10px rgba(0, 0, 0, 0.6)",
        ],
        "addBtn": [
          "-2px -2px 5px rgba(173, 216, 230, 0.3)" /* Light blue shadow with blur */,
          "10px 10px 10px rgba(0, 0, 0, 0.6)",
        ],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
