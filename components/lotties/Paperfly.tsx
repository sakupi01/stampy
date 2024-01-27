import LottieView from "lottie-react-native";

export default function AnimatedPaperFly() {
  return (
    <LottieView
      source={require("../../assets/lotties/paperfly.json")}
      style={{ width: "100%", height: "100%" }}
      autoPlay
      loop
    />
  );
}
