import type { Preview } from "@storybook/react";
import Providers from "../libs/providers";
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
      <Providers colorScheme={"light"}>
        <div style={{ margin: "3em" }}>
          <Story />
        </div>
      </Providers>
    ),
  ],
};

export default preview;
