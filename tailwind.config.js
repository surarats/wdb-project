/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {    
    fontFamily: {
      sans: ['"poppins"'],
    },
    extend: {
      colors: {
        "primary-700": "#C1CD00",
        "secondary-s": "#222222",
        "secondary-700": "#626262",
        "danger": "#FF000D",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"
    darkTheme: "light", // name of one of the included themes for dark mode
  },
};
