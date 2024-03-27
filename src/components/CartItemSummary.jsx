import React, { useEffect, useState } from "react";
import axios from "axios";

function CartItemSummary({ item, setTotalQty, setSubtotal }) {
  const [product, setProduct] = useState({});

  const options = {
    style: "decimal", // Other options: 'currency', 'percent', etc.
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const fetchProductDetail = async (productPermalink) => {
    const response = await axios.get(
      `https://api.storefront.wdb.skooldio.dev/products/${productPermalink}`
    );
    setProduct(response.data);
    // setTotalQty((prev) => Number(prev) + Number(item.quantity));
  };

  useEffect(() => {
    fetchProductDetail(item.productPermalink);
  }, []);

  // useEffect(() => {
  //   if (item.quantity && product.promotionalPrice) {
  //     let result = product.promotionalPrice * Number(item.quantity);
  //     setSubtotal((prev) => prev + result);
  //   }
  // }, [product, item.quantity]);

  return (
    <div className="flex flex-col gap-6 text-[#222]">
      <div className="flex justify-between ">
        <p>
          {product.name} x {item.quantity}
        </p>
        <p>
          {(product.promotionalPrice * item.quantity).toLocaleString(
            "en-US",
            options
          )}
        </p>
      </div>
    </div>
  );
}

export default CartItemSummary;
