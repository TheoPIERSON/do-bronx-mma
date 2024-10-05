/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        "dodgeroll-gold": "#F79F1A",
        "apple-green": "#046E1B",
        "dire-wolf": "#292727",
        "gradient-dark": "#2E2E2E", // Ajoute la couleur pour le dégradé
        "gradient-light": "#4A4A4A", // Et celle-ci pour le centre
      },
    },
    fontFamily: {
      Montserrat: "Montserrat, sans-serif",
      Roboto: "Roboto, sans-serif",
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".mask-gradient": {
          "mask-image": "linear-gradient(to bottom, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)",
          "-webkit-mask-image": "linear-gradient(to bottom, rgba(0, 0, 0, 1) 66%, rgba(0, 0, 0, 0) 100%)",
        },
      });
    },
  ],
};
