import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "main-texture": "url('/bg-texture.png')",
      },
      colors: {
        base: "#FFF7E8", // Soft Cream
        secondary: "#FFDAB3", // Peach
        accent: "#FFA471", // Soft Orange
        highlight: "#FF6F3D", // Bright Orange
        "body-text": "#333333", // A soft black or dark gray
      },
    },
  },
  plugins: [],
};
export default config;
