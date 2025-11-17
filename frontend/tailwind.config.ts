import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#376ff9',
        'custom-orange': '#ff6b35',
        'highlight-blue': '#e0f2fe',
      },
    },
  },
  plugins: [],
};
export default config;
