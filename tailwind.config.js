/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A19",
        secondary: "#31511E",
        three: "#859F3D",
        four: "#F6FCDF",
      },
    },
  },
  plugins: [],
};
