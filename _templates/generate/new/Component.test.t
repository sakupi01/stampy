---
to: <%= abs_path %>/<%= component_name %>.test.tsx
---
import React from "react";
import { <%= component_name %> } from "./<%= component_name %>";
import { TamaguiProvider } from "tamagui";
import config from "../../tamagui.config";
import renderer from "react-test-renderer";
describe("<<%= component_name %> />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <TamaguiProvider config={config}>
          <<%= component_name %> />
        </TamaguiProvider>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});