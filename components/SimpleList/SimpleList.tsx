import { AccountSettingsType } from "@/schema/accountSetting";
import { Control, Controller } from "react-hook-form";
import { FlatList } from "react-native";
import { vs } from "react-native-size-matters";
import { Input, InputProps, Label, Separator, XStack } from "tamagui";
import { Typography } from "../Typography/Typography";

type ListItemProps = {
  id: string;
  label: string;
  data: string;
  isEditable: boolean;
} & InputProps;
const Item = ({ id, label, data, isEditable, ...props }: ListItemProps) => {
  return (
    <XStack width="100%" justifyContent="space-between">
      <Label htmlFor={`${id}-${label}`}>
        <Typography
          type="ui"
          color={!isEditable ? "$text--subtle" : "$text--dark"}
        >
          {label}
        </Typography>
      </Label>
      <Input
        id={`${id}-${label}`}
        placeholder={data.toString()}
        defaultValue={data.toString()}
        editable={isEditable}
        disabled={!isEditable}
        focusable={isEditable}
        aria-disabled={!isEditable}
        autoCapitalize="none"
        backgroundColor="transparent"
        borderColor="transparent"
        borderWidth={0}
        color={!isEditable ? "$text--subtle" : "$text--dark"}
        fontSize="$ui"
        //@ts-ignore
        lineHeight="$ui"
        height="$ui"
        //@ts-ignore
        fontWeight="$medium"
        placeholderTextColor={"$text--subtle"}
        {...props}
      />
    </XStack>
  );
};

type SimpleListProps = {
  data: Array<{ id: string; label: string; data: string; formLabel?: string }>;
  control?: Control<AccountSettingsType>;
};
export const SimpleList = ({ data, control }: SimpleListProps) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        if (item.formLabel) {
          return (
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => {
                return (
                  <Item
                    id={item.id}
                    label={item.label}
                    data={item.data}
                    isEditable={true}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value as string}
                  />
                );
              }}
              name={item.formLabel as keyof AccountSettingsType}
            />
          );
        }
        return (
          <Item
            id={item.id}
            label={item.label}
            data={item.data}
            isEditable={false}
          />
        );
      }}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <Separator
          marginVertical={vs(20)}
          borderBottomColor="$stroke--light"
          borderLeftColor="$stroke--light"
          borderRightColor="$stroke--light"
          borderTopColor="$stroke--light"
          borderColor="$stroke--light"
          style={{
            color: "#E2E8F0",
          }}
        />
      )}
      style={{
        width: "100%",
      }}
    />
  );
};
