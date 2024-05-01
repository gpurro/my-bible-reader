import { LoaderFunctionArgs } from "react-router-dom";
import { apiClient } from "../../../api/apiClient";
import { Book } from "../interfaces/book";
import { getBibleByAbbr } from "../../bible/services/bibleServices";
import { queryClient } from "../../../api/reactQueryClient";

export const fetchBook = async (bibleId: string = "", bookId: string) => {
  const bookResponse = await apiClient.get(`bibles/${bibleId}/books/${bookId}`);
  if (bookResponse.status != 200) {
    throw new Error(bookResponse.statusText);
  }
  return bookResponse.data.data as Book;
};

export const fetchBooks = async (bibleId: string, bookId: string = "") => {
  const books: Book[] = [];

  const booksResponse = await apiClient.get(`bibles/${bibleId}/books`);
  if (booksResponse.status != 200) {
    throw new Error(booksResponse.statusText);
  }

  booksResponse.data.data.forEach((book: Book) => {
    if (!bookId || book.id === bookId) books.push(book);
  });
  return books as Book[];
};

export const getBookByAbbr = async (bibleId: string, bookAbbr: string) => {
  const books = await queryClient.fetchQuery({
    queryKey: ["books", { bibleId, bookAbbr }],
    queryFn: () => {
      return fetchBooks(bibleId, bookAbbr);
    },
    staleTime: 1000 * 60 * 60,
  });
  return books[0];
};

export const showBookLoader = async ({ params }: LoaderFunctionArgs<any>) => {
  const bookId = params.bookId;
  const bibleAbbr = params.bibleAbbr;
  if (!bookId || !bibleAbbr) return;
  const bible = await getBibleByAbbr(bibleAbbr);
  const book = await getBookByAbbr(bible.id, bookId);
  return book.id;
};
