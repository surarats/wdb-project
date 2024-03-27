import React, { useEffect, useState } from "react";
import axios from "axios";

function CartItemSummary({ item, cartList }) {
  const [product, setProduct] = useState({});

  const options = {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const fetchProductDetail = async (productPermalink) => {
    const response = await axios.get(
      `https://api.storefront.wdb.skooldio.dev/products/${productPermalink}`
    );
    setProduct(response.data);
  };

  useEffect(() => {
    fetchProductDetail(item.productPermalink);
  }, []);

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
