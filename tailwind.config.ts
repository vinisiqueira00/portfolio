import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-01": "#BABABA",
        "text-02": "#000000",
        "text-03": "#FFFFFF",
        "text-04": "#333333",
        "text-05": "#aaaaaa",
        "text-06": "#999999",
        "text-07": "#f5f5f5",
        "text-08": "#555555",
        "text-09": "#777777",

        "background-01": "#EEEEEE",
        "background-02": "#000000",
        "background-03": "#ffffff",
        "background-04": "#1dc656",
        "background-05": "#c6ffd9",
        "background-06": "#ff9736",
        "background-07": "#ffe8d2",
        "background-08": "#191919",
        "background-09": "#f5f5f5",
        "background-10": "#333333",
        "background-11": "#122A18",
        "background-12": "#2C2114",
        "background-13": "#1A1A1A",
      },
      backgroundImage: {
        "background-gradient-01": "linear-gradient(to right, #FF61AD, #FF9736)",
      },
      boxShadow: {
        "shadow-01": "0 0 3rem 0 rgba(0, 0, 0, 0.1)",
        "shadow-02": "0 0 1rem 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
