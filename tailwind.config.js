/** @type {import('tailwindcss').Config} */
module.exports = {
  // https://tailwindcss.com/docs/content-configuration
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // https://tailwindcss.com/docs/theme
  theme: {
    screens: {
      sm: '750px',
      md: '1000px',
      lg: '1300px', //? this should be the same with the breakpoints setup in the global
    },
    fontFamily: {
      body: ['var(--font-convergence)'],
      heading: ['var(--font-aclonica)'],
    },
    extend: {
      spacing: {
        'card-sm': '1rem',
        'card-md': '2rem',
        'card-lg': '3rem',
        'container-phone': '31.9rem',
        'container-tablet-portrait': '73.9rem',
        'container-tablet-landscape': '100.3rem',
        'container-desktop': '129.1rem',
      },
      gridTemplateColumns: {
        24: 'repeat(24, minmax(0, 1fr))',
      },
      gridColumnEnd: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
        21: '21',
        22: '22',
        23: '23',
        24: '24',
        25: '25',
      },
      colors: {
        background: '#fefae0',
        primary: '#283618',
        primary500: '#606c38',
        secondary: '#bc6c25',
        secondary500: '#dda15e',
      },
    },
  },
  // https://tailwindcss.com/docs/plugins
  plugins: [],
};
