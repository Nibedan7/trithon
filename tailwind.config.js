// tailwind.config.js

import lineClamp from "@tailwindcss/line-clamp";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui, lineClamp],
};


