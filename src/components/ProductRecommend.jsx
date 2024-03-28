import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "./ProductCard";

function ProductRecommend() {
  const [productsRecommend, setProductsRecommend] = useState([]);

  const fetchProductRec = async () => {
    try {
      const response = await axios.get(
        "https://api.storefront.wdb.skooldio.dev/products"
      );
      let i = 0;
      const randomProducts = [];
      while (i < 4) {
        let randomIndex = Math.floor(Math.random() * response.data.data.length);
        if (randomProducts.includes(response.data.data[randomIndex])) {
          continue;
        } else {
          randomProducts.push(response.data.data[randomIndex]);
          i++;
        }
      }
      setProductsRecommend(randomProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductRec();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
      <ProductCard products={productsRecommend} isList={"productRecommend"} />
    </div>
  );
}

export default ProductRecommend;
