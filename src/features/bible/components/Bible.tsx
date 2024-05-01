import { Books } from "../../book/components/Books";
import { useBibleQuery } from "../hooks/useBibleQuery";

interface BibleProps {
  bibleId: string;
}
export const Bible = ({ bibleId }: BibleProps) => {
  const bibleQuery = useBibleQuery(bibleId);

  return (
    <div>
      <div>
        <h5>Bible: {bibleQuery.data?.name}</h5>
        <p>Abbr: {bibleQuery.data?.abbreviation}</p>
        <p>Lang: {bibleQuery.data?.language.name}</p>
      </div>
      <div>
        <Books bibleId={bibleId} />
      </div>
    </div>
  );
};
