import { assertNonNullable } from "@/libs/assertNonNullable";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import { YStack } from "tamagui";
import { Typography } from "../Typography";
export type DatePickerProps = {
  formAttributes?: string;
};

export const DatePicker = ({ ...props }: DatePickerProps) => {
  const [startDate, setStartDate] = useState<Date>(new Date()); //
  const [endDate, setEndDate] = useState<Date>(new Date());

  const onStartDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    assertNonNullable(selectedDate);
    const currentDate = selectedDate;
    setStartDate(currentDate);
  };

  const onEndDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    assertNonNullable(selectedDate);
    const currentDate = selectedDate;
    setEndDate(currentDate);
  };
  return (
    <YStack>
      <Typography>開始日: {startDate.toLocaleDateString()}</Typography>
      <RNDateTimePicker
        testID="dateTimePicker"
        value={startDate}
        mode={"date"}
        display="calendar"
        is24Hour={true}
        onChange={onStartDateChange}
        minimumDate={new Date()}
      />
      <Typography>終了日: {endDate.toLocaleDateString()}</Typography>
      <RNDateTimePicker
        testID="dateTimePicker"
        value={endDate}
        mode={"date"}
        display="calendar"
        is24Hour={true}
        onChange={onEndDateChange}
        minimumDate={startDate}
      />
    </YStack>
  );
};
