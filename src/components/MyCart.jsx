import React, { useEffect, useState } from "react";
import CartEmpty from "../components/CartEmpty";
import CartList from "../components/CartList";
import CartSummary from "../components/CartSummary";
import ProductRecommend from "./ProductRecommend";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

function MyCart() {
  const [cartList, setCartList] = useState(undefined);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const cartId = localStorage.getItem("Cart");

  const fetchCart = async () => {
    const response = await axios.get(
      `https://api.storefront.wdb.skooldio.dev/carts/${cartId}`
    );
    setCartList(response.data);
  };

  const fetchProductDetail = async () => {
    const temp = [];
    for (const item of cartList.items) {
      const response = await axios.get(
        `https://api.storefront.wdb.skooldio.dev/products/${item.productPermalink}`
      );
      temp.push(response.data);
    }
    setProducts(temp);
    setIsLoading(false);
  };

  useEffect(() => {
    if (cartId) fetchCart();
  }, [cartId]);

  useEffect(() => {
    if (cartList) fetchProductDetail();
  }, [cartList]);

  return isLoading ? (
    <div className="flex flex-col justify-center items-center min-h-screen pt-20 lg:pt-[98px] gap-4 ">
      <CircularProgress sx={{ color: "#e1e1e1" }} disableShrink />
      Loading
    </div>
  ) : (
    <>
      <h1 className="font-bold text-[32px] text-[#222] leading-[48px] py-[34px] lg:ps-6 pt-20 lg:pt-[98px]">
        My cart
      </h1>
      <div className="flex flex-col gap-10 lg:flex-row mb-10 lg:mb-20">
        <div className="flex flex-col p-4 bg-white h-fit lg:w-3/5">
          <h2 className="font-bold text-2xl text-[#222] mb-6">Items</h2>
          <div className="flex flex-col gap-6 items-center text-[#222] lg:h-[600px] lg:overflow-y-scroll lg:scrollbar lg:pr-2">
            {!cartList || !cartList.items.length > 0 || !products ? (
              <CartEmpty />
            ) : (
              <CartList
                cartList={cartList}
                products={products}
                fetchCart={fetchCart}
              />
            )}
          </div>
        </div>
        <CartSummary cartList={cartList} products={products} />
      </div>

      {!cartList && (
        <div className="flex flex-col">
          <h2 className="text-[32px] font-bold leading-[48px] mb-10">
            People also like these
          </h2>
          <ProductRecommend />
        </div>
      )}
    </>
  );
}

export default MyCart;
