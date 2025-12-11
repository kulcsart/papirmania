import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}", // Relume path
    ],
    presets: [require("@relume_io/relume-tailwind")], // Relume preset
    theme: {
        extend: {
            // A MI EGYEDI SZÍNEINK (Felülírjuk a Relume alapértelmezéseket)
            colors: {
                background: "#FDFBF7", // Bianca
                foreground: "#3E342F", // Taupe
                primary: {
                    DEFAULT: "#A3826C", // Sandal
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#F2F0EB", // Pampas
                    foreground: "#3E342F",
                },
                muted: "#C7B29F", // Rodeo Dust
                border: "#C7B29F",
            },
            fontFamily: {
                serif: ['var(--font-crimson-pro)'], // Crimson Pro - ensuring mapping is correct based on previous layout.tsx
                sans: ['var(--font-dm-sans)'],   // DM Sans
            },
        },
    },
    plugins: [],
};
export default config;
