import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../state/AppContext";
import { BibleSelector } from "../components/BibleSelector";

export const BibleSelectorPage = () => {
  const { selectedBible, setSelectedBible } = useAppContext();
  const navigate = useNavigate();

  const handleSelector = (bible: string) => {
    setSelectedBible(bible);
  };

  const handleSelect = () => {
    // navigate(-1);
    navigate(`/bible/show/${selectedBible}`);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl m-auto">
      <div className="card-body">
        <h2 className="card-title">Bible</h2>
        <p>Please, select a Bible:</p>
        <BibleSelector
          onSelected={handleSelector}
          initialValue={selectedBible}
        />
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            disabled={!selectedBible}
            onClick={handleSelect}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};
