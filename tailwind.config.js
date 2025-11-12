/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A0E27', // Deep navy from Fikra logo
          dark: '#050711',
          light: '#1A1E3F',
        },
        accent: {
          DEFAULT: '#F5C518', // Yellow from lightbulb and building lights
          dark: '#D4A817',
          light: '#FFD93D',
        },
        gold: {
          DEFAULT: '#FFA500', // Warm amber/orange glow
          dark: '#E59400',
          light: '#FFB733',
        },
        success: '#28A745',
        warning: '#FFC107',
        error: '#DC3545',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'strong': '0 8px 32px rgba(0, 0, 0, 0.16)',
      },
    },
  },
  plugins: [],
}
