import { Typography } from "@/components/Typography";
import { CreateCardForm } from "@/ui/CreateCardForm";
import { Toast, ToastViewport, useToastState } from "@tamagui/toast";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";

export default function CreateCardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <CurrentToast />
      <ScrollView style={styles.scrollView}>
        <CreateCardForm />
      </ScrollView>
      <ToastViewport
        width="100%"
        height="100%"
        alignItems="center"
        flexDirection="column"
        name="create-card-vp"
      />
    </SafeAreaView>
  );
}

const CurrentToast = () => {
  const currentToast = useToastState();

  if (!currentToast || currentToast.isHandledNatively) return null;

  return (
    <Toast
      unstyled
      key={`create-card-${currentToast.id}`}
      duration={currentToast.duration}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      y={0}
      opacity={1}
      scale={1}
      animation="bouncy"
      viewportName="create-card-vp"
      borderRadius={50}
      backgroundColor="rgb(232, 230, 227)"
      padding={s(15)}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Toast.Title>
        <Typography type="medium" color="$text--subtle">
          {currentToast.title}
        </Typography>
      </Toast.Title>
    </Toast>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  scrollView: {
    width: "100%",
    height: "100%",
    paddingVertical: vs(50),
    paddingHorizontal: s(30),
    backgroundColor: "#fff",
  },
});
