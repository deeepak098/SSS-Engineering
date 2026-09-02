/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#f6f5f2',
          100: '#eae8e2',
          200: '#d5d2ca',
          300: '#b8b3a8',
          400: '#9a9486',
          500: '#7e7968',
          600: '#65614f',
          700: '#504c3e',
          800: '#434038',
          900: '#393731',
          950: '#1f1e19',
        },
        clay: {
          50: '#f5f0eb',
          100: '#e9dfd3',
          200: '#d4bfa8',
          300: '#c0a07e',
          400: '#ae8666',
          500: '#9d7054',
          600: '#8e5e47',
          700: '#734c3a',
          800: '#5e4035',
          900: '#4e372e',
        },
        slate: {
          850: '#22303a',
          900: '#15252e',
        },
        ink: '#0a0f14',
        paper: '#fbf9f6',
        rust: '#b55a3a',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        serif: [
          'Georgia',
          'Cambria',
          'Times New Roman',
          'serif',
        ],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
    },
  },
  plugins: [],
}
