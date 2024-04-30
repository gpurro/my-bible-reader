import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../../api/apiClient";
import { Bible } from "../interfaces/bible";

const fetchBibles = async (): Bible[] => {
  const bibles: Bible[] = [];
  const biblesResponse = await apiClient.get("bibles");
  if (biblesResponse.status != 200) {
    throw new Error(biblesResponse.statusText);
  }

  biblesResponse.data.data.forEach((bible: Bible) => {
    bibles.push(bible);
  });
  return bibles;
};

export const useBibles = () => {
  const bibles = useQuery({
    queryKey: ["bibles"],
    queryFn: fetchBibles,
    staleTime: 1000 * 60 * 60,
  });

  return bibles;
};
