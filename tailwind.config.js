/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B1E54",
        secondary: "#9B7EBD",
        three: "#D4BEE4",
        four: "#EEEEEE",
      },
    },
  },
  plugins: [],
};
