import { FlatList } from "react-native";
import { vs } from "react-native-size-matters";
import { Separator, XStack } from "tamagui";
import { Typography } from "../Typography/Typography";

type ListItemProps = { label: string; data: string; isEditable: boolean };
const Item = ({ label, data, isEditable }: ListItemProps) => {
  return (
    <XStack width="100%" justifyContent="space-between">
      <Typography
        type="ui"
        color={isEditable ? "$text--subtle" : "$text--dark"}
      >
        {label}
      </Typography>
      <Typography
        type="ui"
        color={isEditable ? "$text--subtle" : "$text--dark"}
      >
        {data}
      </Typography>
    </XStack>
  );
};

type SimpleListProps = {
  data: Array<{ id: string; label: string; data: string }>;
};
export const SimpleList = ({ data }: SimpleListProps) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Item
          label={item.label}
          data={item.data}
          isEditable={
            !(item.label === "ユーザ名" || item.label === "メールアドレス")
          }
        />
      )}
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
