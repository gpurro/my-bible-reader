import { apiClient } from "../../../api/apiClient";
import { Book } from "../interfaces/book";

export const fetchBook = async (bibleId: string = "", bookId: string) => {
  const bookResponse = await apiClient.get(`bibles/${bibleId}/books/${bookId}`);
  if (bookResponse.status != 200) {
    throw new Error(bookResponse.statusText);
  }
  return bookResponse.data.data as Book;
};

export const fetchBooks = async (bibleId: string) => {
  const books: Book[] = [];

  const booksResponse = await apiClient.get(`bibles/${bibleId}/books`);
  if (booksResponse.status != 200) {
    throw new Error(booksResponse.statusText);
  }

  booksResponse.data.data.forEach((book: Book) => {
    books.push(book);
  });
  return books as Book[];
};
