import { useState } from "react";
import { useBiblesQuery } from "../hooks/useBiblesQuery";

interface BibleSelectorProps {
  initialValue?: string | null;
  onSelected?: (bible: string) => void;
}

export const BibleSelector = ({
  initialValue = null,
  onSelected,
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
