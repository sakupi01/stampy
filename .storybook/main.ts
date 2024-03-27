import path from "path";
import type { StorybookConfig } from "@storybook/react-webpack5";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const config: StorybookConfig = {
  typescript: { reactDocgen: false },
  stories: [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../ui/**/*.mdx",
    "../ui/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-babel",
    {
      name: "@storybook/addon-react-native-web",
      // options: {
      //   modulesToTranspile: ["react-native-vector-icons"],
      //   babelPlugins: ["@babel/plugin-transform-react-jsx"],
      // },
    },
  ],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, "../"),
      ];

      config.resolve.plugins = [
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, "../tsconfig.json"),
        }),
      ];

      config.resolve.alias = {
        "react-native$": "react-native-web",
      };
      if (config.resolve.extensions) {
        config.resolve.extensions.unshift(".web.js");
      }
    }
    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../assets"],
};
export default config;
