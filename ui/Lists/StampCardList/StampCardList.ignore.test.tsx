import Providers from "@/libs/provider/providers";
import renderer from "react-test-renderer";
import { StampCardList } from "./StampCardList";
expect.addSnapshotSerializer({
  test: (val) =>
    val?.props && (val.props.clipPath || val.props.fill || val.props.name),
  print: (val, serialize, indent) =>
    //@ts-ignore: <as print method lets us use unknown>
    `${val.type} ${Object.keys(val.props)
      .filter(
        (propName) =>
          propName !== "clipPath" && propName !== "fill" && propName !== "name",
      )
      //@ts-ignore: <as print method lets us use unknown>
      .map((propName) => `${propName}=${serialize(val.props[propName])}`)
      .join(" ")}`,
});
describe("<StampCardList />", () => {
  test("if renders", () => {
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <StampCardList />
        </Providers>,
      )
      .toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});
