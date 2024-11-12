/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    animation: {
      pulse: 'pulse 10s infinite',
      bounce: 'bounce 15s infinite',
    },
    blur: {
      '3xl': '60px',
    },
  },
};
export const plugins = [];
