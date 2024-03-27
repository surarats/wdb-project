import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "./ProductCard";
import Sortby from "./Sortby";

// eslint-disable-next-line react/prop-types
function ProductAll({ manage, category, sort }) {
  const [products, setProducts] = useState([]);

  const fetchProduct = async (manage, category, sort) => {
    try {
      if (!sort) {
        const response = await axios.get(
          `https://api.storefront.wdb.skooldio.dev/products?${manage}=${category}`
        );
        setProducts(response.data.data);
      } else {
        const response = await axios.get(
          `https://api.storefront.wdb.skooldio.dev/products?${manage}=${category}&sort=${sort}`
        );
        setProducts(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct(manage, category, sort);
  }, [category, sort]);
  return (
    <div className="flex flex-col lg:w-[75%]">
      {/* Sort Button  */}
      <div className="flex flex-col items-end ">
        <h2 className="text-[32px] font-bold leading-[48px] w-full text-center my-6 lg:text-left">
          {category.toUpperCase().replace("-", " ")}
        </h2>
        <Sortby manage={manage} category={category} />
      </div>
      {/* Product List Page*/}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <ProductCard products={products} isList={"productList"} />
      </div>
    </div>
  );
}

export default ProductAll;
