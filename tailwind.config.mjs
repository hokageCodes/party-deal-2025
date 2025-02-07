/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx}", // Adjust to your folder structure
];
export const theme = {
  extend: {
    colors: {
      charcoal: "#1C1C1E",
      yellow: "#FFAF00",
      red: "#FE0000",
    },
    fontFamily: {
      coolvetica: ['Coolvetica Rg', 'sans-serif'],
      satoshi: ['Satoshi Variable', 'sans-serif'],
      sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
    },
    letterSpacing: {
      tight: '-0.05em',
      normal: '0em',
      wide: '0.05em',
    },
    lineHeight: {
      normal: '1.5',
      relaxed: '1.625',
      snug: '1.375',
    },
  },
};
export const plugins = [];