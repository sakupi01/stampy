import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { PasswordChangeForm } from "./PasswordChangeForm";
describe("<PasswordChangeForm />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <PasswordChangeForm setPasswordFormVisible={() => {}} />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
