import { apiClient } from "../../../api/apiClient";
import { Verse } from "../interfaces/verse";

export const fetchVerse = async (bibleId: string = "", verseId: string) => {
  const verseResponse = await apiClient.get(
    `bibles/${bibleId}/verses/${verseId}`
  );
  if (verseResponse.status != 200) {
    throw new Error(verseResponse.statusText);
  }
  return verseResponse.data.data as Verse;
};

export const fetchVerses = async (bibleId: string, chapterId: string) => {
  const verses: Verse[] = [];

  const versesResponse = await apiClient.get(
    `bibles/${bibleId}/chapters/${chapterId}/verses`
  );
  if (versesResponse.status != 200) {
    throw new Error(versesResponse.statusText);
  }

  versesResponse.data.data.forEach((verse: Verse) => {
    verses.push(verse);
  });
  return verses as Verse[];
};
