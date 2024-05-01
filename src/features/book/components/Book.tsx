import { Chapters } from "../../chapter/components/Chapters";
import { useBookQuery } from "../hooks/useBookQuery";

interface BookProps {
  bookId: string;
  bibleId: string;
}

export const Book = ({ bookId, bibleId }: BookProps) => {
  const bookQuery = useBookQuery(bibleId, bookId);

  return (
    <div>
      <div>Book: {bookQuery.data?.id}</div>
      <div>Chapters</div>
      <Chapters bibleId={bibleId} bookId={bookId} />
      <div>Sections</div>
    </div>
  );
};
