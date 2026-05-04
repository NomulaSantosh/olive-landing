/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in":    "fadeInUp 0.8s ease forwards",
        "fade-in-d1": "fadeInUp 0.8s ease 0.2s forwards",
        "fade-in-d2": "fadeInUp 0.8s ease 0.4s forwards",
        "fade-in-d3": "fadeInUp 0.8s ease 0.6s forwards",
      },
      boxShadow: {
        phone: "0 32px 80px rgba(30, 58, 8, 0.15)",
      },
    },
  },
  plugins: [],
}