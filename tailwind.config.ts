import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#FFFFFF",
                primary: "#EC662B",
                fontColor: "#282828",
                tab: "#E2E2E2",
            },
            fontFamily: {
                sans: ["var(--font-karla)", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
