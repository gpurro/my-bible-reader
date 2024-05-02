import { useQuery } from "@tanstack/react-query";
import { fetchBook } from "../services/bookServices";

export const useBookQuery = (bibleId: string, bookId: string) => {
  const bookQuery = useQuery({
    queryKey: ["books", { bibleId, bookId }],
    queryFn: () => {
      return fetchBook(bibleId, bookId);
    },
    staleTime: 1000 * 60 * 60,
  });

  return bookQuery;
};
