import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ isMenuToggle, handleMenuToggle, categories }) {
  const [hasParentId, setHasParentId] = useState("isParent");
  const [childCategories, setChildCategories] = useState([]);

  const fectChildCategories = async (parentId) => {
    const newChildCategories = categories
      .filter(
        (category) => category.parentId === parentId || category.id === parentId
      )
      .sort((a, b) => b.name.localeCompare(a.name));
    setChildCategories(newChildCategories);
    setHasParentId("isChild");
  };

  const fetchCollection = async () => {
    const response = await axios.get(
      "https://api.storefront.wdb.skooldio.dev/collections"
    );
    setChildCategories(response.data);
    setHasParentId("isCollection");
  };

  console.log(childCategories);
  return (
    <>
      {isMenuToggle && (
        <div
          className="absolute top-0 w-full h-screen bg-black opacity-50 z-20  lg:hidden transition-all delay-150 duration-300 ease-in-out"
          onClick={handleMenuToggle}
        ></div>
      )}

      <div
        className={`absolute top-0  w-[321px] h-screen bg-white z-30 rounded-e-2xl transition-all duration-300 ease-in-out shadow-2xl lg:hidden ${
          isMenuToggle ? "l-translate-x-full" : "-translate-x-full"
        } `}
      >
        <div className="flex flex-col pt-4">
          {/* Home & Back to Parent */}
          {hasParentId === "isParent" ? (
            <div className="flex justify-between items-center">
              <Link
                to={"/"}
                onClick={handleMenuToggle}
                className="flex justify-start items-center text-[18px] font-semibold leading-6 text-[#222] h-12 cursor-pointer px-8 w-full"
              >
                Home
              </Link>
            </div>
          ) : hasParentId === "isChild" ? (
            childCategories
              .filter((category) => category.parentId === null)
              .map((category) => (
                <React.Fragment key={`${new Date().getTime}${category.id}`}>
                  <div
                    className="flex justify-start items-center cursor-pointer border-b boder-[#E1E1E1] px-4 py-2"
                    onClick={() => {
                      setChildCategories([]);
                      setHasParentId("isParent");
                    }}
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.8857 20.5655L23.7289 26.4085C24.0886 26.7683 24.0892 27.3502 23.7305 27.7089C23.3694 28.0701 22.7897 28.0669 22.4301 27.7073L15.9393 21.2166C15.939 21.2163 15.9388 21.216 15.9385 21.2158C15.9382 21.2154 15.938 21.2152 15.9376 21.215C15.7574 21.0346 15.6678 20.7998 15.6682 20.5652C15.6691 20.3299 15.7587 20.0953 15.9376 19.9161C15.938 19.9159 15.9382 19.9156 15.9385 19.9153C15.9388 19.915 15.939 19.9148 15.9393 19.9145L22.4301 13.4235C22.7898 13.0638 23.3719 13.0632 23.7305 13.4219C24.0917 13.7831 24.0885 14.3629 23.7289 14.7223L17.8857 20.5655Z"
                        fill="#222222"
                      />
                    </svg>

                    <span className="flex justify-start items-center text-2xl font-bold leading-8 ps-20 text-[#222] h-12">
                      {category.name}
                    </span>
                  </div>
                  {/* All items */}
                  <Link
                    to={`/products/categories/${category.permalink}`}
                    onClick={() => {
                      setChildCategories([]);
                      setHasParentId("isParent");
                      handleMenuToggle();
                    }}
                    className="flex justify-start items-center text-[18px] capitalize font-semibold leading-6 text-[#222] h-12 cursor-pointer hover:bg-[#DEF81C] transition-all duration-100 ease-in-out rounded-md px-8 py-3 "
                  >
                    {category.permalink.replace("-", " ")}
                  </Link>
                </React.Fragment>
              ))
          ) : (
            <div
              className="flex justify-start items-center cursor-pointer border-b boder-[#E1E1E1] px-4 py-2"
              onClick={() => {
                setChildCategories([]);
                setHasParentId("isParent");
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.8857 20.5655L23.7289 26.4085C24.0886 26.7683 24.0892 27.3502 23.7305 27.7089C23.3694 28.0701 22.7897 28.0669 22.4301 27.7073L15.9393 21.2166C15.939 21.2163 15.9388 21.216 15.9385 21.2158C15.9382 21.2154 15.938 21.2152 15.9376 21.215C15.7574 21.0346 15.6678 20.7998 15.6682 20.5652C15.6691 20.3299 15.7587 20.0953 15.9376 19.9161C15.938 19.9159 15.9382 19.9156 15.9385 19.9153C15.9388 19.915 15.939 19.9148 15.9393 19.9145L22.4301 13.4235C22.7898 13.0638 23.3719 13.0632 23.7305 13.4219C24.0917 13.7831 24.0885 14.3629 23.7289 14.7223L17.8857 20.5655Z"
                  fill="#222222"
                />
              </svg>

              <span className="flex justify-start items-center text-2xl font-bold leading-8 ps-20 text-[#222] h-12">
                Collection
              </span>
            </div>
          )}

          {/* Parent*/}
          {hasParentId === "isParent"
            ? categories.map(
                (category) =>
                  !category.parentId && (
                    <div
                      className="flex justify-between items-center gap-2 cursor-pointer text-[#222] hover:bg-[#DEF81C] transition-all duration-100 ease-in-out rounded-md px-8 py-3"
                      key={`${new Date().getTime}${category.id}`}
                      onClick={() => fectChildCategories(category.id)}
                    >
                      <span className="flex items-center text-[18px] font-semibold leading-6 text-[#222] h-12">
                        {category.name}
                      </span>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M23.3995 20.5655L17.5562 26.4085C17.1965 26.7683 17.196 27.3502 17.5546 27.7089C17.9158 28.0701 18.4955 28.0669 18.8551 27.7073L25.3458 21.2166C25.3462 21.2163 25.3464 21.216 25.3466 21.2158C25.3469 21.2154 25.3472 21.2152 25.3475 21.215C25.5278 21.0346 25.6173 20.7998 25.617 20.5652C25.6161 20.3299 25.5265 20.0953 25.3475 19.9161C25.3472 19.9159 25.3469 19.9156 25.3466 19.9153C25.3464 19.915 25.3462 19.9148 25.3458 19.9145L18.8551 13.4235C18.4954 13.0638 17.9133 13.0632 17.5546 13.4219C17.1935 13.7831 17.1967 14.3629 17.5562 14.7223L23.3995 20.5655Z"
                          fill="#222222"
                        />
                      </svg>
                    </div>
                  )
              )
            : hasParentId === "isChild"
            ? //Other Child
              childCategories
                .filter((category) => category.parentId !== null)
                .map((category) => (
                  <Link
                    to={`/products/categories/${category.permalink}`}
                    onClick={() => {
                      setChildCategories([]);
                      setHasParentId("isParent");
                      handleMenuToggle();
                    }}
                    className="flex justify-between items-center gap-2 cursor-pointer text-[#222] hover:bg-[#DEF81C] transition-all duration-100 ease-in-out rounded-md "
                    key={`${new Date().getTime}${category.id}`}
                  >
                    <span className="flex items-center text-[18px] font-semibold leading-6 text-[#222] h-12 px-8 py-3">
                      {category.name}
                    </span>
                  </Link>
                ))
            : childCategories.map((collection) => (
                <Link
                  key={`${new Date().getTime}${collection.id}`}
                  to={`/products/collection/${collection.permalink}`}
                  onClick={() => {
                    setChildCategories([]);
                    setHasParentId("isParent");
                    handleMenuToggle();
                  }}
                  className="flex justify-between items-center gap-2 cursor-pointer text-[#222] hover:bg-[#DEF81C] transition-all duration-100 ease-in-out rounded-md "
                >
                  <span className="flex items-center text-[18px] font-semibold leading-6 text-[#222] h-12 px-8 py-3">
                    {collection.name}
                  </span>
                </Link>
              ))}

          {/* Collection */}
          {hasParentId === "isParent" ? (
            <div
              className="flex justify-between items-center gap-2 cursor-pointer text-[#222] hover:bg-[#DEF81C] transition-all duration-100 ease-in-out rounded-md px-8 py-3"
              onClick={() => fetchCollection()}
            >
              <span className="flex items-center text-[18px] font-semibold leading-6 text-[#222] h-12">
                Collection
              </span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.3995 20.5655L17.5562 26.4085C17.1965 26.7683 17.196 27.3502 17.5546 27.7089C17.9158 28.0701 18.4955 28.0669 18.8551 27.7073L25.3458 21.2166C25.3462 21.2163 25.3464 21.216 25.3466 21.2158C25.3469 21.2154 25.3472 21.2152 25.3475 21.215C25.5278 21.0346 25.6173 20.7998 25.617 20.5652C25.6161 20.3299 25.5265 20.0953 25.3475 19.9161C25.3472 19.9159 25.3469 19.9156 25.3466 19.9153C25.3464 19.915 25.3462 19.9148 25.3458 19.9145L18.8551 13.4235C18.4954 13.0638 17.9133 13.0632 17.5546 13.4219C17.1935 13.7831 17.1967 14.3629 17.5562 14.7223L23.3995 20.5655Z"
                  fill="#222222"
                />
              </svg>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
