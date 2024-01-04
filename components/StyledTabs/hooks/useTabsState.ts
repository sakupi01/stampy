import { useState } from "react";
import { TabLayout, TabsTabProps } from "tamagui";

export type TabState = {
  currentTab: string;
  /**
   * Layout of the Tab user might intend to select (hovering / focusing)
   */
  intentAt: TabLayout | null;
  /**
   * Layout of the Tab user selected
   */
  activeAt: TabLayout | null;
  /**
   * Used to get the direction of activation for animating the active indicator
   */
  prevActiveAt: TabLayout | null;
};
export const useTabsState = () => {
  const [tabState, setTabState] = useState<TabState>({
    activeAt: null,
    currentTab: "tab1",
    intentAt: null,
    prevActiveAt: null,
  });

  const setCurrentTab = (currentTab: string) =>
    setTabState({ ...tabState, currentTab });
  const setIntentIndicator = (intentAt: TabState["intentAt"]) =>
    setTabState({ ...tabState, intentAt });
  const setActiveIndicator = (activeAt: TabState["activeAt"]) =>
    setTabState({ ...tabState, prevActiveAt: tabState.activeAt, activeAt });
  const { activeAt, intentAt, prevActiveAt, currentTab } = tabState;

  /**
   * -1: from left
   *  0: n/a
   *  1: from right
   */
  const direction = (() => {
    if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {
      return 0;
    }
    return activeAt.x > prevActiveAt.x ? -1 : 1;
  })();

  const enterVariant =
    direction === 1 ? "isLeft" : direction === -1 ? "isRight" : "defaultFade";
  const exitVariant =
    direction === 1 ? "isRight" : direction === -1 ? "isLeft" : "defaultFade";

  const handleOnInteraction: TabsTabProps["onInteraction"] = (type, layout) => {
    if (type === "select") {
      setActiveIndicator(layout);
    } else {
      setIntentIndicator(layout);
    }
  };
  return {
    activeAt,
    currentTab,
    enterVariant,
    exitVariant,
    handleOnInteraction,
    intentAt,
    setCurrentTab,
  };
};
