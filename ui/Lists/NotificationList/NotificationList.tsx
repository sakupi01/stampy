import { StyledList } from "@/ui/Lists/StyledList";
import { DATA } from "@/ui/Lists/StyledList/fixture/mock.data";

export type NotificationListProps = {
  query?: string;
};

export const NotificationList = ({ query }: NotificationListProps) => {
  const data = [...DATA].filter((item) => item.title.includes(query ?? ""));

  return <StyledList data={data} />;
};
