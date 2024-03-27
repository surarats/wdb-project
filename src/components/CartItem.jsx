import React, { useEffect, useState } from "react";
import axios from "axios";

function CartItem({ item, cartId, fetchCart }) {
  const [product, setProduct] = useState({});
  const [variantsByColors, setVariantsByColors] = useState({});
  const [fColor, setFColor] = useState("");
  const [fSize, setFSize] = useState("");
  const [fQty, setFQty] = useState(item.quantity);
  const [fRemains, setFRemains] = useState(0);
  const [fSkuCode, setFSkucode] = useState("");

  // const sizeOrder = { S: 1, M: 2, L: 3, XL: 4, XXL: 5 };
  //   const sizeArr = Object.entries(variantsByColors).map(([color, items]) =>
  //   items.map((i) => {
  //     if (i.color === fColor) {
  //       return i.size;
  //     }
  //   })
  // );
  // console.log(sizeArr[0].sort((a, b) => sizeOrder[a] - sizeOrder[b]));

  const options = {
    style: "decimal", // Other options: 'currency', 'percent', etc.
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  // create number for qty
  const qtySelect = Array.from({ length: 10 }, (_, index) => index + 1);
  //fetch all product detail
  const fetchProductDetail = async (productPermalink) => {
    const response = await axios.get(
      `https://api.storefront.wdb.skooldio.dev/products/${productPermalink}`
    );
    setProduct(response.data);
  };

  // fetch product varaint by skCode
  const fetchProductVariant = (skuCode) => {
    if (product.variants !== undefined) {
      const variantItem = product.variants.filter((v) => v.skuCode === skuCode);
      setFColor(variantItem[0].color); //set initial value in select color
      setFSize(variantItem[0].size); //set initial value in select size
      setFRemains(variantItem[0].remains); //set initial value in select remains
    }
  };

  //create product ColorKeys : Value
  const fetchColorStock = () => {
    if (product.variants !== undefined) {
      const itemsByColors = product.variants.reduce((acc, crr) => {
        acc[crr.color] = acc[crr.color] || [];
        acc[crr.color].push(crr);
        return acc;
      }, Object.create(null));
      setVariantsByColors(itemsByColors);
    }
  };

  //handle set select value
  const handleColorSelect = (color) => {
    setFColor(color);
  };
  const handleSizeSelect = (size) => {
    setFSize(size);
  };
  const handleQtySelect = (qty) => {
    setFQty(qty);
  };

  //remove item
  const handleRemoveItem = async (itemId, fetchCart) => {
    let result = confirm("Do you want to remove this item?");
    if (result) {
      await axios.delete(
        `https://api.storefront.wdb.skooldio.dev/carts/${cartId}/items/${itemId}`
      );
      fetchCart();
    }
  };

  //update item
  const handleUpdateItem = async (itemId, cartId, fetchCart) => {
    await axios.patch(
      `https://api.storefront.wdb.skooldio.dev/carts/${cartId}/items/${itemId}`,
      { quantity: fQty, skuCode: fSkuCode }
    );
    fetchCart();
  };

  // set product remains
  const handleProductRemains = () => {
    if (product.variants !== undefined) {
      const prdSku = product.variants.filter((v) => v.skuCode === fSkuCode);
      if (prdSku.length > 0) {
        setFRemains(prdSku[0].remains);
      }
    }
  };

  // find sku code and set skuCode to cart
  const findProductSkuCode = () => {
    if (product.variants !== undefined) {
      const prdSku = product.variants.filter(
        (v) => v.color === fColor && v.size === fSize
      );
      if (prdSku.length > 0) {
        setFSkucode(prdSku[0].skuCode);
      }
    }
  };

  useEffect(() => {
    fetchProductDetail(item.productPermalink);
  }, []);

  useEffect(() => {
    fetchProductVariant(item.skuCode);
    fetchColorStock();
    findProductSkuCode();
  }, [product]);

  useEffect(() => {
    findProductSkuCode();
    handleProductRemains();
    handleUpdateItem(item.id, cartId, fetchCart);
  }, [fColor, fSize, fSkuCode, fQty]);

  return (
    <>
      <div className="flex flex-col gap-4 items-center w-full lg:flex-row  lg:h-[209px]">
        <img
          src={product.imageUrls && product.imageUrls[0]}
          className="object-cover h-[209px] w-[209px] md:h-[418px] md:w-[418px] lg:h-[209px] lg:w-[209px]  shrink-0"
        />
        <div className="flex flex-col gap-5 w-full lg:justify-between lg:h-full ">
          <div className="flex justify-between">
            <h3 className="font-bold text-2xl">{product.name}</h3>
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
                  onChange={(event) => handleColorSelect(event.target.value)}
                  value={fColor}
                >
                  {Object.keys(variantsByColors).map((color) => (
                    <option key={`${new Date().getTime}${color}`} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col flex-1 gap-2 min-w-24">
                <label htmlFor="size" className="leading-5">
                  Size
                </label>
                <select
                  className={`h-[54px] border py-[7px] px-2.5 ${
                    fSize ? "" : "bg-[#F5F5F5]"
                  }`}
                  onChange={(event) => handleSizeSelect(event.target.value)}
                  value={fSize}
                  disabled={!fSize}
                >
                  {Object.entries(variantsByColors).map(([color, items]) =>
                    items.map(
                      (i) =>
                        i.color === fColor && (
                          <option key={i.skuCode} value={i.size}>
                            {i.size}
                          </option>
                        )
                    )
                  )}
                </select>
              </div>

              <div className="flex flex-col flex-1 gap-2 min-w-24">
                <label htmlFor="quantity" className="leading-5">
                  Qty.
                </label>
                <select
                  className="h-[54px] border py-[7px] px-2.5"
                  onChange={(event) => handleQtySelect(event.target.value)}
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
              {product.promotionalPrice &&
                product.promotionalPrice.toLocaleString("en-US", options)}
            </h4>
          </div>
        </div>
      </div>
      <div className="border border-[#e1e1e1] w-full"></div>
    </>
  );
}

export default CartItem;
