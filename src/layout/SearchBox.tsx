import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBox = () => {
  const [visibleSearchBox, setVisibleSearchBox] = useState(false);
  const searchBox = useRef<HTMLInputElement | null>(null);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchText("");
      setVisibleSearchBox(false);
      navigate(`/bible/7142879509583d59-01/search?q=${searchText}`);
    }
  };

  useEffect(() => {
    if (visibleSearchBox) {
      searchBox.current?.focus();
    }
  }, [visibleSearchBox]);

  return (
    <>
      {visibleSearchBox && (
        <div className="form-control visible">
          <input
            type="search"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto text-gray-500 "
            ref={searchBox}
            value={searchText}
            onChange={handleOnChange}
            onKeyPress={handleKeyPress}
          />
        </div>
      )}

      <button
        className="btn btn-ghost btn-circle"
        onClick={() => {
          setVisibleSearchBox(!visibleSearchBox);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </>
  );
};
