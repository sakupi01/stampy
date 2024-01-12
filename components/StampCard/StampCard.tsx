import { selectWordByKey } from "@/libs/AsyncStorage/Word/state";
import { useAppSelector } from "@/libs/AsyncStorage/store";
import { StampNode } from "@/types";
import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";
import { YStack } from "tamagui";
import { StampWrapper } from "../StampWrapper/StampWrapper";
import { StyledAlertDialog } from "../StyledAlertDialog/StyledAlertDialog";
import { StyledButton } from "../StyledButton";
import { StyledInput } from "../StyledInput/StyledInput";
import { Typography } from "../Typography/Typography";
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
      {nodesWithPosition.map((node) => {
        const { stamp, stampId, stamped, message, nthDay } = node;
        // stamped node
        if (stamped) {
          return (
            <Node
              key={stampId}
              style={{
                position: "absolute",
                top: node.y,
                left: node.x,
              }}
            >
              <StyledAlertDialog
                triggerButton={
                  <StyledButton
                    circular
                    // @ts-ignore
                    type="accent"
                  >
                    <Typography>{stamp}</Typography>
                  </StyledButton>
                }
                cancelButton={
                  // @ts-ignore
                  <StyledButton type="secondary">{closeMessage}</StyledButton>
                }
                description={nthDay + givenStampMessage}
              >
                <YStack gap={20} alignItems="center">
                  <StampWrapper stamp={stamp} />
                  <StyledInput
                    label={messageLabel}
                    defaultValue={message}
                    id={`${stampId}-hitokoto`}
                    isDisabled
                  />
                </YStack>
              </StyledAlertDialog>
            </Node>
          );
        }
        // today's un-stamped node
        if (currentDay === nthDay) {
          return (
            <Node
              key={stampId}
              style={{
                position: "absolute",
                top: node.y,
                left: node.x,
              }}
            >
              <StyledAlertDialog
                triggerButton={
                  <StyledButton
                    circular
                    // @ts-ignore
                    type="primary"
                  >
                    <Typography>{stamp}</Typography>
                  </StyledButton>
                }
                cancelButton={
                  // @ts-ignore
                  <StyledButton type="secondary">{cancelMessage}</StyledButton>
                }
                actionButton={
                  // @ts-ignore
                  <StyledButton type="primary">{yesMessage}</StyledButton>
                }
                description={`${readyStampMessage}`}
              />
            </Node>
          );
        }
        // future stamp nodes
        return (
          <Node
            key={stampId}
            style={{
              position: "absolute",
              top: node.y,
              left: node.x,
            }}
          >
            <StyledAlertDialog
              triggerButton={
                <StyledButton
                  circular
                  // @ts-ignore
                  type="ghost"
                >
                  <Typography>{stampId}</Typography>
                </StyledButton>
              }
              cancelButton={
                // @ts-ignore
                <StyledButton type="secondary">{closeMessage}</StyledButton>
              }
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
