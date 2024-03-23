import React from "react";
import MyCart from "../components/MyCart";

function Cart() {
  return (
    <div className="bg-[#fafafa] lg:min-h-screen">
      <div className="mx-4 lg:mx-auto lg:max-w-[1600px] pb-10">
        <MyCart />
      </div>
    </div>
  );
}
export default Cart;
