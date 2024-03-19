import { ListSkeleton } from "@/components/Skeleton/Skeleton";
import { Typography } from "@/components/Typography";
import { useAppSelector } from "@/libs/AsyncStorage/store";
import { Notification } from "@/types/Notification";
import { StyledList } from "@/ui/Lists/StyledList";
import { useEffect, useState } from "react";

export type NotificationListProps = {
  query?: string;
};

export const NotificationList = ({ query }: NotificationListProps) => {
  const [data, setData] = useState<Array<Notification> | undefined>(undefined);

  const notifications = useAppSelector((state) => state.list.notifications);

  useEffect(() => {
    const extractedNotifications = notifications?.filter((item) =>
      item.title.includes(query ?? ""),
    );

    setData(extractedNotifications);
  }, [notifications, query]);

  if (!data) {
    return <ListSkeleton />;
  }
  if (data.length === 0) {
    return <Typography>該当する通知は見つかりませんでした</Typography>;
  }
  return <StyledList data={data} />;
};
