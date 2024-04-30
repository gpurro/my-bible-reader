import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/reactQueryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./App.css";
import { AppContextProvider } from "./state/AppContext";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <RouterProvider router={router} />
        <Outlet />
      </AppContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
