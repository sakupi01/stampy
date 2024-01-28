import LottieView, { AnimationObject } from "lottie-react-native";

export default function AnimatedView({
  assetUri,
}: { assetUri: string | AnimationObject | { uri: string } | undefined }) {
  return (
    <LottieView
      source={assetUri}
      style={{ width: "100%", height: "100%" }}
      autoPlay
      loop
    />
  );
}
