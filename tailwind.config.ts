import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#5A3CB0", light: "#7C5CE6", dark: "#3D1F8F" },
        accent: { DEFAULT: "#FFEB3B", dark: "#FDD835" },
        surface: { DEFAULT: "#F8F7F4", dark: "#1A1A1A", card: "#FFFFFF" },
        "neon-pink": "#FF006E",
        "neon-blue": "#0096FF",
        "neon-cyan": "#00D9FF",
        "neon-purple": "#B537F2",
      },
      fontFamily: {
        display: ['"DM Serif Display"', "Georgia", "serif"],
        body: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      borderRadius: { xl2: "1rem", xl3: "1.5rem", xl4: "2rem" },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #5A3CB0 0%, #B537F2 100%)",
        "gradient-hero-dark": "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)",
      },
      boxShadow: {
        "card": "0 4px 16px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 8px 24px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
