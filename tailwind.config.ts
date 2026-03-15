import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}', './src/lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#050509',
        surface: '#101018',
        border: '#26263A',
        accent: {
          DEFAULT: '#8B5CFF',
          orange: '#FF6A3D'
        }
      },
      boxShadow: {
        soft: '0 18px 45px rgba(0,0,0,0.7)'
      }
    }
  },
  plugins: []
};

export default config;

