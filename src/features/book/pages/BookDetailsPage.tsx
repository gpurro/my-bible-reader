import { useParams } from "react-router-dom";
import { Book } from "../components/Book";
import { useSelectedBible } from "../hooks/useSelectedBible";

export const BookDetailsPage = () => {
  const { bookId } = useParams();
  const { bibleId } = useSelectedBible();

  return (
    <div>{bookId && bibleId && <Book bibleId={bibleId} bookId={bookId} />}</div>
  );
};
