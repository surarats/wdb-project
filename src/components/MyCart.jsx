import React, { useEffect, useState, useContext } from "react";
import CartEmpty from "../components/CartEmpty";
import CartList from "../components/CartList";
import CartSummary from "../components/CartSummary";
import ProductRecommend from "./ProductRecommend";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { checkCartContext } from "./Layout";

function MyCart() {
  const [cartList, setCartList] = useState(undefined);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { hasItem, setHasItem } = useContext(checkCartContext);

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
    if (!temp.length > 0) {
      localStorage.removeItem("Cart");
      setHasItem(false);
    }
    setProducts(temp);
    setIsLoading(false);
  };

  useEffect(() => {
    if (cartId) fetchCart();
  }, [cartId]);

  useEffect(() => {
    fetchProductDetail();
  }, [cartList]);

  return (
    <>
      <h1 className="font-bold text-[32px] text-[#222] leading-[48px] py-[34px] lg:ps-6 pt-20 lg:pt-[98px]">
        My cart
      </h1>
      <div className="flex flex-col gap-10 lg:flex-row mb-10 lg:mb-20">
        <div className="flex flex-col p-4 bg-white h-fit lg:w-3/5">
          <h2 className="font-bold text-2xl text-[#222] mb-6">Items</h2>
          <div className="flex flex-col gap-6 items-center text-[#222] lg:max-h-[600px] lg:overflow-y-scroll lg:scrollbar lg:pr-2">
            {!hasItem ? (
              //!cartList && !products.length > 0 ? (
              <CartEmpty cartList={cartList} />
            ) : isLoading ? (
              <div className="flex flex-col justify-center items-center h-full">
                <CircularProgress sx={{ color: "#e1e1e1" }} disableShrink />
                Loading
              </div>
            ) : (
              <CartList
                cartList={cartList}
                products={products}
                fetchCart={fetchCart}
              />
            )}
          </div>
        </div>
        <CartSummary
          cartList={cartList}
          products={products}
          isLoading={isLoading}
        />
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
