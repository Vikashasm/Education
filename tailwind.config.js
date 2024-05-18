/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xsm: '400px',
        custom: '576px', // Define your custom breakpoint here
        llg: '992px', // Define your custom breakpoint here
      },
    },
  },
  plugins: [],
};
