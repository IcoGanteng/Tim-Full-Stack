/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#8B7355', dark: '#6B5344', light: '#C4A77D' },
        secondary: { DEFAULT: '#C4A77D', light: '#D4A574' },
        accent: { DEFAULT: '#D4A574', light: '#E8C5A5' },
      },
      fontFamily: { sans: ['Inter', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] },
      borderRadius: { card: '16px', button: '12px', large: '24px' },
      boxShadow: { card: '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)', 'card-dark': '0 1px 3px rgba(0,0,0,0.3)' },
    },
  },
  plugins: [],
};