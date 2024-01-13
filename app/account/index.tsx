import { StyleSheet } from "react-native";

import { StyledAlertDialog } from "@/components/StyledAlertDialog/StyledAlertDialog";
import { StyledButton } from "@/components/StyledButton";
import { Text, View } from "@/components/Themed";
import { Typography } from "@/components/Typography";
import { selectWordByKey } from "@/libs/AsyncStorage/Word/state";
import { useAppSelector } from "@/libs/AsyncStorage/store";
import { StampForm } from "@/ui/StampForm/StampForm";

export default function AccountScreen() {
  const readyStampLabel = useAppSelector((state) =>
    selectWordByKey(state, "stampy.word.ready.stamp"),
  );
  const user = { name: "saku" };
  const currentDay = 5;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {/* <StyledAlertDialog
        triggerButton={<StyledButton>Trigger</StyledButton>}
        // @ts-ignore
        cancelButton={<StyledButton type="secondary">キャンセル</StyledButton>}
        // @ts-ignore
        actionButton={<StyledButton type="primary">はい</StyledButton>}
        description={`${readyStampLabel}`}
      >
        <StyledInput
          id="message"
          label="ひとことメッセージ"
          defaultValue="お疲れさま！"
        />
      </StyledAlertDialog> */}
      <StyledAlertDialog
        triggerButton={<StyledButton>Trigger</StyledButton>}
        // @ts-ignore
        cancelButton={
          <Typography type="small" underlined>
            今はやめておく
          </Typography>
        }
        description={` ${user.name}に送る${"\n"}${currentDay}日目のスタンプ`}
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
