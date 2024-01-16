import { StampWrapper } from "@/components/StampWrapper/StampWrapper";
import { StyledAlertDialog } from "@/components/StyledAlertDialog/StyledAlertDialog";
import { StyledButton } from "@/components/StyledButton";
import { StyledInput } from "@/components/StyledInput";
import { Typography } from "@/components/Typography/Typography";
import { selectWordByKey } from "@/libs/AsyncStorage/Word/state";
import { useAppSelector } from "@/libs/AsyncStorage/store";
import { StampNode } from "@/types";
import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";
import { YStack } from "tamagui";
import { drawEdges } from "./utils/drawEdges";
import { getPositionedNode } from "./utils/positionedNode";

export type StampCardProps = {
  currentDay: number;
  stampNodes: StampNode[];
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

      {/* biome-ignore lint/style/noCommaOperator: <explanation> */}
      <Svg style={(StyleSheet.absoluteFill, { width: "100%", height: "100%" })}>
        <Path
          d={pathData}
          stroke="#E8E8E8"
          // stroke="#D9D9D9"
          // stroke="#BF6E55"
          strokeOpacity={0.8}
          strokeWidth={5}
        />
      </Svg>
      {nodesWithPosition.map((node, index) => {
        const { stamp, stampId, stamped, nthDay, message } = node;
        // stamped node
        if (stamped) {
          const uniqueId = `${stampId}-stamped-${index}`;
          return (
            <Node
              key={uniqueId}
              style={{
                position: "absolute",
                top: node.y,
                left: node.x,
              }}
            >
              <StyledAlertDialog
                triggerButton={(toggleModal) => (
                  <StyledButton
                    circular
                    // @ts-ignore
                    type="accent"
                    onPress={toggleModal}
                  >
                    <Typography>{stamp}</Typography>
                  </StyledButton>
                )}
                cancelButton={(untoggleModal) => (
                  // @ts-ignore
                  <StyledButton type="secondary" onPress={untoggleModal}>
                    <Typography>{closeMessage}</Typography>
                  </StyledButton>
                )}
                description={nthDay + givenStampMessage}
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
            </Node>
          );
        }
        // today's un-stamped node
        if (currentDay === nthDay) {
          const uniqueId = `${stampId}-currentday-${index}`;
          return (
            <Node
              key={uniqueId}
              style={{
                position: "absolute",
                top: node.y,
                left: node.x,
              }}
            >
              <StyledAlertDialog
                triggerButton={(toggleModal) => (
                  <StyledButton
                    circular
                    // @ts-ignore
                    type="primary"
                    onPress={toggleModal}
                  >
                    <Typography>{stamp}</Typography>
                  </StyledButton>
                )}
                cancelButton={(untoggleModal) => (
                  // @ts-ignore
                  <StyledButton type="secondary" onPress={untoggleModal}>
                    <Typography>{cancelMessage}</Typography>
                  </StyledButton>
                )}
                actionButton={(action) => (
                  // @ts-ignore
                  <StyledButton type="primary" onPress={action}>
                    <Typography>{yesMessage}</Typography>
                  </StyledButton>
                )}
                description={`${readyStampMessage}`}
              />
            </Node>
          );
        }

        // future stamp nodes
        const uniqueId = `${stampId}-future-${index}`;
        return (
          <Node
            key={uniqueId}
            style={{
              position: "absolute",
              top: node.y,
              left: node.x,
            }}
          >
            <StyledAlertDialog
              triggerButton={(toggleModal) => (
                <StyledButton
                  circular
                  // @ts-ignore
                  type="ghost"
                  onPress={toggleModal}
                >
                  <Typography>{stampId}</Typography>
                </StyledButton>
              )}
              cancelButton={(untoggleModal) => (
                // @ts-ignore
                <StyledButton type="secondary" onPress={untoggleModal}>
                  <Typography>{closeMessage}</Typography>
                </StyledButton>
              )}
              description={`まだスタンプをもらえません\n${
                nthDay - currentDay
              }日後にもらえます`}
            />
          </Node>
        );
      })}
    </View>
  );
};
