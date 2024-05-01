import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./features/home/HomePage";
import { MainLayout } from "./layout/MainLayout";
import { LoginPage } from "./features/authentication/LoginPage";
import { BibleSelectorPage } from "./features/bible/pages/BibleSelectorPage";
import { BibleShowPage } from "./features/bible/pages/BibleShowPage";
import { showBibleLoader } from "./features/bible/services/bibleServices";
import { BookDetailsPage } from "./features/book/pages/BookDetailsPage";
import { showBookLoader } from "./features/book/services/bookServices";

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
          path: "bible/show/:bibleAbbr",
          element: <BibleShowPage />,
          loader: showBibleLoader,
        },
        {
          path: "bible/show/:bibleAbbr/book/:bookId",
          element: <BookDetailsPage />,
          loader: showBookLoader,
        },
        { path: "*", element: <Navigate to="/" /> },
      ],
    },
  ],
  { basename: `${import.meta.env.BASE_URL}` }
);
