import { apiClient } from "../../../api/apiClient";
import { SearchResponse } from "../interfaces/search";

export const searchInBible = async (
  bibleId: string = "",
  searchText: string = "",
  offset: number = 0,
  limit: number = 0
) => {
  const searchResponse = await apiClient.get(`bibles/${bibleId}/search`, {
    params: {
      query: searchText,
      offset,
      limit,
    },
  });
  if (searchResponse.status != 200) {
    throw new Error(searchResponse.statusText);
  }
  return searchResponse.data.data as SearchResponse;
};
