import { Annotation } from "../interfaces/annotation";
import {
  addAnnotation,
  getAnnotationsByBibleAndVerseId,
  removeAnnotation,
} from "./annotationServices";

export const addFavoriteAnnotation = (bibleId: string, verseId: string) => {
  const newAnnotation: Annotation = {
    type: "favorite",
    userId: "1",
    bibleId: bibleId,
    verseId: verseId,
  };
  addAnnotation(newAnnotation);
};

export const removeFavoriteAnnotation = (bibleId: string, verseId: string) => {
  const userId = "1";
  const favorites = getAnnotationsByBibleAndVerseId(userId, bibleId, verseId);
  favorites.forEach((favorite: Annotation) => {
    removeAnnotation(favorite.id!);
  });
};
