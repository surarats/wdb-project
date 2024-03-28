import React, { useEffect, useState } from "react";

function CartItemSummary({ item, cartList, products }) {
  const [product, setProduct] = useState([]);

  const options = {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  useEffect(() => {
    if (products.length > 0) {
      const productItem = products.filter(
        (product) => item.productPermalink === product.permalink
      )?.[0];
      setProduct(productItem);
    }
  }, [products]);

  return (
    <div className="flex flex-col gap-6 text-[#222]">
      <div className="flex justify-between ">
        <p>
          {product.name} x {item.quantity}
        </p>
        <p>
          {(
            Number(product.promotionalPrice) * Number(item.quantity)
          ).toLocaleString("en-US", options)}
        </p>
      </div>
    </div>
  );
}

export default CartItemSummary;
