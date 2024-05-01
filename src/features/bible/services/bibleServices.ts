import { LoaderFunctionArgs } from "react-router-dom";
import { apiClient } from "../../../api/apiClient";
import { Bible } from "../interfaces/bible";

export const fetchBible = async (bibleId: string) => {
  const bibleResponse = await apiClient.get(`bibles/${bibleId}`);
  if (bibleResponse.status != 200) {
    throw new Error(bibleResponse.statusText);
  }
  return bibleResponse.data.data as Bible;
};

interface BiblesRequestParams {
  abbreviation?: string;
}
export const fetchBibles = async (bibleAbbr: string = "") => {
  const bibles: Bible[] = [];
  const params = {} as BiblesRequestParams;
  if (bibleAbbr) {
    params.abbreviation = bibleAbbr;
  }
  const biblesResponse = await apiClient.get("bibles", { params: params });
  if (biblesResponse.status != 200) {
    throw new Error(biblesResponse.statusText);
  }

  biblesResponse.data.data.forEach((bible: Bible) => {
    bibles.push(bible);
  });
  return bibles as Bible[];
};

const getBibleByAbbr = async (bibleAbbr: string) => {
  const bibles = await fetchBibles(bibleAbbr);
  return bibles[0].id;
};

export const showBibleLoader = async ({ params }: LoaderFunctionArgs<any>) => {
  const bibleAbbr = params.bibleAbbr;
  if (!bibleAbbr) return;
  const bibleId = await getBibleByAbbr(bibleAbbr);
  return bibleId;
};
