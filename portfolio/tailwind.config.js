/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B0040',
        secondary: '#FF1493',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        '3d': '0 20px 40px -12px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}