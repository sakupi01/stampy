import { Href, Link } from "expo-router";
import { Pressable as DefaultPresable } from "react-native";
type PressableProps = {
  href: Href<string>;
  children: React.ReactNode;
};
export function Pressable({ href, children }: PressableProps) {
  return (
    <Link href={href}>
      <DefaultPresable>{children}</DefaultPresable>
    </Link>
  );
}
