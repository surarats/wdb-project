<<<<<<< HEAD
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import axios from "axios";
=======
import React  from "react";
import { useParams } from "react-router-dom";

import ProductAll from "../components/ProductAll";
>>>>>>> 37711a8 (fourth commit)

function Product() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const options = ["Price-Low to high", "Price=High to low", "Ratings"];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    // setIsOpen(false);
  };

  const handleApply = async () => {
    try{
      await axios.get()
    }catch(error){
      console.log(error)
    }
  }


  return (
<<<<<<< HEAD
    <div className="main flex flex-col h-[400px] border border-red-600">
      <div className="flex flex-col items-center">
        <h1 className="text-[32px] font-bold px-6">Womans Clothing</h1>
        <div className="dropdown-header flex justify-end items-center gap-2 border w-full" onClick={() => setIsOpen(!isOpen)}>
          {/* {selectedOption || 'Sort by'
          } */}
          <span className="">Sort by</span>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 16L32 16" stroke="#222222" strokeWidth="2" strokeLinecap="round"/>
            <path d="M9 16H22" stroke="#222222" strokeWidth="2" strokeLinecap="round"/>
            <path d="M9 24H14" stroke="#222222" strokeWidth="2" strokeLinecap="round"/>
            <path d="M20 24L32 24" stroke="#222222" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="17" cy="24" r="3" stroke="#222222" strokeWidth="2"/>
            <circle cx="25" cy="16" r="3" stroke="#222222" strokeWidth="2"/>
          </svg>
        </div>

      {isOpen && <div className="bg-white w-full fixed bottom-0 rounded-t-2xl px-[18px]">
      <div className="header-sortby flex justify-between py-8">
                  <div className="text-[16px] text-[#3366FF] leading-5 font-normal">Cancel</div>
                  <div className="text-[18px] leading-6 font-normal">Sort by</div>
                  <div className="text-[16px] text-[#3366FF] leading-5 font-normal">Reset</div>
      </div>          
        {options.map((option, index) => (
              <>
                <div className="radio-options flex justify-start">
                  <input
                    type="radio"
                    value={option}
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                    // className="ml-[18px] h-6 w-6 bg-black text-green-500"
                    // className="ml-[18px] h-6 w-6 bg-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                    // className="ml-[18px] h-6 w-6 accent-[#C1CD00]"
                    className="ml-[18px] h-6 w-6 text-[#C1CD00] bg-[#C1CD00] border-[#C1CD00]"
                  />
                  <label key={index} className="text-[16px] leading-5 font-normal ml-4 my-3">
                    {option}
                  </label>
                </div>   
              </>                         
            ))}
            <div className="flex justify-center pb-[22px]">
              {/* <button className="bg-black text-white">Apply</button> */}
              <button type="button" onClick={handleApply} className="bg-black text-white font-semibold py-[17px] px-[147px] mt-6">Apply</button>
              
            </div>  
          </div>
          }
      </div>

      {/* <Sidebar /> */}
      <div className="container">
        <div className="container-title flex">
          <h1 className="title">Womans Clothing</h1>
        </div>
        <div className="container-cards">
          <h1>These are cards</h1>
=======
    <div className="bg-[#fff] lg:min-h-screen">
      <div className="mx-4 lg:mx-auto lg:max-w-[1600px] pb-10">
        <div className="flex pt-20 lg:pt-[98px] lg:gap-[10%]">
          <ProductAll category={category} />
>>>>>>> 37711a8 (fourth commit)
        </div>
      </div>
    </div>
  );
}



export default Product;





