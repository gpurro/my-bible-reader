import { Bible } from "../components/Bible";
import { useAppContext } from "../../../state/AppContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchBible } from "../services/bibleServices";

export const BibleDetailsPage = () => {
  const { bibleId } = useParams();
  const { selectedBible, setSelectedBible } = useAppContext();

  useEffect(() => {
    // check if bibleId is not equal to the selected bible
    if (bibleId && bibleId !== selectedBible?.id) {
      fetchBible(bibleId).then((bible) => {
        setSelectedBible(bible);
      });
    }
  }, [bibleId]);

  return <div>{bibleId && <Bible bibleId={bibleId} />}</div>;
};
