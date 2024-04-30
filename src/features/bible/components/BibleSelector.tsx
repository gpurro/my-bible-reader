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
  const [selectedBible, setSelectedBible] = useState<string>(
    initialValue ?? ""
  );

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    setSelectedBible(selected);
    if (onSelected) onSelected(selected);
  };

  return (
    <select
      className="select select-bordered w-full max-w-xs"
      value={selectedBible}
      onChange={handleSelect}
    >
      <option disabled value="">
        {none}
      </option>
      {biblesQuery.data?.map((bible) => (
        <option key={bible.id} value={bible.abbreviation}>
          {bible.name}
        </option>
      ))}
    </select>
  );
};
