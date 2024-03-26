module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-require",
      // "@babel/plugin-syntax-dynamic-import",
      // "@babel/plugin-transform-modules-commonjs",
      // Required for expo-router
      "expo-router/babel",
      [
        "module-resolver",
        {
          alias: {
            "@": ".",
          },
        },
      ],
    ],
  };
};
