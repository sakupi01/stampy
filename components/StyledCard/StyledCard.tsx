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
  isBouncy?: boolean;
} & CardProps;

function Card({
  children,
  bordered = true,
  isBouncy = true,
  ...props
}: StyledCardProps) {
  return (
    <DefaultCard
      unstyled
      minWidth={270} // for small mobile screens
      maxWidth={320} // for large mobile screens
      minHeight={250} // for small mobile screens
      maxHeight={300} // for large mobile screens
      borderRadius={6}
      borderColor={bordered ? "$stroke--dark" : "transparent"}
      borderStyle="solid"
      borderWidth={2}
      display="flex"
      flexDirection="column"
      overflow="hidden"
      animation={isBouncy ? "bouncy" : null} // linkになると先に遷移してしまうので、bouncyがあんまりわかんない
      scale={isBouncy ? 0.9 : 1}
      hoverStyle={isBouncy ? { scale: 0.925 } : {}}
      pressStyle={isBouncy ? { scale: 0.925 } : {}}
      {...props}
    >
      {children}
    </DefaultCard>
  );
}

type ThumbnailProps = {
  url?: string;
  children?: React.ReactNode;
} & CardHeaderProps;
function Thumbnail({ url, children, ...props }: ThumbnailProps) {
  return (
    <DefaultCard.Header unstyled width="100%" flex={1} padding={1} {...props}>
      {children ? (
        children
      ) : (
        <Image source={{ uri: url }} width="100%" height="100%" />
      )}
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
      borderBottomLeftRadius={6}
      borderBottomRightRadius={6}
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
