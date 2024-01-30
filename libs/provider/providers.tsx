import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { ToastProvider } from "@tamagui/toast";
import { ReactNode } from "react";
import { ColorSchemeName } from "react-native";
import { Provider } from "react-redux";
import { TamaguiProvider } from "tamagui";
import config from "../../tamagui.config";
import { store } from "../AsyncStorage/store";

export default function Providers({
  children,
  colorScheme,
}: { children: ReactNode; colorScheme: ColorSchemeName }) {
  return (
    <Provider store={store}>
      <TamaguiProvider config={config}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <ToastProvider>{children}</ToastProvider>
        </ThemeProvider>
      </TamaguiProvider>
    </Provider>
  );
}
