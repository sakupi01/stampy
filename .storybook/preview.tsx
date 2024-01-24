import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
import type { Preview } from "@storybook/react";
// biome-ignore lint/nursery/noUnusedImports: <explanation>
import React from "react";
import { Provider } from "react-redux";
import { TamaguiProvider } from "tamagui";
import { store } from "../libs/AsyncStorage/store";
import config from "../tamagui.config";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: "iphone6",
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <TamaguiProvider config={config}>
          <div style={{ margin: "3em" }}>
            <Story />
          </div>
        </TamaguiProvider>
      </Provider>
    ),
  ],
};

export default preview;
