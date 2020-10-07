module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#c02d28",
        },
      },

      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
    },
  },
  variants: {},
  plugins: [],
};
