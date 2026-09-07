/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07070b',
          900: '#0b0b12',
          850: '#101019',
          800: '#15151f',
          700: '#1f1f2b',
          600: '#2c2c3a',
        },
        vermilion: {
          50: '#fff4ef',
          100: '#ffe3d6',
          200: '#ffc3ab',
          300: '#ff9a75',
          400: '#ff6b3d',
          500: '#f8451a',
          600: '#e12d0d',
          700: '#b81f0d',
          800: '#8f1b12',
          900: '#761a13',
        },
        jade: {
          300: '#7ee8c0',
          400: '#3fd6a4',
          500: '#12b886',
          600: '#0b9b72',
        },
        gold: {
          300: '#ffdc8a',
          400: '#f7c35c',
          500: '#e0a33a',
          600: '#bb8125',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        shimmer: { '0%': { backgroundPosition: '-1000px 0' }, '100%': { backgroundPosition: '1000px 0' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        drift: { '0%': { transform: 'translate3d(0,0,0)' }, '100%': { transform: 'translate3d(-50%,0,0)' } },
        glowPulse: { '0%,100%': { opacity: 0.35 }, '50%': { opacity: 0.8 } },
        dash: { to: { strokeDashoffset: 0 } },
      },
      animation: {
        shimmer: 'shimmer 2.2s linear infinite',
        float: 'float 6s ease-in-out infinite',
        drift: 'drift 40s linear infinite',
        glowPulse: 'glowPulse 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
