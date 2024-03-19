import { ListSkeleton } from "@/components/Skeleton/Skeleton";
import { Typography } from "@/components/Typography";
import { useAppSelector } from "@/libs/AsyncStorage/store";
import { Letter } from "@/types/Letter";
import { Notification } from "@/types/Notification";
import { StyledList } from "@/ui/Lists/StyledList";
import { useEffect, useState } from "react";

export type LetterListProps = {
  query?: string;
};

export const LetterList = ({ query }: LetterListProps) => {
  const [data, setData] = useState<Array<Notification | Letter> | undefined>(
    undefined,
  );
  const letters = useAppSelector((state) => state.list.letters);

  useEffect(() => {
    const extractedLetters = letters?.filter((item) =>
      item.title.includes(query ?? ""),
    );

    setData(extractedLetters);
  }, [letters, query]);

  if (!data) {
    return <ListSkeleton />;
  }
  if (data.length === 0) {
    return <Typography>該当するレターは見つかりませんでした</Typography>;
  }

  return <StyledList data={data} />;
};
