import { Navigate, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { LoginPage } from "./features/authentication/LoginPage";
import { BibleSelectorPage } from "./features/bible/pages/BibleSelectorPage";
import { BibleDetailsPage } from "./features/bible/pages/BibleDetailsPage";
import { BookDetailsPage } from "./features/book/pages/BookDetailsPage";
import { ChapterDetailsPage } from "./features/chapter/pages/ChapterDetailsPage";
import { VerseDetailsPage } from "./features/verse/pages/VerseDetailsPage";
import { HomePage } from "./features/home/HomePage";
import { SearchPage } from "./features/search/pages/SearchPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        { path: "login", element: <LoginPage /> },
        { path: "bible/select", element: <BibleSelectorPage /> },
        {
          path: "bible/:bibleId/show",
          element: <BibleDetailsPage />,
        },
        {
          path: "bible/:bibleId/show/book/:bookId",
          element: <BookDetailsPage />,
        },
        {
          path: "bible/:bibleId/show/book/:bookId/chapter/:chapterId",
          element: <ChapterDetailsPage />,
        },
        {
          path: "bible/:bibleId/show/book/:bookId/chapter/:chapterId/verse/:verseId",
          element: <VerseDetailsPage />,
        },
        {
          path: "bible/:bibleId/search",
          element: <SearchPage />,
        },
        { path: "*", element: <Navigate to="/" /> },
      ],
    },
  ],
  { basename: `${import.meta.env.BASE_URL}` }
);
