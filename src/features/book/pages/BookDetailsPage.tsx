import { useParams } from "react-router-dom";
import { Book } from "../components/Book";
import { useAppContext } from "../../../state/AppContext";
import { useEffect } from "react";
import { fetchBible } from "../../bible/services/bibleServices";

export const BookDetailsPage = () => {
  const { bibleId, bookId } = useParams();
  const { selectedBible, setSelectedBible } = useAppContext();

  useEffect(() => {
    // check if bibleId is not equal to the selected bible
    if (bibleId && bibleId !== selectedBible?.id) {
      fetchBible(bibleId).then((bible) => {
        setSelectedBible(bible);
      });
    }
  }, [bibleId]);

  return <div>{bookId && <Book bookId={bookId} />}</div>;
};
