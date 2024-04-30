import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./features/home/HomePage";
import { MainLayout } from "./layout/MainLayout";
import { LoginPage } from "./features/authentication/LoginPage";
import { BibleSelectorPage } from "./features/bible/pages/BibleSelectorPage";
import { BibleShowPage } from "./features/bible/pages/BibleShowPage";
import { getBibleByAbbr } from "./features/bible/services/bibleServices";

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
          loader: async ({ params }) => {
            const bibleAbbr = params.bibleAbbr;
            if (!bibleAbbr) return;
            const bibleId = await getBibleByAbbr(bibleAbbr);
            return bibleId;
          },
        },
        { path: "*", element: <Navigate to="/" /> },
      ],
    },
  ],
  { basename: `${import.meta.env.BASE_URL}` }
);
