import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-prompt)', 'sans-serif'],
      },
      colors: {
        navy: {
          dark: '#050a14',
          primary: '#0f1c38',
        },
        orange: {
          lava: '#FF4500',
          glow: '#ff6b35',
        },
        neon: {
          blue: '#00f2ff',
        },
        gold: '#FFD700',
        'text-gray': '#B0B8C4',
        'line-green': '#06C755',
        'fb-blue': '#1877F2',
      },
      boxShadow: {
        'neon-orange': '0 0 15px rgba(255, 69, 0, 0.6)',
        'neon-orange-strong': '0 0 25px rgba(255, 69, 0, 0.8)',
        'neon-green': '0 0 15px rgba(6, 199, 85, 0.6)',
        'neon-blue': '0 0 20px rgba(0, 242, 255, 0.4)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(145deg, rgba(15, 28, 56, 0.9), rgba(5, 10, 20, 0.95))',
        'glass-gradient-light': 'linear-gradient(145deg, rgba(15, 28, 56, 0.95), rgba(255, 255, 255, 0.02))',
      }
    },
  },
  plugins: [],
};
export default config;
