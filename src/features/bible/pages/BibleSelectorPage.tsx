import { useAppContext } from "../../../state/AppContext";
import { BibleSelector } from "../components/BibleSelector";

export const BibleSelectorPage = () => {
  const { selectedBible, setSelectedBible } = useAppContext();

  const handleSelector = (bible: string) => {
    setSelectedBible(bible);
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
          <button className="btn btn-primary" disabled={!selectedBible}>
            Select
          </button>
        </div>
      </div>
    </div>
  );
};
