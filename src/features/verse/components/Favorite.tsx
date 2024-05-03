import { MdFavorite } from "react-icons/md";
import { Verse } from "../interfaces/verse";
import { useId, useState } from "react";
import {
  addAnnotation,
  getAnnotationsByVerseId,
  removeAnnotation,
} from "../../annotation/services/annotationServices";
import { Annotation } from "../../annotation/interfaces/annotation";
interface FavoriteProps {
  verse: Verse;
}

export const Favorite = ({ verse }: FavoriteProps) => {
  const initialValue = checkFavorite(verse);
  const [isFavorite, setIsFavorite] = useState(initialValue);
  const id = useId();

  const handleOnClick = () => {
    if (isFavorite) removeFavoriteAnnotation(verse);
    else addFavoriteAnnotation(verse, id);

    setIsFavorite(!isFavorite);
  };

  return (
    <span
      onClick={handleOnClick}
      className={isFavorite ? "visible" : "invisible group-hover:visible"}
    >
      <MdFavorite className="inline mb-1" />
    </span>
  );
};

const checkFavorite = (verse: Verse) => {
  const favorites = getAnnotationsByVerseId("1", verse.id);
  return favorites.some(
    (favorite: Annotation) =>
      favorite.verseId === verse.id && favorite.bibleId === verse.bibleId
  );
};

const addFavoriteAnnotation = (verse: Verse, id: string) => {
  const newAnnotation: Annotation = {
    id,
    type: "favorite",
    userId: "1",
    bibleId: verse.bibleId,
    bookId: verse.bookId,
    chapterId: verse.chapterId,
    verseId: verse.id,
  };
  addAnnotation(newAnnotation);
};

const removeFavoriteAnnotation = (verse: Verse) => {
  const favorites = getAnnotationsByVerseId("1", verse.id);

  favorites.forEach((favorite: Annotation) => {
    removeAnnotation(favorite.id);
  });
};
