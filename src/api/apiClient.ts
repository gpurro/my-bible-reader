import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://url",
  responseType: "json",
});
