import { useState } from "react";
import { useBibles } from "../hooks/useBibles";

interface BibleSelectorProps {
  initialValue?: string | null;
  onSelected?: (bible: string) => void;
}

export const BibleSelector = ({
  initialValue = null,
  onSelected,
}: BibleSelectorProps) => {
  const bibles = useBibles();
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
      {bibles.data?.map((bible) => (
        <option key={bible.id} value={bible.abbreviation}>
          {bible.name}
        </option>
      ))}
    </select>
  );
};
