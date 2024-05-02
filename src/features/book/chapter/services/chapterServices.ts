import { apiClient } from "../../../api/apiClient";
import { Chapter } from "../interfaces/chapter";

export const fetchChapter = async (bibleId: string = "", chapterId: string) => {
  const chapterResponse = await apiClient.get(
    `bibles/${bibleId}/chapters/${chapterId}`
  );
  if (chapterResponse.status != 200) {
    throw new Error(chapterResponse.statusText);
  }
  return chapterResponse.data.data as Chapter;
};

export const fetchChapters = async (bibleId: string, bookId: string) => {
  const chapters: Chapter[] = [];

  const chaptersResponse = await apiClient.get(
    `bibles/${bibleId}/books/${bookId}/chapters`
  );
  if (chaptersResponse.status != 200) {
    throw new Error(chaptersResponse.statusText);
  }

  chaptersResponse.data.data.forEach((chapter: Chapter) => {
    chapters.push(chapter);
  });
  return chapters as Chapter[];
};
