import { useSearchParams } from "react-router-dom";
import { useSelectedBible } from "../../bible/hooks/useSelectedBible";
import { useSearchResponseQuery } from "../hooks/useSearchResponseQuery";
import { SearchResponse } from "../components/SearchResponse";
import { useState } from "react";

const ITEMS_PER_PAGE = 10;

export const SearchPage = () => {
  const { bibleId } = useSelectedBible();
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("q") || "";

  const [offset, setOffset] = useState(0);
  const searchResponseQuery = useSearchResponseQuery(
    bibleId!,
    searchText,
    offset,
    ITEMS_PER_PAGE
  );

  // const offset = searchResponseQuery.data ? searchResponseQuery.data.offset : 0;
  const limit = searchResponseQuery.data ? searchResponseQuery.data.limit : 0;
  const total = searchResponseQuery.data ? searchResponseQuery.data.total : 0;

  const lastPage = offset + limit >= total;

  const handleNextPage = () => {
    setOffset((prevOffset) => prevOffset + ITEMS_PER_PAGE);
  };

  const handlePrevPage = () => {
    setOffset((prevOffset) => prevOffset - ITEMS_PER_PAGE);
  };

  return (
    <div>
      <h4>Search Results</h4>
      <div className=" float-right">
        <button
          className="btn mx-2"
          disabled={offset == 0}
          onClick={handlePrevPage}
        >
          Previous
        </button>
        <button
          className="btn mx-2"
          disabled={lastPage}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
      <br />
      {searchResponseQuery.isLoading ? (
        <p>Loading...</p>
      ) : searchResponseQuery.isError ? (
        <p>Error: {searchResponseQuery.error.message}</p>
      ) : (
        searchResponseQuery.data && (
          <>
            <SearchResponse data={searchResponseQuery.data} />
          </>
        )
      )}
    </div>
  );
};
