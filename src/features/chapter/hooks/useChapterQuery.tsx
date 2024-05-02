import { useQuery } from "@tanstack/react-query";
import { fetchChapter } from "../services/chapterServices";

export const useChapterQuery = (bibleId: string, chapterId: string) => {
  const chapterQuery = useQuery({
    queryKey: ["chapters", { bibleId, chapterId }],
    queryFn: () => {
      return fetchChapter(bibleId, chapterId);
    },
    staleTime: 1000 * 60 * 60,
  });

  return chapterQuery;
};
