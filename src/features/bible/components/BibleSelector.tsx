import { useEffect, useState } from "react";
import { useBiblesQuery } from "../hooks/useBiblesQuery";

interface BibleSelectorProps {
  initialValue?: string | null;
  onSelected?: (bible: string) => void;
  onDataFetched?: (isFetching: boolean) => void;
}

export const BibleSelector = ({
  initialValue = null,
  onSelected,
  onDataFetched,
}: BibleSelectorProps) => {
  const biblesQuery = useBiblesQuery();
  const none = "Select a Bible";
  const [selectedBibleId, setSelectedBibleId] = useState<string>(
    initialValue ?? ""
  );

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    setSelectedBibleId(selected);
    if (onSelected) onSelected(selected);
  };

  useEffect(() => {
    if (onDataFetched) onDataFetched(biblesQuery.isFetching);
  }, [biblesQuery.isFetching]);

  return (
    <select
      className="select select-bordered w-full max-w-xs"
      value={selectedBibleId}
      onChange={handleSelect}
    >
      <option disabled value="">
        {none}
      </option>
      {biblesQuery.data?.map((bible) => (
        <option key={bible.id} value={bible.id}>
          {bible.name}
        </option>
      ))}
    </select>
  );
};
