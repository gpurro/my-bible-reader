import { Outlet } from "react-router-dom";
import { MainNavBar } from "./MainNavBar";
import { Footer } from "./Footer";

export const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap min-h-screen">
        <header>
          <MainNavBar />
        </header>
        <main className="flex-1 flex flex-col ">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
