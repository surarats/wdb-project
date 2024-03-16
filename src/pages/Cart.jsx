import React from "react";
import MyCart from "../components/MyCart";
import ProductCard from "../components/ProductCard";

function Cart() {
  return (
    <div className="bg-[#fafafa] lg:min-h-screen">
      <div className="mx-4 lg:mx-auto lg:max-w-[1600px]">
        <MyCart />
        <ProductCard />
      </div>
    </div>
  );
}
export default Cart;
