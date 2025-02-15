/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0077FF",
        secondary: "#00AAFF",
        tertiary: "#151515",
        wood: "#b2432f",
        wood2: "#cbc5b1",
        wood3: "#5c5a4a",
        floor: "#deccaf",
        floor2: "#deb25b",
        floor3: "#b17d4e",
      },
    },
  },
  plugins: [],
};
