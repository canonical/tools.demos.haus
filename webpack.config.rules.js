module.exports = [
  {
    test: /\.m?js$/,
    exclude: /(node_modules)/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  },
  {
    test: require.resolve(
      __dirname + "/static/js/src/generate-banner-canvas.js"
    ),
    loader: "expose-loader",
    options: {
      exposes: "generateBannerCanvas",
    },
  },
];
