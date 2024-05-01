import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../services/bookServices";

export const useBooksQuery = (bibleId: string = "") => {
  const booksQuery = useQuery({
    queryKey: ["books"],
    queryFn: () => {
      return fetchBooks(bibleId);
    },
    staleTime: 1000 * 60 * 60,
  });

  return booksQuery;
};
