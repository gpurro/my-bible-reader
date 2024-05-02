import { useQuery } from "@tanstack/react-query";
import { fetchChapters } from "../services/chapterServices";

export const useChaptersQuery = (bibleId: string = "", bookId: string = "") => {
  const chaptersQuery = useQuery({
    queryKey: ["chapters", { bibleId, bookId }],
    queryFn: () => {
      return fetchChapters(bibleId, bookId);
    },
    staleTime: 1000 * 60 * 60,
  });

  return chaptersQuery;
};
