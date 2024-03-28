import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SidebarLg() {
  const [categories, setCategories] = useState([]);
  const [collection, setCollection] = useState([]);
  const [childCategories, setChildCategories] = useState([]);
  const [parentToggleCheck, setParentToggleCheck] = useState([]);

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

  // Featch Catgories & Update Menu to Show
  const fectChildCategories = async (parentId) => {
    try {
      const currentParent = parentToggleCheck.find((p) => p.id === parentId);
      if (currentParent) {
        setParentToggleCheck([
          ...parentToggleCheck.filter((p) => p.id !== currentParent.id),
          {
            id: currentParent.id,
            toggle: !currentParent.toggle,
          },
        ]);
      } else {
        setParentToggleCheck([
          ...parentToggleCheck,
          {
            id: parentId,
            toggle: true,
          },
        ]);
      }

      const newChildCategories = categories.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      setChildCategories(newChildCategories);
    } catch (error) {
      console.log(error);
    }
  };

  // Featch Collection & Update Menu to Show
  const fetchCollection = async (parentId) => {
    try {
      const response = await axios.get(
        "https://api.storefront.wdb.skooldio.dev/collections"
      );
      setCollection(response.data);
      const currentParent = parentToggleCheck.find((p) => p.id === parentId);
      if (currentParent) {
        setParentToggleCheck([
          ...parentToggleCheck.filter((p) => p.id !== currentParent.id),
          {
            id: currentParent.id,
            toggle: !currentParent.toggle,
          },
        ]);
      } else {
        setParentToggleCheck([
          ...parentToggleCheck,
          {
            id: parentId,
            toggle: true,
          },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col w-[15%]">
      {/*Categories Parent*/}
      {categories.map((category) => (
        <React.Fragment key={category.id}>
          {!category.parentId && (
            <div
              className="flex justify-between items-center py-3 cursor-pointer "
              onClick={() => fectChildCategories(category.id)}
            >
              <div className="text-[18px] leading-6 font-semibold">
                {category.name}
              </div>
              <svg
                className={`${
                  parentToggleCheck.find(
                    (p) => p.id === category.id && p.toggle
                  )
                    ? "-rotate-180 transition-all  duration-300 ease-in-out"
                    : "transition-all duration-300 ease-in-out"
                }`}
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.5877 22.5137L14.7447 16.6705C14.3849 16.3108 13.803 16.3102 13.4443 16.6689C13.0831 17.0301 13.0863 17.6098 13.4459 17.9693L19.9366 24.4601C19.9369 24.4604 19.9372 24.4606 19.9374 24.4609C19.9378 24.4612 19.938 24.4614 19.9382 24.4618C20.1186 24.642 20.3534 24.7316 20.588 24.7312C20.8233 24.7303 21.0579 24.6408 21.2371 24.4618C21.2373 24.4614 21.2376 24.4612 21.2379 24.4609C21.2382 24.4606 21.2384 24.4604 21.2387 24.4601L27.7297 17.9693C28.0894 17.6096 28.09 17.0276 27.7313 16.6689C27.3701 16.3077 26.7903 16.3109 26.4309 16.6705L20.5877 22.5137Z"
                  fill="#222222"
                />
              </svg>
            </div>
          )}
          {/* All Item Child */}
          {parentToggleCheck.map(
            (p) =>
              p.toggle &&
              p.id === category.id &&
              childCategories
                .filter((category) => category.parentId === null)
                .map(
                  (categoryAll) =>
                    p.id === categoryAll.id && (
                      <div
                        className="flex flex-col justify-center gap-2"
                        key={categoryAll.id}
                      >
                        <Link
                          to={`/products/categories/${categoryAll.permalink}`}
                          className="p-[10px] font-semibold text-sm text-[#262626] capitalize hover:bg-[#DEF81C] transition-all duration-100 ease-in-out rounded-md cursor-pointer"
                        >
                          {categoryAll.permalink.replace("-", " ")}
                        </Link>
                      </div>
                    )
                )
          )}

          {/* Categories Child */}
          {parentToggleCheck.map(
            (p) =>
              p.toggle &&
              p.id === category.id &&
              childCategories
                .filter((category) => category.parentId !== null)
                .map(
                  (categoryChild) =>
                    p.id === categoryChild.parentId && (
                      <div
                        className="flex flex-col justify-center gap-2"
                        key={categoryChild.id}
                      >
                        <Link
                          to={`/products/categories/${categoryChild.permalink}`}
                          className="p-[10px] font-semibold text-sm text-[#262626] hover:bg-[#DEF81C] transition-all duration-100 ease-in-out rounded-md cursor-pointer"
                        >
                          {categoryChild.name}
                        </Link>
                      </div>
                    )
                )
          )}
        </React.Fragment>
      ))}

      {/* Collection Parent */}
      <div
        className="flex justify-between items-center py-3 cursor-pointer "
        onClick={() => fetchCollection("collection")}
      >
        <div className="text-[18px] leading-6 font-semibold">Collection</div>
        <svg
          className={`${
            parentToggleCheck.find((p) => p.id === "collection" && p.toggle)
              ? "-rotate-180 transition-all  duration-100 ease-in-out"
              : "transition-all duration-700 ease-in-out"
          }`}
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.5877 22.5137L14.7447 16.6705C14.3849 16.3108 13.803 16.3102 13.4443 16.6689C13.0831 17.0301 13.0863 17.6098 13.4459 17.9693L19.9366 24.4601C19.9369 24.4604 19.9372 24.4606 19.9374 24.4609C19.9378 24.4612 19.938 24.4614 19.9382 24.4618C20.1186 24.642 20.3534 24.7316 20.588 24.7312C20.8233 24.7303 21.0579 24.6408 21.2371 24.4618C21.2373 24.4614 21.2376 24.4612 21.2379 24.4609C21.2382 24.4606 21.2384 24.4604 21.2387 24.4601L27.7297 17.9693C28.0894 17.6096 28.09 17.0276 27.7313 16.6689C27.3701 16.3077 26.7903 16.3109 26.4309 16.6705L20.5877 22.5137Z"
            fill="#222222"
          />
        </svg>
      </div>

      {/* Collection Child */}
      {parentToggleCheck.map(
        (p) =>
          p.toggle &&
          p.id === "collection" &&
          collection.map((collectionChild) => (
            <div
              className="flex flex-col justify-center gap-2"
              key={collectionChild.id}
            >
              <Link
                to={`/products/collection/${collectionChild.permalink}`}
                className="p-[10px] font-semibold text-sm text-[#262626] hover:bg-[#DEF81C] transition-all duration-300 ease-in-out rounded-md"
              >
                {collectionChild.name}
              </Link>
            </div>
          ))
      )}
    </div>
  );
}

export default SidebarLg;
