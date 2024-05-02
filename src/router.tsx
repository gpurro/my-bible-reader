import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./features/home/HomePage";
import { MainLayout } from "./layout/MainLayout";
import { LoginPage } from "./features/authentication/LoginPage";
import { BibleSelectorPage } from "./features/bible/pages/BibleSelectorPage";
import { BibleDetailsPage } from "./features/bible/pages/BibleDetailsPage";
import { BookDetailsPage } from "./features/book/pages/BookDetailsPage";
import { ChapterDetailsPage } from "./features/chapter/pages/ChapterDetailsPage";
import { VerseDetailsPage } from "./features/verse/pages/VerseDetailsPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "login", element: <LoginPage /> },
        { path: "bible/select", element: <BibleSelectorPage /> },
        {
          path: "bible/show/:bibleId",
          element: <BibleDetailsPage />,
        },
        {
          path: "bible/show/:bibleId/book/:bookId",
          element: <BookDetailsPage />,
        },
        {
          path: "bible/show/:bibleId/book/:bookId/chapter/:chapterId",
          element: <ChapterDetailsPage />,
        },
        {
          path: "bible/show/:bibleId/book/:bookId/chapter/:chapterId/verse/:verseId",
          element: <VerseDetailsPage />,
        },
        { path: "*", element: <Navigate to="/" /> },
      ],
    },
  ],
  { basename: `${import.meta.env.BASE_URL}` }
);