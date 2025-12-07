import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        surface: '#f9f9f9',
        border: 'rgba(0,0,0,0.08)',
        'brand-red': '#FF0000',
        'brand-red-dim': 'rgba(255, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float-slow': 'floatSlow 3s ease-in-out infinite',
        'flare-move-1': 'flareMove1 15s infinite alternate ease-in-out',
        'flare-move-2': 'flareMove2 20s infinite alternate-reverse ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        flareMove1: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(100px, 50px) scale(1.1)' },
        },
        flareMove2: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(-80px, -40px) scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

