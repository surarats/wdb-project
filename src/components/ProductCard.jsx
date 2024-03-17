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
          key={product.id}
          className="flex flex-col gap-[14.75px] lg:flex-auto lg:max-w-[370px]"
        >
          <img
            src={product.imageUrls[0]}
            className={`object-cover ${
              isList === "productRecommend" ? "h-[340px]" : "h-[370px]"
            } lg:h-[370px]`}
          />
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
            <p className="text-2xl font-bold text-end">
              THB {product.price.toLocaleString("th-TH")}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductCard;
