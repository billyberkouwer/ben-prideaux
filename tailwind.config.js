/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './sanity/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    // Overriding fontFamily to use @next/font loaded families
    fontFamily: {
      mono: 'var(--font-mono)',
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
    },
    extend: {
      gridAutoRows: {
        'tile': 'minmax(200px, 1fr)',
      },
      backgroundColor: {
        dark: 'rgba(29, 26, 26, 1)',
        light: 'rgba(255, 255, 255, 1)'
      },
      colors: {
        dark: 'rgba(29, 26, 26, 1)',
        light: 'rgba(255, 255, 255, 1)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
