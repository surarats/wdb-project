import React from "react";
import CartItem from "./CartItem";

function CartList({ cartList, fetchCart }) {
  return (
    <>
      {cartList.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          cartId={cartList.id}
          fetchCart={fetchCart}
        />
      ))}
    </>
  );
}

export default CartList;
