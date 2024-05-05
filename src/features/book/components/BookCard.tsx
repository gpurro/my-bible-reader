import { Link } from "react-router-dom";
import { Book } from "../interfaces/book";

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="card w-48 bg-base-100 shadow-xl m-4">
      <div className="card-body">
        <Link
          to={`/bible/${book.bibleId}/show/book/${book.id}`}
          className="card-title"
        >
          {book.abbreviation}
        </Link>
        <p> {book.nameLong} </p>
      </div>
    </div>
  );
};
