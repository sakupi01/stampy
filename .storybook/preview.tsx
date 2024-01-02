import type { Preview } from "@storybook/react";
// biome-ignore lint/nursery/noUnusedImports: <explanation>
import React from "react";
import { TamaguiProvider } from "tamagui";
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
  },
  decorators: [
    (Story) => (
      <TamaguiProvider config={config}>
        <div style={{ margin: "3em" }}>
          <Story />
        </div>
      </TamaguiProvider>
    ),
  ],
};

export default preview;
