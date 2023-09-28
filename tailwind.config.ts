import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#27272B",
        "dark-secondary": "#2C2C31",
        "dark-tertiary": "#36363A",
      },
      aspectRatio: {
        card: "1 / 1.3",
      },
      gridTemplateColumns: {
        card: "repeat(auto-fill, minmax(500px, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
