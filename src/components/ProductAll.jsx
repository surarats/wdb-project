import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductSortOption from "./ProductSortOption";
import ProductCard from "./ProductCard";

function ProductAll({ category }) {
  const [products, setProducts] = useState([]);

  const fetchProduct = async (category) => {
    try {
      const response = await axios.get(`https://api.storefront.wdb.skooldio.dev/products?categories=${category}`)
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
      <div className="flex flex-col items-end ">
        <h2 className="text-[32px] font-bold leading-[48px] w-full text-center my-6 lg:text-left">
          Product Name
        </h2>
        <ProductSortOption />
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <ProductCard products={products} isList={"productList"} />
      </div>
      </div>  
          
          

  );
}

export default ProductAll;





