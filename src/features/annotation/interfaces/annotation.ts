export interface Annotation {
  id: string;
  type: "favorite" | "highlight";
  userId: string;
  bibleId: string;
  bookId: string;
  chapterId: string;
  verseId: string;
  createdAt?: number;
  updatedAt?: number;
}
