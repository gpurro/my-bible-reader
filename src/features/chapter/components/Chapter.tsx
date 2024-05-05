import { useChapterQuery } from "../hooks/useChapterQuery";
import { Verses } from "../../verse/components/Verses";
import { TextViewer } from "../../textViewer/components/TextViewer";

interface ChapterProps {
  bibleId: string;
  chapterId: string;
}

export const Chapter = ({ bibleId, chapterId }: ChapterProps) => {
  const chapterQuery = useChapterQuery(bibleId, chapterId);

  return (
    <div>
      <div>Chapter: {chapterQuery.data?.reference}</div>
      <br />
      <div>Verses: </div>
      <br />
      <Verses bibleId={bibleId} chapterId={chapterId} />
      <br />
      <div className="eb-container">
        {chapterQuery.data?.content && (
          <TextViewer content={chapterQuery.data?.content} />
        )}
      </div>
    </div>
  );
};
