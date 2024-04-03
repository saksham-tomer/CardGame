/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-bg": "url('/public/bg.jpg')",
      },
    },
  },
  plugins: [],
};
