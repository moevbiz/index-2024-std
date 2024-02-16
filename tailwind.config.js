/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '26px'],
      xl: ['32px', '36px'],
      '2xl': ['48px', '52px'],
    },
    fontFamily: {
      sans: 'Arial, sans-serif',
      serif: 'Times, serif'
    },
    extend: {
      // keyframes: {
      //   fadeIn: {
      //     '0%': { opacity: 0 },
      //     '100%': { opacity: 1 },
      //   }
      // },
      colors: {
        red: 'red',
      }
    },
  },
  plugins: [],
}