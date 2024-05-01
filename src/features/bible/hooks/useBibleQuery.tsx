import { useQuery } from "@tanstack/react-query";
import { fetchBible } from "../services/bibleServices";

export const useBibleQuery = (bibleId: string) => {
  const bibleQuery = useQuery({
    queryKey: ["bibles", { bibleId }],
    queryFn: () => {
      return fetchBible(bibleId);
    },
    staleTime: 1000 * 60 * 60,
  });

  return bibleQuery;
};
