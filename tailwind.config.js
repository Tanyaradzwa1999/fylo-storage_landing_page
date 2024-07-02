module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375pxpx",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        // Colors

        // Primary

        Nutmeg: "hsl(14, 45%, 36%)",
        DarkRaspberry: "hsl(332, 51%, 32%)",

        // Neutral

        PaleBlue: "hsl(243, 100%, 93%)",
        GrayishBlue: "hsl(229, 7%, 55%)",
        DarkBlue: "hsl(228, 56%, 26%)",
        VeryDarkBlue: "hsl(229, 57%, 11%)",
        PalePink: "hsl(6, 100%, 80%)",
        RedshPink: "hsl(335, 100%, 65%)",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
