import type { Config } from "tailwindcss"

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
    },
  },
  plugins: [],
}
export default config
