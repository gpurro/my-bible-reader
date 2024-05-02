import { useParams } from "react-router-dom";
import { Chapter } from "../components/Chapter";
import { useSelectedBible } from "../../bible/hooks/useSelectedBible";

export const ChapterDetailsPage = () => {
  const { chapterId } = useParams();
  const { bibleId } = useSelectedBible();

  return (
    <div>
      {chapterId && bibleId && (
        <Chapter bibleId={bibleId} chapterId={chapterId} />
      )}
    </div>
  );
};
