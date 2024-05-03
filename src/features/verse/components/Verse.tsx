import { useVerseQuery } from "../hooks/useVerseQuery";
import parse from "html-react-parser";
import { Favorite } from "./Favorite";

interface VerseProps {
  bibleId: string;
  verseId: string;
}

export const Verse = ({ bibleId, verseId }: VerseProps) => {
  const verseQuery = useVerseQuery(bibleId, verseId);

  return (
    <div>
      {verseQuery.data?.id && (
        <>
          <div>
            <p className="group">
              Verse: {verseQuery.data?.reference}{" "}
              <Favorite verse={verseQuery.data} />
            </p>
          </div>
          <br />
          <div className="eb-container">
            {verseQuery.data?.content && parse(verseQuery.data?.content)}
          </div>
        </>
      )}
    </div>
  );
};
