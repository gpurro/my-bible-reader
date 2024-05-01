import { Link } from "react-router-dom";
import { Book } from "../interfaces/book";

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  const bibleAbbr = "WEB";

  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <div className="card-body">
        <Link
          to={`/bible/show/${bibleAbbr}/book/${book.id}`}
          className="card-title"
        >
          {book.abbreviation}
        </Link>
        <p> {book.nameLong} </p>
      </div>
    </div>
  );
};
