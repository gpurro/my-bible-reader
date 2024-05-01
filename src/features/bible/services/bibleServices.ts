import { LoaderFunctionArgs } from "react-router-dom";
import { apiClient } from "../../../api/apiClient";
import { Bible } from "../interfaces/bible";
import { queryClient } from "../../../api/reactQueryClient";

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

export const getBibleByAbbr = async (bibleAbbr: string) => {
  const bibles = await queryClient.fetchQuery({
    queryKey: ["bibles", { abbreviation: bibleAbbr }],
    queryFn: () => {
      return fetchBibles(bibleAbbr);
    },
    staleTime: 1000 * 60 * 60,
  });
  return bibles[0];
};

export const showBibleLoader = async ({ params }: LoaderFunctionArgs<any>) => {
  const bibleAbbr = params.bibleAbbr;
  if (!bibleAbbr) return;
  const bible = await getBibleByAbbr(bibleAbbr);
  return bible.id;
};
