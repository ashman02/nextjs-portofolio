import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        trust: "#070831",
        stand: "#fff4d6",
        light: "#C0C0C0",
        grey: "#F3F4F6",
        dark: "#000000",
      },
      keyframes: {
        slideInBlur: {
          '0%': { opacity: '0', filter: 'blur(10px)', transform: 'translateY(20px)' },
          '100%': { opacity: '1', filter: 'blur(0)', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255,255,255,0.6)' },
          '50%': { boxShadow: '0 0 20px rgba(255,255,255,0.8)' },
        },
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        slideInBlur: 'slideInBlur 0.7s ease-out forwards',
        glowPulse: 'glowPulse 3s ease-in-out infinite',
        gentleFloat: 'gentleFloat 4s ease-in-out infinite',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255,255,255,0.7)',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.animation-delay-200': { 'animation-delay': '0.2s' },
        '.animation-delay-400': { 'animation-delay': '0.4s' },
        '.animation-delay-600': { 'animation-delay': '0.6s' },
      }
      addUtilities(newUtilities)
    }),
  ],
}
export default config
