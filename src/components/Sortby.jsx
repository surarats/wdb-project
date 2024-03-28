import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

function Sortby({ manage, category }) {
  const [isSortToggle, setIsSortToggle] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const navigate = useNavigate();

  const matches = useMediaQuery("(min-width:1024px)");

  const handleSortToggle = () => {
    setIsSortToggle(!isSortToggle);
  };

  document.querySelector("body").style.overflow = isSortToggle
    ? "hidden"
    : "scroll";

  const handleSortTogglePC = () => {
    setIsSortToggle(!isSortToggle);
  };

  const handleOptionChange = (
    option,
    manage = "",
    category = "",
    type = ""
  ) => {
    if (type === "desktop") {
      setSelectedOption(option);
      setDeviceType("desktop");
    } else {
      setSelectedOption(option);
    }
  };

  const handleSort = async (manage, categories) => {
    navigate(`/products/${manage}/${categories}/${selectedOption}`);
    setIsSortToggle(!isSortToggle);
  };

  const handleUncheck = () => {
    setSelectedOption("");
  };

  const desktopOptions = [
    { label: "Price-Low to high", value: "promotionalPrice:asc" },
    { label: "Price-High to low", value: "promotionalPrice:desc" },
    { label: "Ratings", value: "ratings:desc" },
  ];

  useEffect(() => {
    if (deviceType === "desktop") {
      handleSort(manage, category);
      setDeviceType("");
    }
  }, [deviceType, selectedOption]);

  return (
    <>
      {/* Mobile Sort */}
      <div>
        <div
          className="flex items-center mb-[22px] text-[18px] leading-6 font-semibold cursor-pointer lg:hidden"
          onClick={handleSortToggle}
        >
          Sort by
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 16L32 16"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M9 16H22"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M9 24H14"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M20 24L32 24"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="17" cy="24" r="3" stroke="#222222" strokeWidth="2" />
            <circle cx="25" cy="16" r="3" stroke="#222222" strokeWidth="2" />
          </svg>
        </div>

        {isSortToggle && (
          <div
            className="absolute top-0 left-0 w-full h-screen bg-black opacity-50 z-10  lg:hidden transition-all delay-150 duration-300 ease-in-out"
            onClick={handleSortToggle}
          ></div>
        )}
        <div
          className={`bg-white w-full fixed left-0 rounded-t-2xl px-[18px] z-20 lg:hidden ${
            isSortToggle ? "bottom-0" : "bottom-[-100%]"
          } transition-all  duration-300 ease-in-out`}
        >
          <div className="header-sortby flex justify-between py-8">
            <div
              className="text-[16px] text-[#3366FF] leading-5 font-normal cursor-pointer"
              onClick={handleSortToggle}
            >
              Cancel
            </div>
            <div className="text-[18px] leading-6 font-normal">Sort by</div>
            <div
              className="text-[16px] text-[#3366FF] leading-5 font-normal cursor-pointer"
              onClick={handleUncheck}
            >
              Reset
            </div>
          </div>
          {desktopOptions.map((option, index) => (
            <React.Fragment key={index}>
              <div className="flex justify-start items-center">
                <input
                  type="radio"
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={() => handleOptionChange(option.value)}
                  className="ml-[18px] h-6 w-6 radio checked:bg-[#C1CD00]"
                  name={option.label}
                />
                <label
                  className="text-[16px] leading-5 font-normal ml-4 my-3"
                  htmlFor={option.label}
                >
                  {option.label}
                </label>
              </div>
            </React.Fragment>
          ))}
          <div className="flex justify-center pb-[22px]">
            <button
              type="button"
              onClick={() => handleSort(manage, category)}
              className="bg-black text-white font-semibold py-[17px] px-[147px] mt-6"
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Desktop sort */}
      {matches && (
        <div className="flex flex-col justify-end dropdown relative ">
          <div className="flex items-center mb-[68px] border border-[#C1CD00]">
            <button
              type="button"
              className="dropdown-toggle text-[16px] leading-5 font-normal ml-2.5 mr-2 my-[17px]"
              onClick={handleSortTogglePC}
            >
              Sort by
            </button>
            <svg
              width="15"
              height="9"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`mr-[22px] ${
                isSortToggle
                  ? "-rotate-180 transition-all  duration-100 ease-in-out"
                  : "transition-all duration-700 ease-in-out"
              }`}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.58756 6.51374L1.7446 0.670487C1.3848 0.310804 0.80284 0.31022 0.444178 0.668892C0.0830068 1.03006 0.086215 1.60975 0.445772 1.96932L6.93652 8.46007C6.93675 8.46041 6.93709 8.46064 6.93732 8.46086C6.93766 8.46121 6.93789 8.46143 6.93812 8.46177C7.11847 8.64202 7.35328 8.73157 7.58786 8.73123C7.82313 8.73031 8.05783 8.64076 8.23694 8.46177C8.23717 8.46143 8.23751 8.46121 8.23773 8.46086C8.23808 8.46064 8.2383 8.46041 8.23853 8.46007L14.7296 1.96932C15.0893 1.60963 15.0898 1.02756 14.7312 0.668893C14.37 0.307722 13.7902 0.31093 13.4307 0.670488L7.58756 6.51374Z"
                fill="#222222"
              />
            </svg>
          </div>

          <div
            id="options"
            className={`flex flex-col dropdown-content absolute top-[50%] right-0 ${
              isSortToggle ? "z-10" : "z-[-1]"
            }  bg-white min-w-[235px] border border-[#E1E1E1]`}
          >
            {desktopOptions.map((option) => (
              <div
                key={option.value}
                className="flex gap-2 p-6  w-full items-center"
              >
                <input
                  type="radio"
                  id={option.value}
                  name="option"
                  value={option.value}
                  checked={selectedOption === option.value}
                  onChange={() =>
                    handleOptionChange(
                      option.value,
                      manage,
                      category,
                      "desktop"
                    )
                  }
                  className=" h-6 w-6 radio checked:bg-[#C1CD00]"
                />
                <label
                  htmlFor={option.value}
                  className="text-[16px] leading-5 font-normal"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Sortby;
