import { ListSkeleton } from "@/components/Skeleton/Skeleton";
import { Typography } from "@/components/Typography";
import { Letter } from "@/types/Letter";
import { Notification } from "@/types/Notification";
import { StyledList } from "@/ui/Lists/StyledList";
import { useEffect, useState } from "react";

export type LetterListProps = {
  query?: string;
  letters?: Letter[];
};

export const LetterList = ({ query, letters }: LetterListProps) => {
  const [data, setData] = useState<Array<Notification | Letter> | undefined>(
    undefined,
  );

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
