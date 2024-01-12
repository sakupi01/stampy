---
to: <%= abs_path %>/<%= component_name %>.test.tsx
---
import React from "react";
import { <%= component_name %> } from "./<%= component_name %>";
import Providers from "@/libs/providers";
import renderer from "react-test-renderer";
describe("<<%= component_name %> />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <<%= component_name %> />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});