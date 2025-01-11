// tailwind.config.js
module.exports = {
  content: [
    "./index.html", // Pastikan file index.html di root proyek
    "./src/**/*.{js,ts,jsx,tsx}", // Semua file di dalam src, termasuk .tsx dan .ts
  ],
  theme: {
    extend: {
      fontFamily: {
        fontJakarta: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        primary: "#1E1E1E",
        secondary: "#B7B7C7",
        neutral: "#EAEAFD",
        Tertiary: "#0169b2",
      },
    },
  },
  plugins: [],
};
