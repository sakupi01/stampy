import { StyleSheet, View } from "react-native";

import { StyledAlertDialog } from "@/components/StyledAlertDialog/StyledAlertDialog";
import { StyledButton } from "@/components/StyledButton";
import { Typography } from "@/components/Typography";
import { selectWordByKey } from "@/libs/AsyncStorage/Word/state";
import { useAppSelector } from "@/libs/AsyncStorage/store";
import { StampForm } from "@/ui/StampForm/StampForm";

export default function AccountScreen() {
  const readyStampLabel = useAppSelector((state) =>
    selectWordByKey(state, "stampy.word.ready.stamp"),
  );
  const user = {
    id: "1",
    username: "username",
    email: "email",
    avatarUrl:
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80",
  };
  const currentDay = 5;
  return (
    <View style={styles.container}>
      <Typography style={styles.title}>Tab Two</Typography>
      <View style={styles.separator} />
      <StyledAlertDialog
        triggerButton={(toggleModal) => (
          <StyledButton onPress={toggleModal}>
            <Typography>Trigger</Typography>
          </StyledButton>
        )}
        cancelButton={(untoggleModal) => (
          <Typography type="small" underlined onPress={untoggleModal}>
            今はやめておく
          </Typography>
        )}
        description={`${user.username}に送る${"\n"}${currentDay}日目のスタンプ`}
      >
        <StampForm user={user} currentDay={currentDay} />
      </StyledAlertDialog>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
