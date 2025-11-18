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
        'custom-blue': '#1a73e8',
        'custom-orange': '#ff6f61',
        'highlight-blue': '#e8f0fe',
        'light-red': '#fee2e2',
        'light-orange': '#ffedd5',
      },
    },
  },
  plugins: [],
};
export default config;
