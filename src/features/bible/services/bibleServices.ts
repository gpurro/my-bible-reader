import { apiClient } from "../../../api/apiClient";
import { Bible } from "../interfaces/bible";

export const fetchBible = async (bibleId: string) => {
  const bibleResponse = await apiClient.get(`bibles/${bibleId}`);
  if (bibleResponse.status != 200) {
    throw new Error(bibleResponse.statusText);
  }
  return bibleResponse.data.data as Bible;
};

export const fetchBibles = async () => {
  const bibles: Bible[] = [];

  const biblesResponse = await apiClient.get("bibles");
  if (biblesResponse.status != 200) {
    throw new Error(biblesResponse.statusText);
  }

  biblesResponse.data.data.forEach((bible: Bible) => {
    bibles.push(bible);
  });
  return bibles as Bible[];
};
