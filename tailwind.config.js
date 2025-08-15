/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   background2: "url('srcassets\bg.002.jpg')",
      //   background1: "url('srcassets\bg01.jpg')",

      // },
      zIndex: {
        "-10": "-10", // Enables z-index like -z-10
      },
    },
  },
  plugins: [],
};
