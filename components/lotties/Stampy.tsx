import LottieView from "lottie-react-native";

export default function AnimatedStampy() {
  return (
    <LottieView
      source={require("../../assets/lotties/stampy.json")}
      style={{ width: "100%", height: "100%" }}
      autoPlay
      loop
    />
  );
}
