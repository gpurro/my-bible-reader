import { useBibleQuery } from "../hooks/useBibleQuery";

interface BibleProps {
  bibleId: string;
}
export const Bible = ({ bibleId }: BibleProps) => {
  const bibleQuery = useBibleQuery(bibleId);

  return <div>Bible: {bibleQuery.data?.name} </div>;
};
