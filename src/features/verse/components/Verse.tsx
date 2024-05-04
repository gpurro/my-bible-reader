import { TextViewer } from "../../textViewer/components/TextViewer";
import { useVerseQuery } from "../hooks/useVerseQuery";
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
            {verseQuery.data?.content && (
              <TextViewer content={verseQuery.data?.content} />
            )}
          </div>
        </>
      )}
    </div>
  );
};
