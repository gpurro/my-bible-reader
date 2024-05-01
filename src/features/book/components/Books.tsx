import { useBooksQuery } from "../hooks/useBooksQuery";
import { BookCard } from "./BookCard";

interface BooksProps {
  bibleId: string;
}
export const Books = ({ bibleId }: BooksProps) => {
  const booksQuery = useBooksQuery(bibleId);

  return (
    <div>
      <div>
        {booksQuery.isLoading && <div>Loading...</div>}
        {booksQuery.isError && <div>Error</div>}
        {booksQuery.isSuccess && (
          <div className="flex flex-wrap gap-2">
            {booksQuery.data?.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
