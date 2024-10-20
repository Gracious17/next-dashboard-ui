import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-radial": "radial-gradient(circle, #1a1a1a, #000000)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, #1a1a1a, #000000)",
        kingsBlue: "linear-gradient(to right, #4BCBEB,#1BCFB4)",
        kingsRed: "linear-gradient(to right, #F3797E,#FE9496,#FF0854)",
      },
      colors: {
        lamaSky: "#C3EBFA",
        lamaSkyLight: "#EDF9FD",
        lamaPurple: "#CFCEFF",
        lamaPurpleLight: "#F1F0FF",
        lamaYellow: "#FAE27C",
        lamaYellowLight: "#FEFCEB",
      },
    },
  },
  plugins: [],
};
export default config;
