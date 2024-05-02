import { useQuery } from "@tanstack/react-query";
import { fetchVerses } from "../services/verseServices";

export const useVersesQuery = (
  bibleId: string = "",
  chapterId: string = ""
) => {
  const versesQuery = useQuery({
    queryKey: ["verses", { bibleId, chapterId }],
    queryFn: () => {
      return fetchVerses(bibleId, chapterId);
    },
    staleTime: 1000 * 60 * 60,
  });

  return versesQuery;
};
