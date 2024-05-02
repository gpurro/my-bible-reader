import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Breadcrumb } from "./Breadcrumb";
import { useBreadcrumbs } from "../hooks/useBreadcrumbs";

export const MainLayout = () => {
  useBreadcrumbs();

  return (
    <>
      <div className="flex flex-col min-h-screen max-h-screen ">
        <header>
          <NavBar />
          <Breadcrumb />
        </header>
        <main className=" flex-1 overflow-auto p-4">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
