import { SafeAreaView, StyleSheet } from "react-native";

import { StyledTabs } from "@/components/StyledTabs";
import { useTabsState } from "@/components/StyledTabs/hooks/useTabsState";
import { Typography } from "@/components/Typography";
import AnimatedView from "@/components/lotties/LottieView";
import React, { useRef } from "react";
import { Animated, Dimensions } from "react-native";
import { s, vs } from "react-native-size-matters";
import { YStack } from "tamagui";
import {
  SignInForm,
  SignUpForm,
} from "../components/StyledTabs/utils/formsMock";

const ScreenWidth = Dimensions.get("window").width;

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
  const moveAnimation = useRef(new Animated.Value(-100)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(moveAnimation, {
        toValue: ScreenWidth,
        duration: 7000,
        useNativeDriver: true,
      }),
    ).start();
  }, [moveAnimation]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.animatedView,
          { transform: [{ translateX: moveAnimation }] },
        ]}
      >
        <AnimatedView assetUri={require("../assets/lotties/paperfly.json")} />
      </Animated.View>
      <YStack
        space={vs(10)}
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingHorizontal={s(30)}
        paddingBottom={vs(50)}
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
    position: "relative",
    width: "100%",
    height: "100%",
  },
  animatedView: {
    width: 150, // ここにViewの幅を設定
    height: 80, // ここにViewの高さを設定
    backgroundColor: "transparent", // 背景色などのスタイルを設定
  },
});
