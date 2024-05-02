import { useVerseQuery } from "../hooks/useVerseQuery";
import parse from "html-react-parser";

interface VerseProps {
  bibleId: string;
  verseId: string;
}

export const Verse = ({ bibleId, verseId }: VerseProps) => {
  const verseQuery = useVerseQuery(bibleId, verseId);

  return (
    <div>
      <div>Verse: {verseQuery.data?.id}</div>
      <br />
      <div className="eb-container">
        {verseQuery.data?.content && parse(verseQuery.data?.content)}
      </div>
    </div>
  );
};
