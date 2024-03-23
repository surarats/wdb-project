import React from "react";

function CartItem() {
  return (
    <>
      {/* Item 1 */}
      <div className="flex flex-col gap-4 items-center w-full lg:flex-row  lg:h-[209px]">
        <img src="/images/item-1.png" />
        <div className="flex flex-col gap-5 w-full lg:justify-between lg:h-full">
          <div className="flex justify-between">
            <h3 className="font-bold text-2xl">Reyon Long Sleeve Shirt</h3>
            <img src="/images/delete.png" className="w-[40px] h-[40px]" />
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:flex-wrap">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 flex-auto ">
              <div className="col-span-2 flex flex-col gap-2 lg:col-span-1 min-w-24 ">
                <label htmlFor="color" className="leading-5">
                  Color
                </label>
                <select className="h-[54px] border py-[7px] px-2.5">
                  <option>Blue</option>
                </select>
              </div>
              <div className="flex flex-col flex-1 gap-2 min-w-24">
                <label htmlFor="size" className="leading-5">
                  Size
                </label>
                <select className="h-[54px] border py-[7px] px-2.5">
                  <option>M</option>
                </select>
              </div>
              <div className="flex flex-col flex-1 gap-2 min-w-24">
                <label htmlFor="quantity" className="leading-5">
                  Qty.
                </label>
                <select className="h-[54px] border py-[7px] px-2.5">
                  <option>2</option>
                </select>
              </div>
            </div>
            <h4 className="font-bold text-2xl leading-8 text-end text-nowrap flex-1">
              THB 2,000.00
            </h4>
          </div>
        </div>
      </div>
      {/* End Item 1 */}
      {/* Item 2 */}
      <div className="border border-[#e1e1e1] w-full"></div>
      <div className="flex flex-col gap-4 items-center w-full lg:flex-row  lg:h-[209px]">
        <img src="/images/item-2.png" />
        <div className="flex flex-col gap-5 w-full lg:justify-between lg:h-full">
          <div className="flex justify-between">
            <h3 className="font-bold text-2xl">Flexi Move Sneaker</h3>
            <img src="/images/delete.png" className="w-[40px] h-[40px]" />
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 flex-1">
              <div className="col-span-2 flex flex-col gap-2 lg:col-span-1 min-w-24 ">
                <label htmlFor="color" className="leading-5">
                  Color
                </label>
                <select className="h-[54px] border py-[7px] px-2.5">
                  <option>Trio</option>
                </select>
              </div>
              <div className="flex flex-col flex-1 gap-2 min-w-24">
                <label htmlFor="size" className="leading-5">
                  Size
                </label>
                <select className="h-[54px] border py-[7px] px-2.5">
                  <option>40</option>
                </select>
              </div>
              <div className="flex flex-col flex-1 gap-2 min-w-24">
                <label htmlFor="quantity" className="leading-5">
                  Qty.
                </label>
                <select className="h-[54px] border py-[7px] px-2.5">
                  <option>1</option>
                </select>
              </div>
            </div>
            <h4 className="font-bold text-2xl leading-8 text-end">
              THB 1,700.00
            </h4>
          </div>
        </div>
      </div>
      {/* End Item 2 */}
    </>
  );
}

export default CartItem;
