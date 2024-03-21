import React from "react";

import Rating from "@mui/material/Rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { styled } from "@mui/material/styles";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#DEF81C",
  },
});

function ProductCard({ products, isList }) {
  return (
    <>
      {products.map((product) => (
        <div
          key={`${new Date().getTime}${product.id}`}
          className="flex flex-col gap-[14.75px] lg:flex-auto lg:max-w-[370px]"
        >
          <div className="relative">
            <img
              src={product.imageUrls[0]}
              className={`object-cover w-full ${
                isList === "productRecommend" ? "h-[340px]" : "h-[370px]"
              } lg:h-[370px]`}
            />
            {product.price > product.promotionalPrice && (
              <div className="flex items-center absolute top-6 right-0 bg-[#FF000D] text-white text-[16px] leading-5 py-1 px-2.5 h-[34px]">
                Sale
              </div>
            )}
          </div>
          <div className="flex flex-col gap-[7.38px] ">
            <h3 className="text-[#222] font-bold text-[22.13px] leading-[29.5px] whitespace-nowrap overflow-hidden text-ellipsis">
              {product.name}
            </h3>
            <p className="text-[14.75px] leading-[18.44px] whitespace-nowrap overflow-hidden text-ellipsis">
              {product.description}
            </p>
            <StyledRating
              readOnly
              value={product.ratings}
              precision={0.5}
              icon={<StarRoundedIcon fontSize="small" />}
              emptyIcon={
                <StarRoundedIcon
                  fontSize="small"
                  style={{ color: "#E1E1E1" }}
                />
              }
            />
            <div className="flex justify-end items-center gap-4">
              {product.price > product.promotionalPrice ? (
                <>
                  <p className="line-through text-sm text-[#626262] font-semibold">
                    {product.price.toLocaleString("th-TH")}
                  </p>{" "}
                  <p className="text-2xl font-bold text-end text-[#FF000D]">
                    THB {product.promotionalPrice.toLocaleString("th-TH")}
                  </p>
                </>
              ) : (
                <p className="text-2xl font-bold text-end">
                  THB {product.price.toLocaleString("th-TH")}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductCard;
