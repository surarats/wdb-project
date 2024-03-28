import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Footer() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://api.storefront.wdb.skooldio.dev/categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    // Footer Container
    <div className="flex flex-col gap-4 py-6 px-[18px] items-center bg-[#222] text-white lg:px-40 lg:py-4">
      <div className="w-full flex flex-col gap-14 lg:flex-row lg:gap-[45px]">
        {/* Featured Product */}
        <div className="flex flex-col gap-4 items-center flex-1 lg:items-start">
          <div className="font-bold text-2xl lg:text-[32px] lg:leading-[48px]">
            Featured product
          </div>
          <ul className="flex flex-col gap-4 items-center font-semibold text-[18px] leading-6 lg:items-start">
            {categories.map(
              (category) =>
                !category.parentId && (
                  <Link
                    to={`/products/categories/${category.permalink}`}
                    key={category.id}
                  >
                    <li className="">{category.name}</li>
                  </Link>
                )
            )}
          </ul>
        </div>
        {/* Customer Services */}
        <div className="flex flex-col gap-4 items-center flex-1 lg:items-start">
          <div className="font-bold text-2xl lg:text-[32px] lg:leading-[48px]">
            Customer services
          </div>
          <div className="text-[16px] leading-5">
            MBK Tower 20th Floor, 444, Phaya Thai Rd, Wang Mai, Pathum Wan,
            Bangkok 10330
          </div>
          <div className="text-[16px] leading-5">
            Email: jane.doe@realmail.com
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="w-full flex flex-col gap-1 justify-center items-center text-xs font-normal text-[#9f9f9f] lg:flex-row">
        <div className="flex-1">
          Copyright © 2024 All rights reserved for all contents.
        </div>
        <div className="flex justify-center items-center gap-2">
          <div>Powered By</div>
          <div className="flex gap-[7.32px] h-[27px]">
            {/* Skooldio Logo */}
            <img className="max-h-full" src="/images/skooldio-logo.png" />
            <div className="bg-[#DEE2E6] w-[0.46px]"></div>
            {/* Web Bootcamp Logo */}
            <img className="max-h-full" src="/images/web-bootcamp-logo.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
