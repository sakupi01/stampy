import React from "react";
import ContentLoader, { Circle, Rect } from "react-content-loader/native";
import { s, vs } from "react-native-size-matters";

type ContentLoaderProps = React.ComponentProps<typeof ContentLoader>;
export const CardSkeleton = (props: ContentLoaderProps) => (
  <ContentLoader
    speed={0.5}
    width={s(300)}
    height={vs(300)}
    viewBox={`0 0 ${s(300)} ${vs(300)}`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Rect x="0" y="0" rx="2" ry="2" width={s(300)} height="300" />
  </ContentLoader>
);

export const OneCardSkeleton = (props: ContentLoaderProps) => (
  <ContentLoader
    speed={0.5}
    width={s(300)}
    height={vs(600)}
    viewBox={`0 0 ${s(300)} ${vs(600)}`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Rect x="0" y="0" rx="2" ry="2" width={s(300)} height="600" />
  </ContentLoader>
);

export const AvatarSkeleton = (props: ContentLoaderProps) => (
  <ContentLoader
    speed={0.5}
    width={200}
    height={200}
    viewBox={"0 0 200 200"}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Circle cx="0" cy="0" r="200" />
  </ContentLoader>
);

export const ListSkeleton = (props: ContentLoaderProps) => (
  <ContentLoader
    speed={0.5}
    width="100%"
    height={vs(400)}
    viewBox={`0 0 ${s(300)} ${vs(400)}`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Rect x="0" y="30" rx="2" ry="2" width="100%" height="10" />
    <Rect x="0" y="60" rx="2" ry="2" width="100%" height="10" />
    <Rect x="0" y="90" rx="2" ry="2" width="100%" height="10" />

    <Rect x="0" y="150" rx="2" ry="2" width="100%" height="10" />
    <Rect x="0" y="180" rx="2" ry="2" width="100%" height="10" />
    <Rect x="0" y="210" rx="2" ry="2" width="100%" height="10" />

    <Rect x="0" y="270" rx="2" ry="2" width="100%" height="10" />
    <Rect x="0" y="300" rx="2" ry="2" width="100%" height="10" />
    <Rect x="0" y="330" rx="2" ry="2" width="100%" height="10" />
  </ContentLoader>
);
