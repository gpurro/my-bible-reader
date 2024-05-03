import { useQuery } from "@tanstack/react-query";
import { searchInBible } from "../services/searchServices";

export const useSearchResponseQuery = (
  bibleId: string,
  searchText: string,
  offset: number,
  limit: number
) => {
  const searchResponseQuery = useQuery({
    queryKey: ["search", { bibleId, searchText, offset }],
    queryFn: () => {
      return searchInBible(bibleId, searchText, offset, limit);
    },
    staleTime: 1000 * 60 * 60,
  });

  return searchResponseQuery;
};
