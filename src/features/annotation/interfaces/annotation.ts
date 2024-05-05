export interface Annotation {
  id?: string;
  type: "favorite" | "highlight";
  userId: string;
  bibleId: string;
  verseId: string;
  createdAt?: number;
  updatedAt?: number;
}
