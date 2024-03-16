import React, { useState } from "react";
import CartEmpty from "../components/CartEmpty";
import CartList from "../components/CartList";
import CartSummary from "../components/CartSummary";

function MyCart() {
  const [isEmptyCart, setIsEmtpyCart] = useState(false);
  return (
    <>
      <h1 className="font-bold text-[32px] text-[#222] leading-[48px] py-[34px] lg:ps-6">
        My cart
      </h1>
      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-col p-4 bg-white h-fit lg:w-3/5">
          <h2 className="font-bold text-2xl text-[#222] mb-6">Items</h2>
          <div className="flex flex-col gap-6 items-center text-[#222]">
            {isEmptyCart ? <CartEmpty /> : <CartList />}
          </div>
        </div>
        <CartSummary isEmptyCart={isEmptyCart} />
      </div>
    </>
  );
}

export default MyCart;
