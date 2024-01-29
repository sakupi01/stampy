import Providers from "@/libs/providers";
import renderer from "react-test-renderer";
import { AccountForm } from "./AccountForm";
describe("<AccountForm />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <AccountForm />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
