import { Book } from "../interfaces/book";

interface BookCardProps {
  book: Book;
}

export const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="card-title">{book.abbreviation}</p>
        <p> {book.nameLong} </p>
      </div>
    </div>
  );
};
