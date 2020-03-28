const customPlugins = [
  [
    "babel-plugin-module-resolver",
    {
      root: ["./src/"],
      extensions: [".ts", ".tsx", ".js", ".jsx", ".es", ".es6", ".mjs", "json"],
      alias: {
        "@App": "./src/App",
        "@Routes": "./src/Routes",
        "@store": "./src/store",
        "@logger": "./src/logger",
        "@theme": "./src/theme",
      },
    },
  ],
];

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: customPlugins,
  };
};
