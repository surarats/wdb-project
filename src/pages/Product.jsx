import Sidebar from "../components/Sidebar";
import { useState } from "react";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const options = ["Price-Low to high", "Price=High to low", "Ratings"];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
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

      {isOpen && <div className="h-[50px] bg-white w-full fixed bottom-0 ">Test Filter Box</div>}

      {isOpen && (
        <div className="dropdown-options flex flex-col items-start w-fit border">
          {options.map((option, index) => (
            <>
              <div className="header-sortby justify-between">
                <a><p>Cancel</p></a>
                <p>Sort by</p>
                <a><p>Reset</p></a>
              </div>
              <div className="radio-options flex justify-end">
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionChange(option)}
                />
                <label key={index}>
                  {option}
                </label>
              </div>    
              <div>
                <button>Apply</button>
              </div>    
            </>                   
          ))}
        </div>
      )}
      </div>
      
      {/* <select value= {selectedOption} onChange={handleOptionChange}>
        <option value="">Sort by</option>
        <option value="option1">Price-Low to high</option>
        <option value="option1">Price-High to low</option>
        <option value="option1">Ratings</option>
      </select> */}
          {/* <div className="choice1 border bg-red-300 absolute bottom-0  left-0 rigth-0 w-full flex flex-col">
            <input type="radio" name="sortProducts" value="" id="sortByLowToHigh"/>
            <label htmlFor="sortByLowToHigh" >Price-Low to high</label> 
            <input type="radio" name="sortProducts" value="" id="sortByLowToHigh"/>
            <label htmlFor="sortByLowToHigh" >Price-High to low</label> 
            <input type="radio" name="sortProducts" value="" id="sortByLowToHigh"/>
            <label htmlFor="sortByLowToHigh" >Ratings</label> 
          </div> */}

      {/* <Sidebar /> */}
      <div className="container">
        <div className="container-title flex">
          <h1 className="title">Womans Clothing</h1>
          {/* <div className="sortbox border">
            Sort by
          </div> */}
          
        </div>
        <div className="container-cards">
          <h1>These are cards</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
