import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="w-[375px] lg:w-[1920px]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
