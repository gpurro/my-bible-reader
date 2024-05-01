import { Link } from "react-router-dom";
import { Book } from "../interfaces/book";

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <div className="card-body">
        <Link
          to={`/bible/show/${book.bibleId}/book/${book.id}`}
          className="card-title"
        >
          {book.abbreviation}
        </Link>
        <p> {book.nameLong} </p>
      </div>
    </div>
  );
};
