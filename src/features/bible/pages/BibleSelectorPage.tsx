import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../state/AppContext";
import { BibleSelector } from "../components/BibleSelector";
import { fetchBible } from "../services/bibleServices";
import { useState } from "react";

export const BibleSelectorPage = () => {
  const { selectedBible, setSelectedBible } = useAppContext();
  const [isFetching, setIsFetching] = useState(false);

  const navigate = useNavigate();

  const handleSelected = (bibleId: string) => {
    fetchBible(bibleId).then((bible) => {
      setSelectedBible(bible);
    });
  };

  const handleDataFetched = (isFetching: boolean) => {
    setIsFetching(isFetching);
  };
  const handleSelect = () => {
    // navigate(-1);
    navigate(`/bible/${selectedBible?.id}/show`);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl absolute-center">
      <div className="card-body">
        <h2 className="card-title">Bible</h2>
        <p>Please, select a Bible:</p>
        <BibleSelector
          onSelected={handleSelected}
          onDataFetched={handleDataFetched}
          initialValue={selectedBible?.id}
        />
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            disabled={!selectedBible || isFetching}
            onClick={handleSelect}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};
