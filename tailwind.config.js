/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'eql': '0 0 40px -15px rgba(0, 0, 0, 0.3)',
      },
      blur: {
        '4xl': '100px'
      },
      animation: {
        wiggle: 'wiggle 10s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }
    },
  },
  plugins: [],
}