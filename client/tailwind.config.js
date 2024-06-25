/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        page_center: "80%",
      },
      boxShadow: {
        baseShadow: "0 10px 20px 0 rgb(217, 217, 217)",
      },
      colors: {
        redlee: "#E0303A",
        background: "#F4F4F4",
        footer: "#57423F",
        beginner: "#614E8B",
        intermediate: "#374F77",
        advanced: "#2F4858",
      },
      fontSize: {
        banner: "clamp(3rem, 5vw, 3.75rem)",
        header: "clamp(1.8rem, 5vw, 2.25rem)",
        navFont: "clamp(1rem, 5vw, 1.125rem)",
        basefont: "clamp(1rem, 5vw, 1.25rem)",
      },
      gridTemplateColumns: {
        3.5: "span 3.5",
      },
    },
  },
  plugins: [],
};
