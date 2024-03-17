import Providers from "@/libs/provider/providers";
import {
  AccountSettingsSchema,
  AccountSettingsType,
} from "@/schema/accountSetting";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form";
import renderer from "react-test-renderer";
import { mockCardListData } from "../CardList/fixture/mock.data";
import { SimpleList } from "./SimpleList";
describe("<SimpleList />", () => {
  test("if renders", () => {
    const { control } = useForm<AccountSettingsType>({
      resolver: valibotResolver(AccountSettingsSchema),
    });
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <SimpleList data={mockCardListData} control={control} />
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
