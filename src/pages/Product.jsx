import React from "react";
import { useParams } from "react-router-dom";

import ProductAll from "../components/ProductAll";

function Product() {
  let { category } = useParams();

  return (
    <div className="bg-[#fafafa] lg:min-h-screen">
      <div className="mx-4 lg:mx-auto lg:max-w-[1600px] pb-10">
        <ProductAll category={category} />
      </div>
    </div>
  );
}

export default Product;
