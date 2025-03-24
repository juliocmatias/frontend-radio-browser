import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        permanent: ['Permanent Marker', 'cursive'],
        foldit: ['Foldit', 'cursive']
      },
      colors: {
        primary: '#2F2F33',
        secondary: '#1E1E21',
        link: '#1267FC'
      }
    }
  }
};

export default config;
