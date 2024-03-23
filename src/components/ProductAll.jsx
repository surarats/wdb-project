import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "./ProductCard";

function ProductAll({ manage, category }) {
  const [products, setProducts] = useState([]);
  const fetchProduct = async (category) => {
    try {
      const response = await axios.get(
        `https://api.storefront.wdb.skooldio.dev/products?${manage}=${category}`
      );
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct(category);
  }, [category]);
  return (
    <div className="flex flex-col lg:w-[75%]">
      {/* Sort Button  */}
      <div className="flex flex-col items-end ">
        <h2 className="text-[32px] font-bold leading-[48px] w-full text-center my-6">
          {category.toUpperCase().replace("-", " ")}
        </h2>
        <div className="flex flex-row items-center gap-2 mb-[22px] text-[18px] leading-6 font-semibold">
          Sort by
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 16L32 16"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M9 16H22"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M9 24H14"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M20 24L32 24"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="17" cy="24" r="3" stroke="#222222" strokeWidth="2" />
            <circle cx="25" cy="16" r="3" stroke="#222222" strokeWidth="2" />
          </svg>
        </div>
      </div>
      {/* Product List Page*/}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <ProductCard products={products} isList={"productList"} />
      </div>
    </div>
  );
}

export default ProductAll;
