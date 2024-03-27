import React from "react";
import ProductRecommend from "../components/ProductRecommend";

function Home() {
  return (
    <div className="bg-[#fafafa] lg:min-h-screen">
      {/* Banner */}
      <div>
        <img
          className="h-[166px] size-full object-cover bg-cover lg:h-[420px] lg:mb-[97px]"
          src="/images/banner.jpeg"
        ></img>
      </div>
      <div className="mx-4 lg:mx-auto lg:max-w-[1600px] pb-10">
        {/* 2024 Collection */}
        <div className=" mb-[80px] lg:h-[500px] lg:flex lg:flex-row lg:justify-evenly ">
          <div className="my-[32px] ml-[18px] mr-[17px] lg:w-[363px] lg:h-[458px] ">
            <div>
              <div className="text-[64px] font-bold	leading-[92px]">2024</div>
              <div className="text-[40px] font-bold	leading-[60px]">
                Collection
              </div>
            </div>

            <div className="mt-[20px] text-[16px] font-normal leading-5">
              Step into a world of winter elegance and style with our latest
              Winter Collection. As temperatures drop, our curated selection of
              clothing is designed to keep you fashionably warm. From luxurious
              knitwear to trend-setting outerwear, each piece in our collection
              is a celebration of seasonal sophistication. Explore the blend of
              comfort and fashion, as we present you with the must-have
              ensembles to make a statement in the chilly months ahead. Welcome
              to a winter wardrobe that seamlessly combines coziness with chic
              aesthetics.
            </div>
          </div>
          {/* Collection Photo1 */}
          <div
            className=" ml-[18px] mr-[17px] mb-[20px] h-[500px] bg-gradient-to-r from-transparent to-black bg-cover flex flex-col items-center justify-end gap-[16px] px-[16px] lg:w-[575px]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), url('/images/cozy-breeze.jpeg')",
            }}
          >
            <h2 className="text-[24px] font-bold leading-8 text-white">
              Cozy Breeze
            </h2>
            <p className="text-[16px] font-normal leading-5 text-white text-center">
              Embrace the season with our carefully curated selection of
              garments, each piece thoughtfully designed to blend fashion and
              functionality. From cozy knits to elegant outerwear, our
              collection invites you to indulge in the allure of winter fashion.
            </p>

            <div className="text-[16px] font-normal leading-5 text-white py-[17px] px-[10px] mb-[16px]">
              View More
            </div>
          </div>
          {/* Collection Photo2 */}
          <div
            className=" ml-[18px] mr-[17px] h-[500px] bg-gradient-to-r from-transparent to-black bg-cover flex flex-col items-center justify-end gap-[16px] px-[16px] lg:w-[575px]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1)), url('/images/flexi-move.jpeg')",
            }}
          >
            <h2 className="text-[24px] font-bold leading-8 text-white">
              Flexi Move
            </h2>
            <p className="text-[16px] font-normal leading-5 text-white text-center">
              Step into a world where fashion meets functionality with our
              latest Sneaker Collection. Designed for those who appreciate the
              perfect fusion of style and comfort, our curated selection of
              sneakers is a celebration of urban chic.
            </p>

            <div className="text-[16px] font-normal leading-5 text-white py-[17px] px-[10px] mb-[16px]">
              View More
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[32px] font-bold leading-[48px] mb-10 text-center">
            Featured Product
          </h2>
          <ProductRecommend />
        </div>
      </div>
    </div>
  );
}

export default Home;
