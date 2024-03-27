import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItemSummary from "./CartItemSummary";
import axios from "axios";

function CartSummary({ cartList }) {
  const [totalQty, setTotalQty] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  // const [itemPrice, setItemPrice] = useState(0);

  const options = {
    style: "decimal", // Other options: 'currency', 'percent', etc.
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const calculateTotal = (productPermalink) => {
    let totalQtyResult = 0;
    let totalPriceResult = 0;

    if (cartList) {
      cartList.items.forEach(async (i) => {
        let price = await fetchPriceOfProduct(i.productPermalink);
        console.log(price);
        totalQtyResult = Number(totalQtyResult) + Number(i.quantity);
        totalPriceResult =
          Number(totalPriceResult) + Number(price) * Number(i.quantity);
      });
      console.log(totalPriceResult);
      setTotalQty(totalQtyResult);
      setSubtotal(totalPriceResult);
    }
  };

  console.log(subtotal);

  useEffect(() => {
    calculateTotal();
  }, [cartList]);

  return (
    <div className="bg-white flex flex-col gap-10 p-6 h-fit lg:w-2/5">
      {!cartList ? (
        <div className="flex flex-col gap-6 ">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-2xl text-[#222]">Summary</h2>
            <p className="font-semibold	text-[18px] text-[#626262] leading-6	">
              0 item
            </p>
          </div>
          <div className="flex flex-col gap-6 text-[#9f9f9f]">
            <div className="flex justify-between ">
              <p>No item</p>
              <p>0.00</p>
            </div>

            <div className="border border-[#e1e1e1]"></div>

            <div className="flex flex-col gap-4 ">
              <div className="flex justify-between">
                <h3>Subtotal</h3>
                <p>0.00</p>
              </div>
              <div className="flex justify-between">
                <h3>Shipping fee</h3>
                <p>0.00</p>
              </div>
            </div>

            <div className="flex-1 border border-[#e1e1e1]"></div>

            <div className="flex justify-between font-semibold text-[18px] leading-6 ">
              <h3>Total</h3>
              <p>0.00</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 ">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-2xl text-[#222]">Summary</h2>
            <p className="font-semibold	text-[18px] text-[#626262] leading-6	">
              {totalQty <= 1 ? `${totalQty} item` : `${totalQty} items`}
            </p>
          </div>

          {cartList.items.map((item) => (
            <CartItemSummary
              key={new Date().getTime}
              item={item}
              setTotalQty={setTotalQty}
              setSubtotal={setSubtotal}
            />
          ))}

          <div className="border border-[#e1e1e1]"></div>

          <div className="flex flex-col gap-4 ">
            <div className="flex justify-between">
              <h3>Subtotal</h3>
              <p>{subtotal.toLocaleString("en-US", options)}</p>
            </div>
            <div className="flex justify-between">
              <h3>Shipping fee</h3>
              <p>Free</p>
            </div>
          </div>

          <div className="flex-1 border border-[#e1e1e1]"></div>

          <div className="flex justify-between font-semibold text-[18px] leading-6 ">
            <h3>Total</h3>
            <p>{subtotal.toLocaleString("en-US", options)}</p>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center gap-4">
        <Link
          to="/"
          className={`w-full grid place-content-center leading-5 h-[54px] py-[7px] px-2.5 ${
            !cartList
              ? "disabled bg-[#e1e1e1] text-[#9f9f9f]"
              : "bg-[#222] text-white link-hover}"
          }`}
        >
          Check out
        </Link>
        <Link
          to="/products/categories/all-men"
          className={`w-full grid place-content-center  leading-5 h-[54px] py-[7px] px-2.5 border border-[#e1e1e1] disabled ${
            !cartList
              ? "disabled bg-[#fff] text-[#9f9f9f]"
              : "bg-white text-[#222] link-hover}"
          }`}
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
}

export default CartSummary;
