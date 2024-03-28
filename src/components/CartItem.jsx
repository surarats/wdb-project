import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CartItem({ item, cartId, product, fetchCart }) {
  const productBySkuCode = product.variants.find(
    ({ skuCode }) => skuCode === item.skuCode
  );

  const [fColor, setFColor] = useState(productBySkuCode?.color);
  const [fSize, setFSize] = useState(productBySkuCode?.size);
  const [fQty, setFQty] = useState(item.quantity);
  const [fRemains, setFRemains] = useState(productBySkuCode?.remains);

  const qtySelect = Array.from({ length: 10 }, (_, index) => index + 1);

  const options = {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  const itemsByColors = useMemo(() => {
    const temp = {};
    product?.variants.forEach(({ color, size, skuCode, remains }) => {
      if (!temp[color]) {
        temp[color] = [{ skuCode, size, remains }];
      } else {
        temp[color].push({ skuCode, size, remains });
      }
    });
    return temp;
  }, [product?.variants]);

  const handleColorSelect = (color) => {
    setFColor(color);
  };
  const handleSizeSelect = (size) => {
    setFSize(size);
  };
  const handleQtySelect = (qty) => {
    setFQty(qty);
  };

  const handleRemoveItem = async (itemId, fetchCart) => {
    let result = confirm("Do you want to remove this item?");
    if (result) {
      await axios.delete(
        `https://api.storefront.wdb.skooldio.dev/carts/${cartId}/items/${itemId}`
      );
      await fetchCart();
    }
  };

  const handleUpdateItem = async (
    itemId,
    cartId,
    updatedSize,
    updatedColor,
    updatedQty
  ) => {
    const newSkuCode = itemsByColors[updatedColor].find(
      ({ size }) => size === updatedSize
    )?.skuCode;

    await axios.patch(
      `https://api.storefront.wdb.skooldio.dev/carts/${cartId}/items/${itemId}`,
      { quantity: Number(updatedQty), skuCode: newSkuCode }
    );

    await fetchCart();
  };

  const colorOptions = product?.variants
    .map(({ color }) => color)
    .filter((item, i, ar) => ar.indexOf(item) === i);

  return (
    <>
      <div className="flex flex-col gap-4 items-center w-full lg:flex-row  lg:h-[209px] lg:pr-2">
        <img
          alt={product.name}
          src={product?.imageUrls && product?.imageUrls[0]}
          className="object-cover h-[209px] w-[209px] md:h-[418px] md:w-[418px] lg:h-[209px] lg:w-[209px]  shrink-0"
        />
        <div className="flex flex-col gap-5 w-full lg:justify-between lg:h-full ">
          <div className="flex justify-between">
            <Link to={`/products/${product.permalink}`}>
              <h3 className="font-bold text-2xl">{product?.name}</h3>
            </Link>
            <img
              src="/images/delete.png"
              className="w-[40px] h-[40px] cursor-pointer"
              onClick={() => handleRemoveItem(item.id, fetchCart)}
            />
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:flex-wrap">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 flex-auto ">
              <div className="col-span-2 flex flex-col gap-2 lg:col-span-1 min-w-24 ">
                <label htmlFor="color" className="leading-5">
                  Color
                </label>
                <select
                  className="h-[54px] border py-[7px] px-2.5"
                  onChange={(event) => {
                    const color = event.target.value;
                    handleColorSelect(color);

                    const newProductWithFColor = itemsByColors[color];
                    if (
                      !newProductWithFColor.some(({ size }) => size === fSize)
                    ) {
                      setFSize(newProductWithFColor?.[0].size);
                      handleUpdateItem(
                        item.id,
                        cartId,
                        newProductWithFColor?.[0].size,
                        color,
                        fQty
                      );
                    } else {
                      handleUpdateItem(item.id, cartId, fSize, color, fQty);
                    }
                  }}
                  value={fColor}
                >
                  {colorOptions?.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>

              {fSize && (
                <div className="flex flex-col flex-1 gap-2 min-w-24">
                  <label htmlFor="size" className="leading-5">
                    Size
                  </label>
                  <select
                    className={`h-[54px] border py-[7px] px-2.5 ${
                      fSize ? "" : "bg-[#F5F5F5]"
                    }`}
                    onChange={(event) => {
                      handleSizeSelect(event.target.value);
                      handleUpdateItem(
                        item.id,
                        cartId,
                        event.target.value,
                        fColor,
                        fQty
                      );
                    }}
                    value={fSize}
                  >
                    {itemsByColors?.[fColor]?.map(({ size }) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="flex flex-col flex-1 gap-2 min-w-24">
                <label htmlFor="quantity" className="leading-5">
                  Qty.
                </label>
                <select
                  className="h-[54px] border py-[7px] px-2.5"
                  onChange={(event) => {
                    handleQtySelect(event.target.value);
                    handleUpdateItem(
                      item.id,
                      cartId,
                      fSize,
                      fColor,
                      event.target.value
                    );
                  }}
                  value={fQty}
                >
                  {qtySelect.map((i) => (
                    <option key={i} value={i} disabled={!(i <= fRemains)}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <h4 className="font-bold text-2xl leading-8 text-end text-nowrap flex-1">
              THB{" "}
              {product?.promotionalPrice &&
                product?.promotionalPrice.toLocaleString("en-US", options)}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
