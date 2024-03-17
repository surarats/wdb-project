import React from "react";
import ProductRecommend from "../components/ProductRecommend";

function Home() {
  return (
    <div className="bg-[#fafafa] lg:min-h-screen">
      <div className="mx-4 lg:mx-auto lg:max-w-[1600px] pb-10">
        <div className="flex flex-col">
          <h2 className="text-[32px] font-bold leading-[48px] mb-10 text-center">
            Featured Product
          </h2>
          <ProductRecommend />
        </div>
      </div>
    </div>
  );
}

export default Home;
