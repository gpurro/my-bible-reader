import { useQuery } from "@tanstack/react-query";
import { fetchBibles } from "../services/bibleServices";

export const useBiblesQuery = () => {
  const biblesQuery = useQuery({
    queryKey: ["bibles"],
    queryFn: () => {
      return fetchBibles();
    },
    staleTime: 1000 * 60 * 60,
  });

  return biblesQuery;
};
