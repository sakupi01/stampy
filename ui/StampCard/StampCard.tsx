import { StampWrapper } from "@/components/StampWrapper/StampWrapper";
import {
  DialogActionType,
  StyledAlertDialog,
} from "@/components/StyledAlertDialog/StyledAlertDialog";
import { StyledButton } from "@/components/StyledButton";
import { StyledInput } from "@/components/StyledInput";
import { Typography } from "@/components/Typography/Typography";
import { selectWordByKey } from "@/libs/AsyncStorage/Word/state";
import { useAppSelector } from "@/libs/AsyncStorage/store";
import DialogProvider from "@/libs/provider/dialog";
import { Repository } from "@/repository/api";
import { StampNode } from "@/types";
import { Link } from "expo-router";
import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { s } from "react-native-size-matters";
import Svg, { Path } from "react-native-svg";
import { YStack } from "tamagui";
import { drawEdges } from "./utils/drawEdges";
import { getPositionedNode } from "./utils/positionedNode";

export type StampCardProps = {
  currentDay: number;
  stampNodes: StampNode[];
  letterId?: string;
  fixedHeight: number;
  fixedWidth: number;
  isEditable?: boolean;
};

const Node = ({
  children,
  style,
}: { children: React.ReactNode; style: StyleProp<ViewStyle> }) => {
  return <View style={style}>{children}</View>;
};

export const StampCard = ({
  currentDay,
  stampNodes,
  letterId,
  fixedHeight,
  fixedWidth,
  isEditable = false,
}: StampCardProps) => {
  const yesMessage = useAppSelector((state) =>
    selectWordByKey(state, "stampy.word.ok"),
  );
  const cancelMessage = useAppSelector((state) =>
    selectWordByKey(state, "stampy.word.cancel"),
  );
  const readyStampMessage = useAppSelector((state) =>
    selectWordByKey(state, "stampy.word.ready.stamp"),
  );
  const givenStampMessage = useAppSelector((state) =>
    selectWordByKey(state, "stampy.word.given.stamp"),
  );
  const closeMessage = useAppSelector((state) =>
    selectWordByKey(state, "stampy.word.close"),
  );
  const messageLabel = useAppSelector((state) =>
    selectWordByKey(state, "stampy.word.message.label"),
  );
  const columns = fixedWidth / 2.6;
  const rows = fixedHeight / (stampNodes.length / 2.6);
  const nodesWithPosition = getPositionedNode(stampNodes, 3, rows, columns);
  const pathData = drawEdges(nodesWithPosition);

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: s(10),
      }}
    >
      <View
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        {!isEditable && (
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              height: "110%",
              width: "110%",
            }}
          />
        )}

        <Svg
          // biome-ignore lint/style/noCommaOperator: <explanation>
          style={(StyleSheet.absoluteFill, { width: "100%", height: "100%" })}
        >
          <Path
            d={pathData}
            stroke="#E8E8E8"
            strokeOpacity={0.8}
            strokeWidth={5}
          />
        </Svg>
        {nodesWithPosition.map((node, index) => {
          const isLastDay = node.nthday === stampNodes.length;
          const { stamp, id, nthday, stamped, message } = node;

          // stamped node
          if (stamped) {
            const uniqueId = `${id}-stamped-${index}`;
            if (isLastDay) {
              return (
                <Node
                  key={uniqueId}
                  style={{
                    position: "absolute",
                    top: node.y,
                    left: node.x,
                  }}
                >
                  <Link
                    // @ts-ignore
                    href={{
                      pathname: "/letter/[id]",
                      params: {
                        id: letterId,
                      },
                    }}
                    asChild
                  >
                    <StyledButton
                      circular
                      // @ts-ignore
                      type="accent"
                    >
                      <Typography>{stamp}</Typography>
                    </StyledButton>
                  </Link>
                </Node>
              );
            }
            return (
              <Node
                key={uniqueId}
                style={{
                  position: "absolute",
                  top: node.y,
                  left: node.x,
                }}
              >
                <DialogProvider>
                  <StyledAlertDialog
                    triggerButton={(toggleModal: () => void) => (
                      <StyledButton
                        circular
                        // @ts-ignore
                        type="accent"
                        onPress={toggleModal}
                      >
                        <Typography>{stamp}</Typography>
                      </StyledButton>
                    )}
                    cancelButton={(untoggleModal: () => void) => (
                      // @ts-ignore
                      <StyledButton type="secondary" onPress={untoggleModal}>
                        <Typography>{closeMessage}</Typography>
                      </StyledButton>
                    )}
                    description={nthday + givenStampMessage}
                  >
                    <YStack gap={20} alignItems="center">
                      <StampWrapper stamp={stamp} />
                      <StyledInput
                        label={messageLabel}
                        defaultValue={message}
                        id={uniqueId}
                        isDisabled
                      />
                    </YStack>
                  </StyledAlertDialog>
                </DialogProvider>
              </Node>
            );
          }
          if (isLastDay) {
            const uniqueId = `${id}-lastday-${index}`;
            return (
              <Node
                key={uniqueId}
                style={{
                  position: "absolute",
                  top: node.y,
                  left: node.x,
                }}
              >
                <DialogProvider>
                  <StyledAlertDialog
                    triggerButton={(toggleModal: () => void) => (
                      <StyledButton
                        circular
                        // @ts-ignore
                        type="primary"
                        onPress={toggleModal}
                      >
                        <Typography>{stamp}</Typography>
                      </StyledButton>
                    )}
                    cancelButton={(untoggleModal: () => void) => (
                      // @ts-ignore
                      <StyledButton type="secondary" onPress={untoggleModal}>
                        <Typography>{cancelMessage}</Typography>
                      </StyledButton>
                    )}
                    actionButton={(action: DialogActionType) => {
                      return (
                        <StyledButton
                          type="primary"
                          onPress={() =>
                            action(async () => {
                              const repository = new Repository();
                              await repository.post(
                                "/notice",
                                JSON.stringify({
                                  stampId: id,
                                }),
                              );
                            })
                          }
                        >
                          <Typography>{yesMessage}</Typography>
                        </StyledButton>
                      );
                    }}
                    description={"最終日のタスクを完了しましたか？"}
                  />
                </DialogProvider>
              </Node>
            );
          }
          // nth's un-stamped node
          if (currentDay >= nthday) {
            const uniqueId = `${id}-nthday-${index}`;
            return (
              <Node
                key={uniqueId}
                style={{
                  position: "absolute",
                  top: node.y,
                  left: node.x,
                }}
              >
                <DialogProvider>
                  <StyledAlertDialog
                    triggerButton={(toggleModal: () => void) => (
                      <StyledButton
                        circular
                        // @ts-ignore
                        type="primary"
                        onPress={toggleModal}
                      >
                        <Typography>{stamp}</Typography>
                      </StyledButton>
                    )}
                    cancelButton={(untoggleModal: () => void) => (
                      // @ts-ignore
                      <StyledButton type="secondary" onPress={untoggleModal}>
                        <Typography>{cancelMessage}</Typography>
                      </StyledButton>
                    )}
                    actionButton={(action: DialogActionType) => {
                      return (
                        <StyledButton
                          type="primary"
                          onPress={() =>
                            action(async () => {
                              const repository = new Repository();
                              await repository.post(
                                "/notice",
                                JSON.stringify({
                                  stampId: id,
                                }),
                              );
                            })
                          }
                        >
                          <Typography>{yesMessage}</Typography>
                        </StyledButton>
                      );
                    }}
                    description={`${nthday}日目の${readyStampMessage}`}
                  />
                </DialogProvider>
              </Node>
            );
          }

          // future stamp nodes
          const uniqueId = `${id}-future-${index}`;
          return (
            <Node
              key={uniqueId}
              style={{
                position: "absolute",
                top: node.y,
                left: node.x,
              }}
            >
              <DialogProvider>
                <StyledAlertDialog
                  triggerButton={(toggleModal: () => void) => (
                    <StyledButton
                      circular
                      // @ts-ignore
                      type="ghost"
                      onPress={toggleModal}
                    >
                      <Typography>{nthday}</Typography>
                    </StyledButton>
                  )}
                  cancelButton={(untoggleModal: () => void) => (
                    // @ts-ignore
                    <StyledButton type="secondary" onPress={untoggleModal}>
                      <Typography>{closeMessage}</Typography>
                    </StyledButton>
                  )}
                  description={`まだスタンプをもらえません\n${
                    nthday - currentDay
                  }日後にもらえます`}
                />
              </DialogProvider>
            </Node>
          );
        })}
      </View>
    </View>
  );
};
