import React from "react";
import { useParams } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

import SidebarLg from "../components/SidebarLg";
import ProductAll from "../components/ProductAll";

function Product() {
  const isLg = useMediaQuery("(min-width:1024px)");
  let { manage, category } = useParams();

  return (
    <div className="bg-[#fff] lg:min-h-screen">
      <div className="mx-4 lg:mx-auto lg:max-w-[1600px] pb-10">
        <div className="flex pt-20 lg:pt-[98px] lg:gap-[10%]">
          {/* Sidebar Desktop */}
          {isLg && <SidebarLg manage={manage} category={category} />}
          {/* Product List Show */}
          <ProductAll manage={manage} category={category} />
        </div>
      </div>
    </div>
  );
}

export default Product;
