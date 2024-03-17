import { assertNonNullable } from "@/libs/assertNonNullable";
import LottieView, { AnimationObject } from "lottie-react-native";

export default function AnimatedView({
  assetUri,
  ...props
}: {
  assetUri: string | AnimationObject | { uri: string } | undefined;
} & Omit<LottieView["props"], "source">) {
  assertNonNullable(assetUri);
  return (
    <LottieView
      source={assetUri}
      style={{ width: "100%", height: "100%" }}
      autoPlay
      loop
      {...props}
    />
  );
}
