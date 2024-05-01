import { useLoaderData, useParams } from "react-router-dom";
import { Book } from "../components/Book";
import { useAppContext } from "../../../state/AppContext";
import { useEffect } from "react";

export const BookDetailsPage = () => {
  const { bibleAbbr } = useParams();
  const { selectedBible, setSelectedBible } = useAppContext();
  const bookId = useLoaderData() as string;

  useEffect(() => {
    // check if bookAbbr is not equal to the selected book
    if (bibleAbbr && bibleAbbr !== selectedBible) {
      setSelectedBible(bibleAbbr);
    }
  }, [bibleAbbr]);

  return <div>{bookId && <Book bookId={bookId} />}</div>;
};
