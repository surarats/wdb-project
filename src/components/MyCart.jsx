import React, { useEffect, useState } from "react";
import CartEmpty from "../components/CartEmpty";
import CartList from "../components/CartList";
import CartSummary from "../components/CartSummary";
import ProductRecommend from "./ProductRecommend";
import axios from "axios";

function MyCart() {
  const [cartList, setCartList] = useState(undefined);

  //get cart by cart id
  const fetchCart = async () => {
    const response = await axios.get(
      "https://api.storefront.wdb.skooldio.dev/carts/3iIZ8sB1pCYzCTxVRaaw"
    );
    setCartList(response.data);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <>
      <h1 className="font-bold text-[32px] text-[#222] leading-[48px] py-[34px] lg:ps-6 pt-20 lg:pt-[98px]">
        My cart
      </h1>
      <div className="flex flex-col gap-10 lg:flex-row mb-10 lg:mb-20">
        <div className="flex flex-col p-4 bg-white h-fit lg:w-3/5">
          <h2 className="font-bold text-2xl text-[#222] mb-6">Items</h2>
          <div className="flex flex-col gap-6 items-center text-[#222]">
            {!cartList ? (
              <CartEmpty />
            ) : (
              <CartList cartList={cartList} fetchCart={fetchCart} />
            )}
          </div>
        </div>
        <CartSummary cartList={cartList} />
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
