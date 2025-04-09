import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: "var(--font-bricolage-grotesque)",
        body: "var(--font-lato)",
      },
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

        // -- NEW --------------------------------------------------------------

        "dark-transparent": "rgba(0,0,0, 0)",
        "light-transparent": "rgba(255,255,255, 0)",

        "dark-primary-main": "#2A9F47",
        "light-primary-main": "#2A9F47",

        "dark-status-alert": "#FBBC05",
        "light-status-alert": "#FBBC05",

        "dark-status-alert/20": "rgba(251, 188, 5, 0.2)",
        "light-status-alert/20": "rgba(251, 188, 5, 0.2)",

        "dark-neutral-000": "#000000",
        "light-neutral-000": "#FFFFFF",

        "dark-neutral-400": "#191919",
        "light-neutral-400": "#E8EDF2",

        "dark-neutral-500": "#3A3A3A",
        "light-neutral-500": "#DDE6EF",

        "dark-neutral-600": "#555555",
        "light-neutral-600": "#9FAAB5",

        "dark-neutral-900": "#FFFFFF",
        "light-neutral-900": "#000000",

        "dark-primary-main/20": "rgba(42, 159, 71, .2)",
        "light-primary-main/20": "rgba(42, 159, 71, .2)",

        "dark-neutral-000/30": "rgba(0, 0, 0, .3)",
        "light-neutral-000/30": "rgba(255, 255, 255, .3)",

        "dark-neutral-400/80": "rgba(25, 25, 25, .8)",
        "light-neutral-400/80": "rgba(230, 237, 243, .8)",
      },
      backgroundImage: {
        "background-gradient-01": "linear-gradient(to right, #FF61AD, #FF9736)",

        // -- NEW --------------------------------------------------------------

        "dark-gradient-001":
          "linear-gradient(129deg, #171717 0%, #0F0F0F 70%, #171717 100%)",
        "light-gradient-001":
          "linear-gradient(129deg, #EEEEEE 0%, #F9F9F9 70%, #EEEEEE 100%)",

        "dark-gradient-002":
          "linear-gradient(137deg, #0D0D0D 0%, #060606 40%, #0D0D0D 70%, #060606 100%)",
        "light-gradient-002":
          "linear-gradient(137deg, #F2F2F2 0%, #FDFDFD 40%, #F2F2F2 70%, #FDFDFD 100%)",

        "dark-gradient-003":
          "linear-gradient(180deg, #0F0F0F 0%, #000000 100%)",
        "light-gradient-003":
          "linear-gradient(180deg, #F2F4F6 0%, #FFFFFF 100%)",

        "dark-gradient-004":
          "linear-gradient(76deg, #FFFFFF 0%, #E9E9E9 35%, #FFFFFF 66%, #E9E9E9 100%)",
        "light-gradient-004":
          "linear-gradient(76deg, #000000 0%, #191919 35%, #000000 66%, #191919 100%)",
      },
      boxShadow: {
        "shadow-01": "0 0 3rem 0 rgba(0, 0, 0, 0.1)",
        "shadow-02": "0 0 1rem 0 rgba(0, 0, 0, 0.1)",
      },
      height: {
        "1k": "1000px",
        "1.5k": "1500px",
        "2k": "2000px",
        "2.5k": "2500px",
      },
      borderRadius: {
        "4xl": "32px",
      },
      fontSize: {
        "4.5xl": "2.75rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
