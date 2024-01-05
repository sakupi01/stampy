import React from "react";
import { AlertDialog, AlertDialogProps, XStack, YStack } from "tamagui";

type StyledAlertDialogProps = {
  children?: React.ReactNode;
  triggerButton?: React.ReactNode;
  cancelButton?: React.ReactNode;
  actionButton?: React.ReactNode;
  description?: string;
} & AlertDialogProps;

export function StyledAlertDialog({
  children,
  triggerButton,
  cancelButton,
  actionButton,
  description,
  ...props
}: StyledAlertDialogProps) {
  return (
    <AlertDialog native>
      <AlertDialog.Trigger asChild>{triggerButton}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
          backgroundColor="$blur--light"
        />
        <AlertDialog.Content
          bordered
          elevate
          key="content"
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
          padding={30}
          backgroundColor={"$light--background"}
          borderRadius={6}
          borderBlockColor={"$stroke--dark"}
          borderStyle="solid"
          borderWidth={2}
          {...props}
        >
          <YStack space={30}>
            <AlertDialog.Description
              size="$large"
              // @ts-ignore
              lineHeight="$large"
              // @ts-ignore
              fontWeight="$bold"
              whiteSpace="pre-wrap"
              textAlign="center"
              color={"$text--dark"}
            >
              {description}
            </AlertDialog.Description>
            {children}
            <XStack space="$3" justifyContent="center">
              <AlertDialog.Cancel asChild>{cancelButton}</AlertDialog.Cancel>
              <AlertDialog.Action asChild>{actionButton}</AlertDialog.Action>
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  );
}
