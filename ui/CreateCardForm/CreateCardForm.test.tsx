import Providers from "@/libs/providers";
import renderer from "react-test-renderer";
import { CreateCardForm } from "./CreateCardForm";
describe("<CreateCardForm />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <CreateCardForm />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
