import { useDialogContext } from "@/libs/context/Dialog/useDialogContext";
import { sleep } from "@/libs/sleep";
import React, { useState } from "react";
import { Modal, ModalProps, StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";
import { GetProps, View, XStack, YStack } from "tamagui";
import { Typography } from "../Typography/Typography";
import AnimatedView from "../lotties/LottieView";

export type DialogActionType = (fn: () => Promise<void>) => void;
type StyledAlertDialogProps = {
  children?: React.ReactNode;
  triggerButton?: (toggleModal: () => void) => React.ReactNode;
  cancelButton?: (untoggleModal: () => void) => React.ReactNode;
  actionButton?: (
    action: (action: DialogActionType) => void,
  ) => React.ReactNode;
  description?: string;
  modalProps?: ModalProps;
} & GetProps<typeof View>;
export function StyledAlertDialog({
  children,
  triggerButton,
  cancelButton,
  actionButton,
  description,
  modalProps,
  ...props
}: StyledAlertDialogProps) {
  const { isOpen, openDialog, closeDialog } = useDialogContext();
  const [animationStarted, setAnimationStarted] = useState(false);

  const toggleModal = () => {
    openDialog();
  };
  const untoggleModal = () => {
    closeDialog();
  };
  const someAction = async (action: DialogActionType) => {
    // サーバと通信する処理
    action(async () => await sleep(300));
    // アニメーションを開始
    setAnimationStarted(true);
    // 3.3秒後にアニメーションを終了
    setTimeout(() => {
      setAnimationStarted(false);
      closeDialog();
    }, 3000);
  };
  const TriggerButton = triggerButton ? triggerButton(toggleModal) : "";
  const CancelButton = cancelButton ? cancelButton(untoggleModal) : "";
  const ActionButton = actionButton ? actionButton(someAction) : "";

  return (
    <View style={styles.centeredView} zIndex="$1" position="relative">
      <Modal
        animationType="fade"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => {
          closeDialog();
        }}
        {...modalProps}
      >
        <View
          style={styles.centeredView}
          backgroundColor={"rgba(255,255,255,0.9)"}
          {...props}
        >
          <View style={styles.modalView}>
            <YStack space={s(15)} width="100%">
              <Typography type="large" whiteSpace="pre-wrap" textAlign="center">
                {description}
              </Typography>
              {animationStarted ? (
                <AnimatedView
                  assetUri={require("../../assets/lotties/particles.json")}
                  style={{
                    width: 330,
                    height: 250,
                    position: "absolute",
                    zIndex: 2,
                    top: vs(-20),
                    left: s(-5),
                  }}
                  loop={false}
                />
              ) : (
                <></>
              )}
              {children}
              <XStack space={s(30)} justifyContent="center">
                {CancelButton}
                {ActionButton}
              </XStack>
            </YStack>
          </View>
        </View>
      </Modal>
      {TriggerButton}
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: s(30),
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 2,
    borderRightColor: "rgba(3, 10, 18, 0.81)",
    borderLeftColor: "rgba(3, 10, 18, 0.81)",
    borderBlockColor: "rgba(3, 10, 18, 0.81)",
    borderStyle: "solid",
    maxWidth: s(300),
    width: "100%",
  },
});
