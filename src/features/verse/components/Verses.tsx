import { Link } from "react-router-dom";
import { useVersesQuery } from "../hooks/useVersesQuery";

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
              <li key={verse.id}>
                <Link
                  to={`/bible/show/${bibleId}/book/${verse.bookId}/chapter/${verse.chapterId}/verse/${verse.id}`}
                >
                  {verse.id}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
