/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'memorial': {
          50: '#f5f5f0',
          100: '#e8e8e0',
          200: '#d8d8d0',
          300: '#c8c8c0',
          400: '#a0a0a0',
          500: '#6b6b6b',
          600: '#3d3d3d',
          700: '#2d2d2d',
          800: '#1d1d1d',
          900: '#0d0d0d',
        }
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}