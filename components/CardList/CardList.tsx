import React from "react";
import { FlatList } from "react-native";
import { s, vs } from "react-native-size-matters";
import { Separator, Square, XStack, YStack } from "tamagui";
import { LinearGradient } from "tamagui/linear-gradient";
import { Typography } from "../Typography/Typography";

type ListItemProps = {
  id: string;
  label: string;
  data: string;
  icon: () => React.ReactNode;
};
const Item = ({ id, label, data, icon }: ListItemProps) => {
  return (
    <XStack width="100%" justifyContent="space-between" alignItems="center">
      <XStack space={s(10)}>
        {id === "2" || id === "3" ? (
          <LinearGradient
            width={s(50)}
            height={s(50)}
            padding={s(5)}
            borderRadius={6}
            justifyContent="center"
            alignItems="center"
            colors={["#eeaecac9", "#9bbfe9ee", "#f7be439f"]}
            start={[1, 1]}
            end={[0, 0]}
          >
            {icon()}
          </LinearGradient>
        ) : (
          <Square
            backgroundColor="rgba(232, 230, 227, 0.52)"
            width={s(50)}
            height={s(50)}
            padding={s(5)}
            borderRadius={6}
          >
            {icon()}
          </Square>
        )}
        <YStack space={vs(3)} width={s(200)}>
          <Typography type="small" color={"$text--subtle"}>
            {label}
          </Typography>
          <Typography type="ui" color={"$text--subtle"}>
            {data}
          </Typography>
        </YStack>
      </XStack>
    </XStack>
  );
};

type CardListProps = {
  data: Array<{
    id: string;
    label: string;
    data: string;
    icon: () => React.ReactNode;
  }>;
};
export const CardList = ({ data }: CardListProps) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Item
          id={item.id}
          label={item.label}
          data={item.data}
          icon={item.icon}
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
