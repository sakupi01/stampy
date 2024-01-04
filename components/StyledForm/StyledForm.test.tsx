import { FieldValues, useForm } from "react-hook-form";
import renderer from "react-test-renderer";
import { TamaguiProvider } from "tamagui";
import config from "../../tamagui.config";
import { StyledForm } from "./StyledForm";
describe("<StyledForm />", () => {
  test("if renders", () => {
    const { handleSubmit } = useForm();
    const snapshot = renderer
      .create(
        <TamaguiProvider config={config}>
          <StyledForm
            onSubmitAction={handleSubmit((data: FieldValues) =>
              console.log(data),
            )}
          />
        </TamaguiProvider>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
