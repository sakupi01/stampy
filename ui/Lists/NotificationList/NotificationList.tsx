import { ListSkeleton } from "@/components/Skeleton/Skeleton";
import { Typography } from "@/components/Typography";
import { Notification } from "@/types/Notification";
import { StyledList } from "@/ui/Lists/StyledList";
import { useEffect, useState } from "react";

export type NotificationListProps = {
  query?: string;
  notifications?: Notification[];
};

export const NotificationList = ({
  query,
  notifications,
}: NotificationListProps) => {
  console.log(notifications);

  const [data, setData] = useState<Array<Notification> | undefined>(undefined);

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
