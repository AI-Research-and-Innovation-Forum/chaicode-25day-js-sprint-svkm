/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        baseBg: "#111827",
        cardBg: "#1F2937",
        textMain: "#E5E7EB",
        correct: "#10B981",
        wrong: "#EF4444",
        accent: "#8B5CF6",
      },
      fontFamily: {
        display: ["Bricolage Grotesque", "ui-sans-serif", "sans-serif"],
        body: ["Plus Jakarta Sans", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        paper:
          "0 20px 40px rgba(0, 0, 0, 0.35), 0 2px 0 rgba(255, 255, 255, 0.03) inset",
      },
    },
  },
  plugins: [],
};
