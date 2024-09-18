import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary":"#fce8d9"
      },
      maxHeight: {
        "custom": "calc(100vh - 75px)"
      },
      minHeight:{
        "custom": "calc(100vh - 75px)"
      },
      colors: {
        "primary-green": "#235C2A",
        "seconday-green": "#86B762",
      },
      backgroundImage: {
        loginBg: "url('/loginAndRegisterBG.webp')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
