import { assertNonNullable } from "@/libs/assertNonNullable";
import { StampCardFormType } from "@/schema/stampCard";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { YStack } from "tamagui";
import { Typography } from "../Typography";
export type DatePickerProps = {
  formAttributes?: string;
  label: string;
  minimumDate: Date;
  setValue: UseFormSetValue<StampCardFormType>;
  keyString: "startDate" | "endDate";
};

export const DatePicker = ({
  label,
  minimumDate,
  setValue,
  keyString,
  ...props
}: DatePickerProps) => {
  const [date, setsDate] = useState<Date>(minimumDate);

  const onsDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    assertNonNullable(selectedDate);
    const currentDate = selectedDate;
    setsDate(currentDate);
    setValue(keyString, currentDate);
  };

  return (
    <YStack>
      <Typography>
        {label}: {date.toLocaleDateString()}
      </Typography>
      <RNDateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={"date"}
        display="calendar"
        is24Hour={true}
        onChange={onsDateChange}
        minimumDate={minimumDate}
      />
    </YStack>
  );
};
