/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      // center: true,
      padding: {
        DEFAULT: '15px',
        // xs: '15px',
        // ss: '15px',
        // sm: '3rem',
        md: '4rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '7rem',
      },
    },
    screens: {
      // xs: "480px", // Под это разрешение смысла делать нет, просто оставлю пока в таблице, может надумаю что то сделать, но вряд ли, оно смотрится и так нормально
      ss: "620px", 
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1600px",
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

