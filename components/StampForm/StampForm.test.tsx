import Providers from "@/libs/providers";
import renderer from "react-test-renderer";
import { StampForm } from "./StampForm";
describe("<StampForm />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <StampForm />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
