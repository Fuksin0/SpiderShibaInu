/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
        xs: '1rem',
        ss: '2rem',
        sm: '3rem',
        md: '4rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '7rem',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    extend: {
      fontFamily: {
        'sf-display': ['SF Pro Display','Open Sans'],
        'nunito': ['Nunito', 'Roboto','sans-serif'],
      },
      colors: {
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/heroBG.png')",
      },
    },
  },
  plugins: [],
}

