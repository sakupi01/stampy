import { ListSkeleton } from "@/components/Skeleton/Skeleton";
import { Typography } from "@/components/Typography";
import { sleep } from "@/libs/sleep";
import { Letter } from "@/types/Letter";
import { Notification } from "@/types/Notification";
import { StyledList } from "@/ui/Lists/StyledList";
import { DATA_LETTER } from "@/ui/Lists/StyledList/fixture/mock.data";
import { useEffect, useState } from "react";

export type LetterListProps = {
  query?: string;
};

export const LetterList = ({ query }: LetterListProps) => {
  const [data, setData] = useState<Array<Notification | Letter> | undefined>(
    undefined,
  );
  useEffect(() => {
    const fetchData = async () => {
      setData(undefined);
      // const res = await fetch(`http://localhost:3000/api/cards?query=${query}`);
      // const data = await res.json();
      await sleep(1000);
      const data = [...DATA_LETTER].filter((item) =>
        item.title.includes(query ?? ""),
      );
      setData(data);
    };
    fetchData();
  }, [query]);

  if (!data) {
    return <ListSkeleton />;
  }
  if (data.length === 0) {
    return <Typography>該当するレターは見つかりませんでした</Typography>;
  }

  return <StyledList data={data} />;
};
