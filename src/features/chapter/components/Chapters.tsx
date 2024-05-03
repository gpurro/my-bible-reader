import { Link } from "react-router-dom";
import { useChaptersQuery } from "../hooks/useChaptersQuery";

interface ChaptersProps {
  bibleId: string;
  bookId: string;
}
export const Chapters = ({ bibleId, bookId }: ChaptersProps) => {
  const chaptersQuery = useChaptersQuery(bibleId, bookId);

  return (
    <div>
      <div>
        {chaptersQuery.isLoading && <div>Loading...</div>}
        {chaptersQuery.isError && <div>Error</div>}
        {chaptersQuery.isSuccess && (
          <ul className="flex flex-wrap gap-2">
            {chaptersQuery.data?.map((chapter) => (
              <li key={chapter.id}>
                <Link
                  to={`/bible/${bibleId}/show/book/${chapter.bookId}/chapter/${chapter.id}`}
                >
                  {chapter.number}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
