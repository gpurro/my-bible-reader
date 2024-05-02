import { useParams } from "react-router-dom";
import { Verse } from "../components/Verse";
import { useSelectedBible } from "../../bible/hooks/useSelectedBible";

export const VerseDetailsPage = () => {
  const { verseId } = useParams();
  const { bibleId } = useSelectedBible();

  return (
    <div>
      {verseId && bibleId && <Verse bibleId={bibleId} verseId={verseId} />}
    </div>
  );
};
