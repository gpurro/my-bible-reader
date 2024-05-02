import { useQuery } from "@tanstack/react-query";
import { fetchVerse } from "../services/verseServices";

export const useVerseQuery = (bibleId: string, verseId: string) => {
  const verseQuery = useQuery({
    queryKey: ["verses", { bibleId, verseId }],
    queryFn: () => {
      return fetchVerse(bibleId, verseId);
    },
    staleTime: 1000 * 60 * 60,
  });

  return verseQuery;
};
