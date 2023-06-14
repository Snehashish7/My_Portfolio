/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,css}'], //in .{} include all file types that you want to run with tailwindcss
  safelist: [
    'bg-blue-500',
    'text-center',
    'hover:opacity-100',
    // ...
    'lg:text-right',
  ],
  plugins: {
    tailwindcss: { config: './tailwindcss-config.js' },
  },
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
