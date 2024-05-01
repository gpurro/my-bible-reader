import { Outlet } from "react-router-dom";
import { MainNavBar } from "./MainNavBar";
import { Footer } from "./Footer";

export const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen max-h-screen ">
        <header>
          <MainNavBar />
        </header>
        <main className=" flex-1 overflow-auto">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
