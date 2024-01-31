import { ListSkeleton } from "@/components/Skeleton/Skeleton";
import { Typography } from "@/components/Typography";
import { sleep } from "@/libs/sleep";
import { Letter } from "@/types/Letter";
import { Notification } from "@/types/Notification";
import { StyledList } from "@/ui/Lists/StyledList";
import { DATA } from "@/ui/Lists/StyledList/fixture/mock.data";
import { useEffect, useState } from "react";

export type NotificationListProps = {
  query?: string;
};

export const NotificationList = ({ query }: NotificationListProps) => {
  const [data, setData] = useState<Array<Notification | Letter> | undefined>(
    undefined,
  );
  useEffect(() => {
    const fetchData = async () => {
      setData(undefined);
      // const res = await fetch(`http://localhost:3000/api/cards?query=${query}`);
      // const data = await res.json();
      await sleep(1000);
      const data = [...DATA].filter((item) => item.title.includes(query ?? ""));
      setData(data);
    };
    fetchData();
  }, [query]);

  if (!data) {
    return (
      <ListSkeleton />
      // <YStack space={20}>
      //   <ListSkeleton />
      //   <ListSkeleton />
      // </YStack>
    );
  }
  if (data.length === 0) {
    return <Typography>該当する通知は見つかりませんでした</Typography>;
  }
  return <StyledList data={data} />;
};
