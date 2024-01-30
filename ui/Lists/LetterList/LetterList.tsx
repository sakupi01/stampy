import { StyledList } from "@/ui/Lists/StyledList";
import { DATA_LETTER } from "@/ui/Lists/StyledList/fixture/mock.data";

export type LetterListProps = {
  query?: string;
};

export const LetterList = ({ query }: LetterListProps) => {
  console.log(query);
  const data = [...DATA_LETTER].filter((item) =>
    item.title.includes(query ?? ""),
  );

  return <StyledList data={data} />;
};
