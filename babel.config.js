module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-require",
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
