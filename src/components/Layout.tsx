import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { pages } from "../data/pages";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pages.find((page) => page.path === pathname);
    document.title = page?.documentTitle ?? "STACSDEV";
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
