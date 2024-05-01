import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.scripture.api.bible/v1/",
  responseType: "json",
  headers: {
    "api-key": "81f316c5f31960d155555818b8d0a59c", // "2cabe037364b733e3c4ea5e77a498e6e", // import.meta.env.VITE_API_KEY as string,
  },
});
