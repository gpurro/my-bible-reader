interface BookProps {
  bookId: string;
}

export const Book = ({ bookId }: BookProps) => {
  return <div>Book: {bookId}</div>;
};
