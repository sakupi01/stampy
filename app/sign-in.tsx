import { SafeAreaView, StyleSheet } from "react-native";

import { StyledTabs } from "@/components/StyledTabs";
import { useTabsState } from "@/components/StyledTabs/hooks/useTabsState";
import { Typography } from "@/components/Typography";
import { s, vs } from "react-native-size-matters";
import { YStack } from "tamagui";
import {
  SignInForm,
  SignUpForm,
} from "../components/StyledTabs/utils/formsMock";

export default function SignIn() {
  const {
    activeAt,
    currentTab,
    enterVariant,
    exitVariant,
    handleOnInteraction,
    intentAt,
    setCurrentTab,
  } = useTabsState();
  return (
    <SafeAreaView style={styles.container}>
      <YStack
        space={vs(10)}
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingHorizontal={s(30)}
        paddingVertical={vs(50)}
      >
        <YStack space={vs(5)}>
          <Typography type="h3">Stampyへようこそ！</Typography>
          <Typography type="ui" color="$text--subtle">
            今日からあなたと一緒にステップを踏んでいくのが楽しみです！
          </Typography>
        </YStack>

        <StyledTabs.Tabs
          value={currentTab}
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
          height={vs(350)}
        >
          <StyledTabs.List intentAt={intentAt} activeAt={activeAt}>
            <StyledTabs.Tab
              value="tab1"
              currentTab={currentTab}
              handleOnInteraction={handleOnInteraction}
            >
              <Typography type="ui">サインイン</Typography>
            </StyledTabs.Tab>
            <StyledTabs.Tab
              value="tab2"
              currentTab={currentTab}
              handleOnInteraction={handleOnInteraction}
            >
              <Typography type="ui">サインアップ</Typography>
            </StyledTabs.Tab>
          </StyledTabs.List>
          <StyledTabs.ContentAnimateWrapper
            enterVariant={exitVariant}
            exitVariant={enterVariant}
            currentTab={currentTab}
          >
            <StyledTabs.Content currentTab="tab1" key="signin">
              <SignInForm />
            </StyledTabs.Content>
            <StyledTabs.Content currentTab="tab2" key="signup">
              <SignUpForm />
            </StyledTabs.Content>
          </StyledTabs.ContentAnimateWrapper>
        </StyledTabs.Tabs>
      </YStack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
