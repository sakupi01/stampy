import { Search } from "@tamagui/lucide-icons";
import { router, useLocalSearchParams } from "expo-router";
import { s, vs } from "react-native-size-matters";
import { GetProps, Input, View, YStack } from "tamagui";
import { useDebouncedCallback } from "use-debounce";

export const SearchBar = ({
  uid,
  placeholder,
  ...props
}: { uid: string; placeholder: string } & GetProps<typeof View>) => {
  const searchParams = useLocalSearchParams<{ query?: string }>();

  const handleSearch = useDebouncedCallback((term: string) => {
    if (term) {
      router.setParams({ query: term });
    } else {
      router.setParams({ query: "" });
    }
  }, 300);

  return (
    <View
      width="100%"
      height={vs(40)}
      display="flex"
      flexShrink={0}
      justifyContent="space-between"
      {...props}
    >
      <YStack space={vs(5)} width="100%">
        <Search
          style={{
            width: vs(18),
            height: vs(18),
            position: "absolute",
            zIndex: 1,
            top: "35%",
            right: s(10),
          }}
          color="#9CA3AF"
        />
        <Input
          id={`search-${uid}`}
          style={{
            width: "100%",
            borderRadius: s(5),
            borderWidth: 1,
            borderColor: "#9CA3AF",
            padding: s(10),
            fontSize: s(14),
            color: "#9CA3AF",
            backgroundColor: "#fff",
          }}
          placeholder={placeholder}
          onChangeText={(term) => handleSearch(term)}
          defaultValue={searchParams.query}
        />
      </YStack>
    </View>
  );
};
