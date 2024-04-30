import { useQuery } from "@tanstack/react-query";
import { fetchBible } from "../services/bibleServices";

export const useBibleQuery = (bibleId: string) => {
  const bibleQuery = useQuery({
    queryKey: ["bibles", bibleId],
    queryFn: ({ queryKey }) => {
      return fetchBible(queryKey[1]);
    },
    staleTime: 1000 * 60 * 60,
  });

  return bibleQuery;
};
