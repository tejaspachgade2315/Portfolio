/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xxs': '500px',
      },
      colors: {
        clr: "#001b5e",
      },
    },
  },
  variants: {
    extend: {
      objectFit: ["responsive", "hover", "focus"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
});
