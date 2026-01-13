/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            'ali-orange': '#FF6A00',
            'tech-blue': '#007BFF',
            'dark-bg': '#0F172A',
            'card-bg': '#1E293B',
          },
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
          }
        },
      },
      plugins: [],
    }
