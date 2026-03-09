/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:        '#0369a1',
          'blue-dark': '#075985',
          'blue-mid':  '#0284c7',
          'blue-light':'#38bdf8',
          orange:        '#f97316',
          'orange-dark': '#ea580c',
          'orange-light':'#fb923c',
          sand:        '#f5e6c8',
          'sand-dark': '#e6cfa0',
          'sand-light':'#fdf8ef',
          cream:       '#faf6ee',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in':  'fadeIn 0.7s ease-out both',
        'slide-up': 'slideUp 0.7s ease-out both',
        'zoom-in':  'zoomIn 0.5s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(3,105,161,0.85) 0%, rgba(0,0,0,0.45) 60%, rgba(234,88,12,0.4) 100%)',
      },
    },
  },
  plugins: [],
}
