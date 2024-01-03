/** @type {import('tailwindcss').Config} */

import tailwindForms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-background": "hsl(var(--brand-background) / <alpha-value>)",
        "brand-text-primary": "hsl(var(--brand-text-primary) / <alpha-value>)",
        "brand-text-secondary":
          "hsl(var(--brand-text-secondary) / <alpha-value>)",
        "brand-text-muted": "hsl(var(--brand-text-muted) / <alpha-value>)",
        "brand-white-primary":
          "hsl(var(--brand-white-primary) / <alpha-value>)",
        "brand-teal-primary": "hsl(var(--brand-teal-primary) / <alpha-value>)",
        "brand-pink-primary": "hsl(var(--brand-pink-primary) / <alpha-value>)",
        "brand-orange-primary":
          "hsl(var(--brand-orange-primary) / <alpha-value>)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [tailwindForms],
};
