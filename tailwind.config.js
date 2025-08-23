/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-playfair)', 'Playfair Display', 'serif'],
        body: ['var(--font-instrument)', 'Instrument Sans', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'charcoal': '#1A1A1A',
        'light-gray': '#F5F5F5',
        'green-500': '#22c55e',
        'green-600': '#16a34a',
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
    },
  },
  plugins: [],
};
