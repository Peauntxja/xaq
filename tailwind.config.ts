import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070809",
          900: "#0c0e10",
          850: "#121518",
          800: "#1a1e23",
          700: "#2a3038",
          600: "#3d4550",
          500: "#6b7585"
        },
        steel: {
          200: "#c8ced3",
          300: "#a8b0bc",
          400: "#8a93a1"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 60px rgba(0, 0, 0, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
