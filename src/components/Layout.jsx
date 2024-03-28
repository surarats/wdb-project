import React, { createContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const checkCartContext = createContext(false);
function Layout() {
  const [hasItem, setHasItem] = useState(localStorage.getItem("Cart"));

  return (
    <>
      <checkCartContext.Provider value={{ hasItem, setHasItem }}>
        <Header />
        <Outlet />
        <Footer />
      </checkCartContext.Provider>
    </>
  );
}

export { checkCartContext };
export default Layout;
