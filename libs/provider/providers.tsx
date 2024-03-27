import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { ToastProvider } from "@tamagui/toast";
import { ReactNode } from "react";
import { AppStateStatus, ColorSchemeName } from "react-native";
import { AppState } from "react-native";
import { Provider } from "react-redux";
import { SWRConfig } from "swr";
import { TamaguiProvider } from "tamagui";
import config from "../../tamagui.config";
import { store } from "../AsyncStorage/store";

export default function Providers({
  children,
  colorScheme,
}: { children: ReactNode; colorScheme: ColorSchemeName }) {
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
        isVisible: () => {
          return true;
        },
        initFocus(callback) {
          let appState = AppState.currentState;

          const onAppStateChange = (nextAppState: AppStateStatus) => {
            /* バックグラウンドモードまたは非アクティブモードからアクティブモードに再開する場合 */
            if (
              appState.match(/inactive|background/) &&
              nextAppState === "active"
            ) {
              callback();
            }
            appState = nextAppState;
          };

          // アプリの状態変更を監視する
          const subscription = AppState.addEventListener(
            "change",
            onAppStateChange,
          );

          return () => {
            subscription.remove();
          };
        },
      }}
    >
      <Provider store={store}>
        <TamaguiProvider config={config}>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <ToastProvider>{children}</ToastProvider>
          </ThemeProvider>
        </TamaguiProvider>
      </Provider>
    </SWRConfig>
  );
}
