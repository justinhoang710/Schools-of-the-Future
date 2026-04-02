/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#080b10',
        panel: '#10151f',
        accent: '#06d6a0',
        muted: '#9fb0c8'
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(6,214,160,0.4), 0 20px 50px -20px rgba(6,214,160,0.5)'
      }
    }
  },
  plugins: []
};
