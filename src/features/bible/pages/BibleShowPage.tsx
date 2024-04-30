import { useLoaderData, useParams } from "react-router-dom";
import { Bible } from "../components/Bible";
import { useAppContext } from "../../../state/AppContext";
import { useEffect } from "react";

export const BibleShowPage = () => {
  const bibleId = useLoaderData() as string;
  const { bibleAbbr } = useParams();
  const { selectedBible, setSelectedBible } = useAppContext();

  useEffect(() => {
    // check if bibleAbbr is not equal to the selected bible
    if (bibleAbbr && bibleAbbr !== selectedBible) {
      setSelectedBible(bibleAbbr);
    }
  }, [bibleAbbr]);

  return <div>{bibleId && <Bible bibleId={bibleId} />}</div>;
};
