import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/reactQueryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./App.css";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
      <Outlet />
    </QueryClientProvider>
  );
};

export default App;
