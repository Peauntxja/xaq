import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0b0f14",
          900: "#11161d",
          850: "#161c24",
          800: "#1d2631",
          700: "#2a3645",
          600: "#3b4a5d",
          500: "#56708a"
        },
        amber: {
          300: "#f4d18c",
          400: "#e7b75a",
          500: "#d99d2b"
        },
        teal: {
          300: "#8dd4cf",
          400: "#4bb5b0",
          500: "#2d8f8b"
        }
      },
      boxShadow: {
        glow: "0 18px 50px rgba(0, 0, 0, 0.35)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    }
  },
  plugins: []
};

export default config;
