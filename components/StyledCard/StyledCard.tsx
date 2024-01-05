import { MaterialBoxshadow } from "@/constants/MaterialBoxshadow";
import React from "react";
import {
  Card as DefaultCard,
  CardFooterProps,
  CardHeaderProps,
  CardProps,
  Image,
} from "tamagui";
type StyledCardProps = {
  children?: React.ReactNode;
  bordered?: boolean;
} & CardProps;
function Card({ children, bordered = true, ...props }: StyledCardProps) {
  return (
    <DefaultCard
      unstyled
      minWidth="270px" // for small mobile screens
      maxWidth="320px" // for large mobile screens
      minHeight="400px" // for small mobile screens
      maxHeight="473px" // for large mobile screens
      boxShadow={MaterialBoxshadow}
      borderRadius={6}
      borderColor={bordered ? "$stroke--dark" : "transparent"}
      borderStyle="solid"
      borderWidth={2}
      display="flex"
      flexDirection="column"
      {...props}
    >
      {children}
    </DefaultCard>
  );
}

type ThumbnailProps = {
  url: string;
} & CardHeaderProps;
function Thumbnail({ url, ...props }: ThumbnailProps) {
  return (
    <DefaultCard.Header unstyled width="100%" flex={1} padding={1} {...props}>
      <Image source={{ uri: url }} width="100%" height="100%" />
    </DefaultCard.Header>
  );
}

type StyledFooterProps = {
  children?: React.ReactNode;
} & CardFooterProps;
function StyledFooter({ children, ...props }: StyledFooterProps) {
  return (
    <DefaultCard.Footer
      unstyled
      width="100%"
      backgroundColor="$light--background"
      borderRadius={6}
      padding={17}
      gap={8}
      {...props}
    >
      {children}
    </DefaultCard.Footer>
  );
}

export const StyledCard = {
  Card: Card,
  Thumbnail: Thumbnail,
  Footer: StyledFooter,
};
