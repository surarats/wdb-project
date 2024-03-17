import { useEffect, useState } from "react";
import axios from "axios";

// shoes-chelsea-boots
// shirts-relaxed-tailored-jacket
// shoes-fashionable-high-top-canvas-sneakers

const permalink = "shoes-chelsea-boots";

function ProductDetail() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [remains, setRemains] = useState([]);
  const [colorCode, setColorCode] = useState([]);

  // console.log(products.variants);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://api.storefront.wdb.skooldio.dev/products/${permalink}`
        );
        setProducts(result.data);

        const variantColors = result.data.variants.map(
          (variant) => variant.color
        );
        const variantSizes = result.data.variants.map(
          (variant) => variant.size
        );
        const variantRemains = result.data.variants.map(
          (variant) => variant.remains
        );
        const variantColorCode = result.data.variants.map(
          (variant) => variant.colorCode
        );

        console.log(colors);
        console.log(sizes);
        console.log(remains);
        console.log(colorCode);

        setColors(variantColors);
        setSizes(variantSizes);
        setRemains(variantRemains);
        setColorCode(variantColorCode);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Check discount
  const hasDiscount = () => {
    return products.price !== products.promotionalPrice;
  };

  // Button function
  const nextButton = () => {
    const nextIndex = (currentImageIndex + 1) % products.imageUrls.length;
    setCurrentImageIndex(nextIndex);
  };

  const previousButton = () => {
    const prevIndex =
      (currentImageIndex - 1 + products.imageUrls.length) %
      products.imageUrls.length;
    setCurrentImageIndex(prevIndex);
  };

  return (
    <main className="mx-auto lg:max-w-[1600px] lg:min-h-screen">
      {/* Div that wrap the image section and detail section */}
      <div className="mb-20 lg:flex lg:gap-10 lg:mb-[145px]">
        {/* Image section */}
        {isLoading ? (
          <div>Loading product details...</div>
        ) : (
          <div className=" m-4 my-10 lg:basis-1/2 lg:m-0 lg:mt-28">
            {/* Main preview image */}
            <div className="relative grid grid-cols-1">
              <img
                src={
                  products.imageUrls && products.imageUrls[currentImageIndex]
                }
                alt="Main Product Image"
                className="w-full object-cover lg:max-w-[780px] lg:max-h-[780px]"
              />
              {/* Rendering condition for discount items */}
              {hasDiscount() && (
                <div>
                  <svg
                    width="42"
                    height="26"
                    viewBox="0 0 42 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="block absolute top-[14px] right-0 lg:hidden"
                  >
                    <rect
                      width="40.7443"
                      height="25.0654"
                      transform="translate(0.983398 0.0717773)"
                      fill="#FF000D"
                    />
                    <path
                      d="M11.8705 17.1871C11.3279 17.1871 10.8404 17.0927 10.4079 16.904C9.98324 16.7074 9.64904 16.44 9.40527 16.1019C9.16149 15.7559 9.03567 15.3588 9.02781 14.9105H10.172C10.2113 15.2959 10.3686 15.6222 10.6438 15.8896C10.9269 16.1491 11.3358 16.2788 11.8705 16.2788C12.3817 16.2788 12.7827 16.153 13.0737 15.9014C13.3725 15.6419 13.5219 15.3116 13.5219 14.9105C13.5219 14.596 13.4354 14.3404 13.2624 14.1438C13.0894 13.9472 12.8731 13.7978 12.6136 13.6956C12.3541 13.5934 12.0042 13.4833 11.5638 13.3653C11.0212 13.2238 10.5848 13.0822 10.2545 12.9407C9.93213 12.7991 9.65297 12.579 9.41706 12.2801C9.18902 11.9735 9.07499 11.5646 9.07499 11.0534C9.07499 10.6052 9.18902 10.2081 9.41706 9.86207C9.64511 9.51607 9.96359 9.24871 10.3725 9.05998C10.7893 8.87125 11.265 8.77689 11.7997 8.77689C12.5704 8.77689 13.1995 8.96955 13.687 9.35487C14.1824 9.74018 14.4616 10.2513 14.5245 10.8883H13.345C13.3056 10.5737 13.1405 10.2985 12.8495 10.0626C12.5586 9.81882 12.1733 9.69693 11.6936 9.69693C11.2454 9.69693 10.8797 9.81489 10.5966 10.0508C10.3135 10.2788 10.172 10.6013 10.172 11.018C10.172 11.3168 10.2545 11.5606 10.4197 11.7493C10.5927 11.9381 10.8011 12.0836 11.0448 12.1858C11.2965 12.2801 11.6464 12.3902 12.0946 12.5161C12.6372 12.6655 13.0737 12.8149 13.4039 12.9643C13.7342 13.1058 14.0173 13.3299 14.2532 13.6366C14.4891 13.9354 14.6071 14.3444 14.6071 14.8634C14.6071 15.2644 14.5009 15.6419 14.2886 15.9957C14.0763 16.3496 13.7617 16.6366 13.345 16.8568C12.9282 17.077 12.4367 17.1871 11.8705 17.1871ZM15.7856 13.8489C15.7856 13.1884 15.9193 12.6104 16.1867 12.115C16.454 11.6117 16.8197 11.2225 17.2836 10.9473C17.7554 10.672 18.2784 10.5344 18.8524 10.5344C19.4186 10.5344 19.9101 10.6563 20.3269 10.9001C20.7436 11.1438 21.0542 11.4505 21.2587 11.8201V10.6406H22.3439V17.1045H21.2587V15.9014C21.0464 16.2788 20.7279 16.5934 20.3033 16.845C19.8865 17.0888 19.399 17.2107 18.8406 17.2107C18.2666 17.2107 17.7476 17.0691 17.2836 16.786C16.8197 16.5029 16.454 16.1058 16.1867 15.5947C15.9193 15.0835 15.7856 14.5016 15.7856 13.8489ZM21.2587 13.8607C21.2587 13.3732 21.1604 12.9486 20.9638 12.5868C20.7672 12.2251 20.4999 11.9499 20.1617 11.7611C19.8315 11.5646 19.4658 11.4663 19.0647 11.4663C18.6637 11.4663 18.298 11.5606 17.9678 11.7493C17.6375 11.9381 17.3741 12.2133 17.1775 12.575C16.9809 12.9368 16.8826 13.3614 16.8826 13.8489C16.8826 14.3444 16.9809 14.7769 17.1775 15.1464C17.3741 15.5082 17.6375 15.7873 17.9678 15.9839C18.298 16.1726 18.6637 16.267 19.0647 16.267C19.4658 16.267 19.8315 16.1726 20.1617 15.9839C20.4999 15.7873 20.7672 15.5082 20.9638 15.1464C21.1604 14.7769 21.2587 14.3483 21.2587 13.8607ZM25.2312 8.37584V17.1045H24.1578V8.37584H25.2312ZM32.9583 13.6248C32.9583 13.8293 32.9465 14.0455 32.923 14.2736H27.7565C27.7959 14.9105 28.0121 15.4099 28.4053 15.7716C28.8063 16.1255 29.2899 16.3024 29.8561 16.3024C30.3201 16.3024 30.7054 16.1962 31.0121 15.9839C31.3266 15.7637 31.5468 15.4728 31.6726 15.1111H32.8286C32.6556 15.7323 32.3096 16.2395 31.7906 16.6327C31.2716 17.018 30.6268 17.2107 29.8561 17.2107C29.2428 17.2107 28.6923 17.073 28.2048 16.7978C27.7251 16.5226 27.3476 16.1333 27.0724 15.6301C26.7972 15.1189 26.6596 14.5291 26.6596 13.8607C26.6596 13.1923 26.7932 12.6065 27.0606 12.1032C27.328 11.5999 27.7015 11.2146 28.1812 10.9473C28.6687 10.672 29.227 10.5344 29.8561 10.5344C30.4695 10.5344 31.0121 10.6681 31.4839 10.9355C31.9557 11.2028 32.3175 11.5724 32.5691 12.0442C32.8286 12.5082 32.9583 13.0351 32.9583 13.6248ZM31.8496 13.4007C31.8496 12.9918 31.7591 12.6419 31.5783 12.3509C31.3974 12.0521 31.1497 11.828 30.8352 11.6786C30.5285 11.5213 30.1864 11.4427 29.8089 11.4427C29.2664 11.4427 28.8024 11.6157 28.4171 11.9617C28.0396 12.3077 27.8234 12.7873 27.7683 13.4007H31.8496Z"
                      fill="white"
                    />
                  </svg>
                  <svg
                    width="91"
                    height="57"
                    viewBox="0 0 42 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:block hidden absolute top-[32px] right-0"
                  >
                    <rect
                      width="40.7443"
                      height="25.0654"
                      transform="translate(0.983398 0.0717773)"
                      fill="#FF000D"
                    />
                    <path
                      d="M11.8705 17.1871C11.3279 17.1871 10.8404 17.0927 10.4079 16.904C9.98324 16.7074 9.64904 16.44 9.40527 16.1019C9.16149 15.7559 9.03567 15.3588 9.02781 14.9105H10.172C10.2113 15.2959 10.3686 15.6222 10.6438 15.8896C10.9269 16.1491 11.3358 16.2788 11.8705 16.2788C12.3817 16.2788 12.7827 16.153 13.0737 15.9014C13.3725 15.6419 13.5219 15.3116 13.5219 14.9105C13.5219 14.596 13.4354 14.3404 13.2624 14.1438C13.0894 13.9472 12.8731 13.7978 12.6136 13.6956C12.3541 13.5934 12.0042 13.4833 11.5638 13.3653C11.0212 13.2238 10.5848 13.0822 10.2545 12.9407C9.93213 12.7991 9.65297 12.579 9.41706 12.2801C9.18902 11.9735 9.07499 11.5646 9.07499 11.0534C9.07499 10.6052 9.18902 10.2081 9.41706 9.86207C9.64511 9.51607 9.96359 9.24871 10.3725 9.05998C10.7893 8.87125 11.265 8.77689 11.7997 8.77689C12.5704 8.77689 13.1995 8.96955 13.687 9.35487C14.1824 9.74018 14.4616 10.2513 14.5245 10.8883H13.345C13.3056 10.5737 13.1405 10.2985 12.8495 10.0626C12.5586 9.81882 12.1733 9.69693 11.6936 9.69693C11.2454 9.69693 10.8797 9.81489 10.5966 10.0508C10.3135 10.2788 10.172 10.6013 10.172 11.018C10.172 11.3168 10.2545 11.5606 10.4197 11.7493C10.5927 11.9381 10.8011 12.0836 11.0448 12.1858C11.2965 12.2801 11.6464 12.3902 12.0946 12.5161C12.6372 12.6655 13.0737 12.8149 13.4039 12.9643C13.7342 13.1058 14.0173 13.3299 14.2532 13.6366C14.4891 13.9354 14.6071 14.3444 14.6071 14.8634C14.6071 15.2644 14.5009 15.6419 14.2886 15.9957C14.0763 16.3496 13.7617 16.6366 13.345 16.8568C12.9282 17.077 12.4367 17.1871 11.8705 17.1871ZM15.7856 13.8489C15.7856 13.1884 15.9193 12.6104 16.1867 12.115C16.454 11.6117 16.8197 11.2225 17.2836 10.9473C17.7554 10.672 18.2784 10.5344 18.8524 10.5344C19.4186 10.5344 19.9101 10.6563 20.3269 10.9001C20.7436 11.1438 21.0542 11.4505 21.2587 11.8201V10.6406H22.3439V17.1045H21.2587V15.9014C21.0464 16.2788 20.7279 16.5934 20.3033 16.845C19.8865 17.0888 19.399 17.2107 18.8406 17.2107C18.2666 17.2107 17.7476 17.0691 17.2836 16.786C16.8197 16.5029 16.454 16.1058 16.1867 15.5947C15.9193 15.0835 15.7856 14.5016 15.7856 13.8489ZM21.2587 13.8607C21.2587 13.3732 21.1604 12.9486 20.9638 12.5868C20.7672 12.2251 20.4999 11.9499 20.1617 11.7611C19.8315 11.5646 19.4658 11.4663 19.0647 11.4663C18.6637 11.4663 18.298 11.5606 17.9678 11.7493C17.6375 11.9381 17.3741 12.2133 17.1775 12.575C16.9809 12.9368 16.8826 13.3614 16.8826 13.8489C16.8826 14.3444 16.9809 14.7769 17.1775 15.1464C17.3741 15.5082 17.6375 15.7873 17.9678 15.9839C18.298 16.1726 18.6637 16.267 19.0647 16.267C19.4658 16.267 19.8315 16.1726 20.1617 15.9839C20.4999 15.7873 20.7672 15.5082 20.9638 15.1464C21.1604 14.7769 21.2587 14.3483 21.2587 13.8607ZM25.2312 8.37584V17.1045H24.1578V8.37584H25.2312ZM32.9583 13.6248C32.9583 13.8293 32.9465 14.0455 32.923 14.2736H27.7565C27.7959 14.9105 28.0121 15.4099 28.4053 15.7716C28.8063 16.1255 29.2899 16.3024 29.8561 16.3024C30.3201 16.3024 30.7054 16.1962 31.0121 15.9839C31.3266 15.7637 31.5468 15.4728 31.6726 15.1111H32.8286C32.6556 15.7323 32.3096 16.2395 31.7906 16.6327C31.2716 17.018 30.6268 17.2107 29.8561 17.2107C29.2428 17.2107 28.6923 17.073 28.2048 16.7978C27.7251 16.5226 27.3476 16.1333 27.0724 15.6301C26.7972 15.1189 26.6596 14.5291 26.6596 13.8607C26.6596 13.1923 26.7932 12.6065 27.0606 12.1032C27.328 11.5999 27.7015 11.2146 28.1812 10.9473C28.6687 10.672 29.227 10.5344 29.8561 10.5344C30.4695 10.5344 31.0121 10.6681 31.4839 10.9355C31.9557 11.2028 32.3175 11.5724 32.5691 12.0442C32.8286 12.5082 32.9583 13.0351 32.9583 13.6248ZM31.8496 13.4007C31.8496 12.9918 31.7591 12.6419 31.5783 12.3509C31.3974 12.0521 31.1497 11.828 30.8352 11.6786C30.5285 11.5213 30.1864 11.4427 29.8089 11.4427C29.2664 11.4427 28.8024 11.6157 28.4171 11.9617C28.0396 12.3077 27.8234 12.7873 27.7683 13.4007H31.8496Z"
                      fill="white"
                    />
                  </svg>
                </div>
              )}
              {/* Arrow next/Previous button */}
              <button
                className="absolute opacity-60 top-1/2 left-2 p-2 bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-700 lg:h-[70px] lg:w-[70px] lg:left-4"
                onClick={previousButton}
              >
                <div className="lg:flex lg:justify-center">
                  <svg
                    className="h-[15px] w-[15px] text-black lg:h-[36px] lg:w-[36px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 5l-7 7 7 7"
                    />
                  </svg>
                </div>
              </button>
              <button
                className="absolute opacity-60 top-1/2 right-2 p-2 bg-white rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-700 lg:h-[70px] lg:w-[70px] lg:right-4"
                onClick={nextButton}
              >
                <div className="lg:flex lg:justify-center">
                  <svg
                    className="h-[15px] w-[15px] text-black lg:h-[36px] lg:w-[36px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            </div>

            {/* Thumbnail gallery */}
            <div className="grid grid-cols-4 place-items-center gap-2 mt-4 lg:gap-[31px] lg:mt-[31px]">
              {products.imageUrls &&
                products.imageUrls.slice(1).map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Product image ${index + 1}`}
                    className={`w-full object-cover  lg:max-w-[172px] lg:max-h-[172px] cursor-pointer ${
                      index ===
                        (currentImageIndex - 1 + products.imageUrls.length) %
                          products.imageUrls.length &&
                      "border-2 border-primary-700"
                    }`}
                    onClick={() => setCurrentImageIndex(index + 1)} // Adjust index for click handler
                  />
                ))}
            </div>
          </div>
        )}
        {/* Detail Section */}
        <div className="mx-4 lg:basis-1/2 lg:mx-0 lg:m-0 lg:mt-28 ">
          <p className="text-lg font-semibold mb-1 lg:text-2lg lg:font-bold lg:mb-4">
            id : {products.id}
          </p>
          <h4 className="text-[40px] font-bold mb-1 lg:text-5lg lg:mb-4">
            {products.name}
          </h4>
          <p className="text-lg font-semibold text-secondary-700 mb-7 lg:text-lg lg:mb-6 lg:text-secondary-s">
            {products.description}
          </p>
          <p className="text-[32px] font-bold mb-7 lg:text-[40px] lg:mb-6">
            THB {products.price}.00
          </p>
          <button className="bg-black w-full h-[54px] text-base text-white">
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;

