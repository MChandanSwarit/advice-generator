/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        'light-cyan': 'hsl(193, 38%, 86%)',
        'neon-green': 'hsl(150, 100%, 66%)',
        'grayish-blue': 'hsl(217, 19%, 38%)',
        'dark-grayish-blue': 'hsl(217, 19%, 24%)',
        'dark-blue': 'hsl(218, 23%, 16%)',
      },
      fontSize: {
        '2.5xl': [
          '1.75rem',
          {
            lineHeight: '2.5rem',
          },
        ],
      },
      letterSpacing: {
        widerest: '0.35rem',
      },
      boxShadow: {
        'button-effect': 'inset 0[x 0px 40px 40px hsl(193, 38%, 86%)',
      },
    },
  },
  plugins: [],
};
