import Providers from "@/libs/providers";
import { StampCardFormSchema, StampCardFormType } from "@/schema/stampCard";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { Controller, useForm } from "react-hook-form";
import renderer from "react-test-renderer";
import { Typography } from "../Typography";
import { DatePicker } from "./DatePicker";
jest.useFakeTimers();
const mockDate = new Date("2024/01/18");
jest.setSystemTime(mockDate);

describe("<DatePicker />", () => {
  test("if renders", () => {
    const {
      control,
      handleSubmit,
      formState: { errors, isSubmitting, isSubmitted },
      setValue,
      watch,
    } = useForm<StampCardFormType>({
      resolver: valibotResolver(StampCardFormSchema),
    });
    const snapshot = renderer
      .create(
        <Providers colorScheme={"light"}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={() => (
              <DatePicker
                setValue={setValue}
                label="開始日"
                minimumDate={new Date()}
                keyString={"startDate"}
              />
            )}
            name="startDate"
          />
          {errors.startDate && (
            <Typography type="small" color="$text--destructive">
              😕{errors.startDate.message}
            </Typography>
          )}
        </Providers>,
      )
      .toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
