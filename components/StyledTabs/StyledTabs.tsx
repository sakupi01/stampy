import { MaterialBoxshadow } from "@/constants/MaterialBoxshadow";
import { s, vs } from "react-native-size-matters";
import {
  AnimatePresence,
  StackProps,
  Tabs as DefaultTabs,
  TabsListProps as DefaultTabsListProps,
  TabsProps as DefaultTabsProps,
  TabsTabProps,
  YStack,
  styled,
} from "tamagui";
import { TabState } from "./hooks/useTabsState";

type TabsProps = {
  children?: React.ReactNode;
  setCurrentTab: (currentTab: string) => void;
  currentTab: string;
} & DefaultTabsProps;
const Tabs = ({ children, setCurrentTab, currentTab, ...props }: TabsProps) => {
  return (
    <DefaultTabs
      value={currentTab}
      defaultValue="tab1"
      onValueChange={setCurrentTab}
      orientation="horizontal"
      height={vs(150)}
      space={s(6)}
      flexDirection="column"
      activationMode="manual"
      backgroundColor="transparent"
      borderRadius="$4"
      position="relative"
      {...props}
    >
      {children}
    </DefaultTabs>
  );
};

type ListProps = {
  children?: React.ReactNode;
  intentAt?: TabState["intentAt"];
  activeAt?: TabState["activeAt"];
} & DefaultTabsListProps;
const List = ({ children, intentAt, activeAt }: ListProps) => {
  return (
    <YStack>
      <AnimatePresence>
        {intentAt && (
          <TabsRovingIndicator
            borderRadius="$4"
            width={intentAt.width}
            height={intentAt.height}
            x={intentAt.x}
            y={intentAt.y}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeAt && (
          <TabsRovingIndicator
            borderRadius="$4"
            theme="active"
            width={activeAt.width}
            height={activeAt.height}
            x={activeAt.x}
            y={activeAt.y}
          />
        )}
      </AnimatePresence>
      <DefaultTabs.List
        disablePassBorderRadius
        loop={false}
        aria-label="Manage your account"
        padding={s(5)}
        borderRadius={6}
        borderWidth={2}
        borderStyle="solid"
        borderColor="$stroke--dark"
        backgroundColor="$light--background"
        /* material */
        boxShadow={MaterialBoxshadow}
      >
        {children}
      </DefaultTabs.List>
    </YStack>
  );
};

const StyledTab = styled(DefaultTabs.Tab, {
  value: "default",
  flex: 1,
  paddingVertical: vs(6),
  paddingHorizontal: s(12),
  alignItems: "center",
  gap: "10px",
  hoverStyle: {
    backgroundColor: "$secondary--background",
    borderRadius: 6,
  },
  focusStyle: {
    backgroundColor: "$secondary--click",
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "$stroke--dark",
  },
});
type TabProps = {
  children?: React.ReactNode;
  value: string;
  currentTab: string;
  handleOnInteraction: TabsTabProps["onInteraction"];
} & TabsTabProps;
const Tab = ({
  children,
  value,
  currentTab,
  handleOnInteraction,
  ...props
}: TabProps) => {
  return (
    <StyledTab
      value={value}
      backgroundColor={
        currentTab === value ? "$secondary--click" : "transparent"
      }
      borderRadius={currentTab === value ? 6 : 0}
      borderWidth={currentTab === value ? 1 : 0}
      borderStyle={currentTab === value ? "dashed" : "unset"}
      borderColor={currentTab === value ? "$stroke--dark" : "transparent"}
      onInteraction={handleOnInteraction}
      pressStyle={{
        backgroundColor: "$secondary--click",
        borderRadius: 6,
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "$stroke--dark",
      }}
      {...props}
    >
      {children}
    </StyledTab>
  );
};

type ContentProps = {
  children?: React.ReactNode;
  currentTab: string;
};
const Content = ({ children, currentTab }: ContentProps) => {
  return (
    <DefaultTabs.Content
      backgroundColor="transparent"
      flex={1}
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="flex-start"
      value={currentTab}
    >
      {children}
    </DefaultTabs.Content>
  );
};
type ContentAnimateWrapperProps = {
  children?: React.ReactNode;
  enterVariant?: string;
  exitVariant?: string;
  currentTab: string;
};
export const ContentAnimateWrapper = ({
  children,
  currentTab,
}: ContentAnimateWrapperProps) => {
  return (
    <AnimatePresence
      exitBeforeEnter
      enterVariant={currentTab === "tab1" ? "isLeft" : "isRight"}
      exitVariant={currentTab === "tab2" ? "isLeft" : "isRight"}
    >
      <AnimatedYStack
        height="100%"
        justifyContent="center"
        alignItems="center"
        key={currentTab}
        animation="100ms"
        x={0}
        opacity={1}
      >
        {children}
      </AnimatedYStack>
    </AnimatePresence>
  );
};

export const StyledTabs = {
  Tabs,
  Tab,
  List,
  Content,
  ContentAnimateWrapper,
};
const TabsRovingIndicator = ({
  active,
  ...props
}: { active?: boolean } & StackProps) => {
  return (
    <YStack
      backgroundColor="$light--background"
      opacity={0.7}
      animation="slow"
      enterStyle={{
        opacity: 0,
      }}
      exitStyle={{
        opacity: 0,
      }}
      {...(active && {
        backgroundColor: "$secondary--click",
        opacity: 0.6,
      })}
      {...props}
    />
  );
};

const AnimatedYStack = styled(YStack, {
  variants: {
    isLeft: { true: { x: -25, opacity: 0 } },
    isRight: { true: { x: 25, opacity: 0 } },
    defaultFade: { true: { opacity: 0 } },
  } as const,
});
