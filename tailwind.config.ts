import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          main: "#050505",
          secondary: "#0A0A0A",
          card: "rgba(12, 12, 12, 0.78)",
        },
        gold: {
          primary: "#D6A63C",
          bright: "#F0C75E",
          metallic: "#FFE09A",
          muted: "rgba(214, 166, 60, 0.4)",
          border: "rgba(214, 166, 60, 0.25)",
          glow: "rgba(214, 166, 60, 0.15)",
        },
        txt: {
          primary: "#F5F5F5",
          muted: "#8E8E8E",
        },
      },
      fontFamily: {
        headline: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #FFE09A 0%, #D6A63C 50%, #9A721D 100%)",
        "gold-gradient-hover": "linear-gradient(135deg, #FFF0C4 0%, #F0C75E 50%, #B88B2A 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(20,20,20,0.8) 0%, rgba(8,8,8,0.9) 100%)",
        "radial-glow": "radial-gradient(circle at 50% 50%, rgba(214,166,60,0.12) 0%, rgba(5,5,5,0) 70%)",
      },
      boxShadow: {
        "gold-glow": "0 0 25px rgba(214, 166, 60, 0.25)",
        "gold-glow-lg": "0 0 45px rgba(214, 166, 60, 0.35)",
        "card-subtle": "0 10px 30px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 25s linear infinite",
        "spin-reverse-slow": "spin-reverse 35s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
