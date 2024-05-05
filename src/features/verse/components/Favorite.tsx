import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Verse } from "../interfaces/verse";
import { Annotation } from "../../annotation/interfaces/annotation";
import { useLocalStorage } from "usehooks-ts";
import {
  addFavoriteAnnotation,
  removeFavoriteAnnotation,
} from "../../annotation/services/favoriteServices";
interface FavoriteProps {
  verse: Verse;
}

export const Favorite = ({ verse }: FavoriteProps) => {
  const [annotations] = useLocalStorage("annotations", [] as Annotation[]);

  const isFavorite = annotations.some(
    (favorite: Annotation) =>
      favorite.verseId === verse.id && favorite.bibleId === verse.bibleId
  );

  const handleOnClick = () => {
    if (isFavorite) removeFavoriteAnnotation(verse.bibleId, verse.id);
    else addFavoriteAnnotation(verse.bibleId, verse.id);
  };

  return (
    <span onClick={handleOnClick} className="inline ">
      {isFavorite && <MdFavorite className="inline mb-1" />}
      {!isFavorite && (
        <MdFavoriteBorder className="inline mb-1 invisible group-hover:visible" />
      )}
    </span>
  );
};
