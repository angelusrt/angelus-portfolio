/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#151E2A',
        'light-blue': '#1A2733',
        'ice-blue': '#9FC7D3',
        'white': '#FFFFFF',
        'grey': '#C4C4C4',
        'dark-green': '#1C4650',
        'light-green': '#00ACA2',
        'green': '#74CA72'
      },
      fontFamily: {
        'poppins': ['poppins', 'sans-serif'],
        'roboto': ['roboto', 'sans-serif'],
        'condensed': ['roboto condensed', 'sans-serif'],
        'slab': ['roboto slab', 'sans-serif']
      }
    },
  }
}

