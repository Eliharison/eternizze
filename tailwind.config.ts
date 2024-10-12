import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    boxShadow: {
      custom: '0 0 3.6px rgba(0, 0, 0, 0.25)',
    },
    colors: {
      blue: {
        400: '#009EFF',
        500: '#0066AB',
        600: '#6EC1E4',
      },
      red: '#F04447',
      white: '#F2F2F2',
      yellow: '#FDE68A',
      black: '#484848',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '36px',
      '4xl': '48px',
      '10xl': '128px',
    },
  },
  plugins: [],
};

export default config;
