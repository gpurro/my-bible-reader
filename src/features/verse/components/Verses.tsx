import { Link } from "react-router-dom";
import { useVersesQuery } from "../hooks/useVersesQuery";
import { Favorite } from "./Favorite";

interface VersesProps {
  bibleId: string;
  chapterId: string;
}
export const Verses = ({ bibleId, chapterId }: VersesProps) => {
  const versesQuery = useVersesQuery(bibleId, chapterId);

  return (
    <div>
      <div>
        {versesQuery.isLoading && <div>Loading...</div>}
        {versesQuery.isError && <div>Error</div>}
        {versesQuery.isSuccess && (
          <ul className="flex flex-wrap gap-2">
            {versesQuery.data?.map((verse) => (
              <li key={verse.id} className="group">
                <Link
                  to={`/bible/${bibleId}/show/book/${verse.bookId}/chapter/${verse.chapterId}/verse/${verse.id}`}
                >
                  {verse.id}
                </Link>
                <Favorite verse={verse}></Favorite>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
