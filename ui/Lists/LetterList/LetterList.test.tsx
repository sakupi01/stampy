import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { LetterList } from "./LetterList";
expect.addSnapshotSerializer({
  test: (val) =>
    val?.props && (val.props.clipPath || val.props.fill || val.props.name),
  print: (val, serialize, indent) =>
    `${val.type} ${Object.keys(val.props)
      .filter(
        (propName) =>
          propName !== "clipPath" && propName !== "fill" && propName !== "name",
      )
      .map((propName) => `${propName}=${serialize(val.props[propName])}`)
      .join(" ")}`,
});
describe("<LetterList />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <LetterList />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
