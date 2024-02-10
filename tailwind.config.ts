import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        laptop14: "1440px",
      },
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
        complementary: "#FF7F50", // Coral
        "body-text": "#333333", // A soft black or dark gray
      },
    },
  },
  plugins: [],
};
export default config;
