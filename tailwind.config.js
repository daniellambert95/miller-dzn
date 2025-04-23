/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#04b9d6', // Turquoise blue
        secondary: '#171717', // Dark for contrast
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'beam-left-to-right': {
          '0%': { left: '-10%', transform: 'translateY(-50%)' },
          '100%': { left: '110%', transform: 'translateY(-50%)' }
        },
        'beam-right-to-left': {
          '0%': { right: '-10%', transform: 'translateY(-50%)' },
          '100%': { right: '110%', transform: 'translateY(-50%)' }
        }
      },
      animation: {
        'beam-left-right': 'beam-left-to-right 3s linear infinite',
        'beam-right-left': 'beam-right-to-left 3s linear infinite'
      }
    },
  },
  plugins: [],
} 