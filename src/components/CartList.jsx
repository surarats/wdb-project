import React from "react";
import CartItem from "./CartItem";

function CartList({ cartList, products, fetchCart }) {
  return (
    <>
      {products.length > 0 &&
        cartList.items.map((item, index) => {
          return (
            <React.Fragment key={item.id}>
              <CartItem
                item={item}
                product={
                  products.filter(
                    (product) => item.productPermalink === product.permalink
                  )?.[0]
                }
                cartId={cartList.id}
                fetchCart={fetchCart}
              />
              {index !== cartList.items.length - 1 && (
                <div className="border border-[#e1e1e1] w-full "></div>
              )}
            </React.Fragment>
          );
        })}
    </>
  );
}

export default CartList;
