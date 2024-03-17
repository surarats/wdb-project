import { useEffect, useState } from "react";
import axios from "axios";

// shoes-chelsea-boots
// shirts-relaxed-tailored-jacket
// shoes-fashionable-high-top-canvas-sneakers

const permalink = "shirts-relaxed-tailored-jacket";

function ProductDetail() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [remains, setRemains] = useState([]);
  const [colorCode, setColorCode] = useState([]);
  const [stock, setStock] = useState(0);

  // console.log(products.variants);

  // `https://api.storefront.wdb.skooldio.dev/products/${permalink}`

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

  // Check Stock
  useEffect(() => {
    if (remains.length > 0) {
      // Check if remains has data
      const totalStock = remains.reduce(
        (accumulator, current) => accumulator + current,
        0
      );
      setStock(totalStock);
    }
  }, [remains]);

  // Check discount
  const hasDiscount = () => {
    return products.price !== products.promotionalPrice;
  };

  console.log(colors);
  console.log(sizes);
  console.log(remains);
  console.log(colorCode);
  console.log(stock);

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
              {stock == 0 ? (
                <div>
                  <img
                    src={
                      products.imageUrls &&
                      products.imageUrls[currentImageIndex]
                    }
                    alt="Main Product Image"
                    className="w-full object-cover aspect-square brightness-[0.5] lg:max-w-[780px] lg:max-h-[780px]"
                  />
                  <div>
                    <svg
                      width="87"
                      height="26"
                      viewBox="0 0 87 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="block absolute top-[14px] right-0 lg:hidden"
                    >
                      <rect
                        width="85.7443"
                        height="25.0654"
                        transform="translate(0.983398 0.0717773)"
                        fill="#222222"
                      />
                      <path
                        d="M12.9911 17.1871C12.2283 17.1871 11.5324 17.0101 10.9033 16.6563C10.2742 16.2945 9.77486 15.7952 9.40527 15.1582C9.04354 14.5134 8.86267 13.79 8.86267 12.9879C8.86267 12.1858 9.04354 11.4663 9.40527 10.8293C9.77486 10.1845 10.2742 9.68514 10.9033 9.33127C11.5324 8.96955 12.2283 8.78868 12.9911 8.78868C13.7617 8.78868 14.4616 8.96955 15.0907 9.33127C15.7198 9.68514 16.2152 10.1805 16.5769 10.8175C16.9386 11.4545 17.1195 12.1779 17.1195 12.9879C17.1195 13.7978 16.9386 14.5213 16.5769 15.1582C16.2152 15.7952 15.7198 16.2945 15.0907 16.6563C14.4616 17.0101 13.7617 17.1871 12.9911 17.1871ZM12.9911 16.2552C13.5651 16.2552 14.0802 16.1215 14.5363 15.8542C15.0003 15.5868 15.362 15.2054 15.6215 14.71C15.8888 14.2146 16.0225 13.6406 16.0225 12.9879C16.0225 12.3273 15.8888 11.7533 15.6215 11.2657C15.362 10.7703 15.0042 10.3889 14.5481 10.1216C14.092 9.85421 13.573 9.72052 12.9911 9.72052C12.4092 9.72052 11.8902 9.85421 11.4341 10.1216C10.978 10.3889 10.6163 10.7703 10.3489 11.2657C10.0894 11.7533 9.95965 12.3273 9.95965 12.9879C9.95965 13.6406 10.0894 14.2146 10.3489 14.71C10.6163 15.2054 10.978 15.5868 11.4341 15.8542C11.898 16.1215 12.417 16.2552 12.9911 16.2552ZM24.2691 10.6406V17.1045H23.1957V16.1491C22.9913 16.4793 22.7043 16.7388 22.3347 16.9276C21.9729 17.1084 21.5719 17.1989 21.1315 17.1989C20.6283 17.1989 20.1761 17.0966 19.7751 16.8922C19.374 16.6799 19.0555 16.3653 18.8196 15.9485C18.5916 15.5318 18.4776 15.0246 18.4776 14.4269V10.6406H19.5391V14.2854C19.5391 14.9223 19.7003 15.4138 20.0228 15.7598C20.3452 16.0979 20.7855 16.267 21.3439 16.267C21.9179 16.267 22.3701 16.0901 22.7003 15.7362C23.0306 15.3824 23.1957 14.8673 23.1957 14.191V10.6406H24.2691ZM27.3908 11.5252V15.3352C27.3908 15.6497 27.4576 15.8738 27.5913 16.0075C27.725 16.1333 27.957 16.1962 28.2872 16.1962H29.0775V17.1045H28.1103C27.5127 17.1045 27.0644 16.9669 26.7656 16.6917C26.4668 16.4164 26.3174 15.9643 26.3174 15.3352V11.5252H25.4799V10.6406H26.3174V9.0128H27.3908V10.6406H29.0775V11.5252H27.3908ZM36.3419 17.2107C35.7364 17.2107 35.1859 17.073 34.6905 16.7978C34.203 16.5226 33.8177 16.1333 33.5346 15.6301C33.2593 15.1189 33.1217 14.5291 33.1217 13.8607C33.1217 13.2002 33.2633 12.6183 33.5464 12.115C33.8373 11.6039 34.2305 11.2146 34.7259 10.9473C35.2213 10.672 35.7757 10.5344 36.3891 10.5344C37.0024 10.5344 37.5568 10.672 38.0522 10.9473C38.5476 11.2146 38.9369 11.5999 39.22 12.1032C39.5109 12.6065 39.6564 13.1923 39.6564 13.8607C39.6564 14.5291 39.507 15.1189 39.2082 15.6301C38.9172 16.1333 38.5201 16.5226 38.0168 16.7978C37.5136 17.073 36.9553 17.2107 36.3419 17.2107ZM36.3419 16.267C36.7272 16.267 37.0889 16.1766 37.4271 15.9957C37.7652 15.8149 38.0365 15.5436 38.241 15.1818C38.4533 14.8201 38.5594 14.3797 38.5594 13.8607C38.5594 13.3417 38.4572 12.9014 38.2528 12.5396C38.0483 12.1779 37.7809 11.9106 37.4507 11.7376C37.1204 11.5567 36.7626 11.4663 36.3773 11.4663C35.9841 11.4663 35.6224 11.5567 35.2921 11.7376C34.9697 11.9106 34.7102 12.1779 34.5136 12.5396C34.317 12.9014 34.2187 13.3417 34.2187 13.8607C34.2187 14.3876 34.3131 14.8319 34.5018 15.1936C34.6984 15.5554 34.9579 15.8266 35.2803 16.0075C35.6027 16.1805 35.9566 16.267 36.3419 16.267ZM43.6981 11.5252H42.3416V17.1045H41.2683V11.5252H40.4308V10.6406H41.2683V10.1805C41.2683 9.45709 41.453 8.93023 41.8226 8.59996C42.2001 8.26182 42.8017 8.09275 43.6273 8.09275V8.98921C43.1555 8.98921 42.8213 9.08357 42.6247 9.2723C42.436 9.45316 42.3416 9.75591 42.3416 10.1805V10.6406H43.6981V11.5252ZM50.3827 17.2107C49.8872 17.2107 49.4429 17.1281 49.0498 16.9629C48.6566 16.7899 48.346 16.554 48.1179 16.2552C47.8899 15.9485 47.7641 15.5986 47.7405 15.2054H48.8492C48.8807 15.5278 49.0301 15.7913 49.2975 15.9957C49.5727 16.2002 49.9305 16.3024 50.3709 16.3024C50.7798 16.3024 51.1022 16.212 51.3381 16.0311C51.574 15.8502 51.6919 15.6222 51.6919 15.347C51.6919 15.0639 51.5661 14.8555 51.3145 14.7218C51.0629 14.5803 50.6736 14.4426 50.1467 14.309C49.6671 14.1831 49.2739 14.0573 48.9672 13.9315C48.6684 13.7978 48.4089 13.6052 48.1887 13.3535C47.9764 13.094 47.8702 12.7559 47.8702 12.3391C47.8702 12.0088 47.9685 11.7061 48.1651 11.4309C48.3617 11.1556 48.6409 10.9394 49.0026 10.7821C49.3643 10.617 49.7771 10.5344 50.2411 10.5344C50.9567 10.5344 51.5347 10.7153 51.975 11.077C52.4154 11.4387 52.6513 11.9341 52.6828 12.5632H51.6094C51.5858 12.2251 51.4482 11.9538 51.1965 11.7493C50.9528 11.5449 50.6225 11.4427 50.2057 11.4427C49.8204 11.4427 49.5137 11.5252 49.2857 11.6904C49.0576 11.8555 48.9436 12.0718 48.9436 12.3391C48.9436 12.5514 49.0104 12.7284 49.1441 12.8699C49.2857 13.0036 49.4587 13.1137 49.6631 13.2002C49.8754 13.2788 50.1664 13.3693 50.536 13.4715C50.9999 13.5973 51.3774 13.7231 51.6684 13.8489C51.9593 13.9669 52.207 14.1478 52.4115 14.3915C52.6238 14.6353 52.7339 14.9538 52.7417 15.347C52.7417 15.7008 52.6434 16.0193 52.4469 16.3024C52.2503 16.5855 51.9711 16.8096 51.6094 16.9747C51.2555 17.132 50.8466 17.2107 50.3827 17.2107ZM55.5663 11.5252V15.3352C55.5663 15.6497 55.6331 15.8738 55.7668 16.0075C55.9005 16.1333 56.1325 16.1962 56.4628 16.1962H57.2531V17.1045H56.2858C55.6882 17.1045 55.24 16.9669 54.9411 16.6917C54.6423 16.4164 54.4929 15.9643 54.4929 15.3352V11.5252H53.6554V10.6406H54.4929V9.0128H55.5663V10.6406H57.2531V11.5252H55.5663ZM61.3727 17.2107C60.7672 17.2107 60.2168 17.073 59.7213 16.7978C59.2338 16.5226 58.8485 16.1333 58.5654 15.6301C58.2902 15.1189 58.1525 14.5291 58.1525 13.8607C58.1525 13.2002 58.2941 12.6183 58.5772 12.115C58.8681 11.6039 59.2613 11.2146 59.7567 10.9473C60.2521 10.672 60.8065 10.5344 61.4199 10.5344C62.0333 10.5344 62.5876 10.672 63.0831 10.9473C63.5785 11.2146 63.9677 11.5999 64.2508 12.1032C64.5418 12.6065 64.6872 13.1923 64.6872 13.8607C64.6872 14.5291 64.5378 15.1189 64.239 15.6301C63.9481 16.1333 63.5509 16.5226 63.0477 16.7978C62.5444 17.073 61.9861 17.2107 61.3727 17.2107ZM61.3727 16.267C61.758 16.267 62.1198 16.1766 62.4579 15.9957C62.796 15.8149 63.0673 15.5436 63.2718 15.1818C63.4841 14.8201 63.5903 14.3797 63.5903 13.8607C63.5903 13.3417 63.488 12.9014 63.2836 12.5396C63.0791 12.1779 62.8118 11.9106 62.4815 11.7376C62.1512 11.5567 61.7934 11.4663 61.4081 11.4663C61.0149 11.4663 60.6532 11.5567 60.3229 11.7376C60.0005 11.9106 59.741 12.1779 59.5444 12.5396C59.3478 12.9014 59.2495 13.3417 59.2495 13.8607C59.2495 14.3876 59.3439 14.8319 59.5326 15.1936C59.7292 15.5554 59.9887 15.8266 60.3111 16.0075C60.6335 16.1805 60.9874 16.267 61.3727 16.267ZM65.6975 13.8607C65.6975 13.1923 65.8312 12.6104 66.0986 12.115C66.3659 11.6117 66.7355 11.2225 67.2073 10.9473C67.687 10.672 68.2335 10.5344 68.8469 10.5344C69.6411 10.5344 70.2938 10.7271 70.8049 11.1124C71.3239 11.4977 71.666 12.0324 71.8312 12.7166H70.6752C70.5651 12.3234 70.3489 12.0128 70.0264 11.7847C69.7119 11.5567 69.3187 11.4427 68.8469 11.4427C68.2335 11.4427 67.7381 11.655 67.3607 12.0796C66.9832 12.4964 66.7945 13.0901 66.7945 13.8607C66.7945 14.6392 66.9832 15.2408 67.3607 15.6654C67.7381 16.0901 68.2335 16.3024 68.8469 16.3024C69.3187 16.3024 69.7119 16.1923 70.0264 15.9721C70.341 15.7519 70.5572 15.4374 70.6752 15.0285H71.8312C71.6582 15.689 71.3122 16.2198 70.7932 16.6209C70.2741 17.0141 69.6254 17.2107 68.8469 17.2107C68.2335 17.2107 67.687 17.073 67.2073 16.7978C66.7355 16.5226 66.3659 16.1333 66.0986 15.6301C65.8312 15.1268 65.6975 14.537 65.6975 13.8607ZM76.8728 17.1045L74.3368 14.25V17.1045H73.2634V8.37584H74.3368V13.5069L76.8256 10.6406H78.3236L75.2804 13.8607L78.3354 17.1045H76.8728Z"
                        fill="white"
                      />
                    </svg>

                    <svg
                      width="193"
                      height="57"
                      viewBox="0 0 87 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="lg:block hidden absolute top-[32px] right-0"
                    >
                      <rect
                        width="85.7443"
                        height="25.0654"
                        transform="translate(0.983398 0.0717773)"
                        fill="#222222"
                      />
                      <path
                        d="M12.9911 17.1871C12.2283 17.1871 11.5324 17.0101 10.9033 16.6563C10.2742 16.2945 9.77486 15.7952 9.40527 15.1582C9.04354 14.5134 8.86267 13.79 8.86267 12.9879C8.86267 12.1858 9.04354 11.4663 9.40527 10.8293C9.77486 10.1845 10.2742 9.68514 10.9033 9.33127C11.5324 8.96955 12.2283 8.78868 12.9911 8.78868C13.7617 8.78868 14.4616 8.96955 15.0907 9.33127C15.7198 9.68514 16.2152 10.1805 16.5769 10.8175C16.9386 11.4545 17.1195 12.1779 17.1195 12.9879C17.1195 13.7978 16.9386 14.5213 16.5769 15.1582C16.2152 15.7952 15.7198 16.2945 15.0907 16.6563C14.4616 17.0101 13.7617 17.1871 12.9911 17.1871ZM12.9911 16.2552C13.5651 16.2552 14.0802 16.1215 14.5363 15.8542C15.0003 15.5868 15.362 15.2054 15.6215 14.71C15.8888 14.2146 16.0225 13.6406 16.0225 12.9879C16.0225 12.3273 15.8888 11.7533 15.6215 11.2657C15.362 10.7703 15.0042 10.3889 14.5481 10.1216C14.092 9.85421 13.573 9.72052 12.9911 9.72052C12.4092 9.72052 11.8902 9.85421 11.4341 10.1216C10.978 10.3889 10.6163 10.7703 10.3489 11.2657C10.0894 11.7533 9.95965 12.3273 9.95965 12.9879C9.95965 13.6406 10.0894 14.2146 10.3489 14.71C10.6163 15.2054 10.978 15.5868 11.4341 15.8542C11.898 16.1215 12.417 16.2552 12.9911 16.2552ZM24.2691 10.6406V17.1045H23.1957V16.1491C22.9913 16.4793 22.7043 16.7388 22.3347 16.9276C21.9729 17.1084 21.5719 17.1989 21.1315 17.1989C20.6283 17.1989 20.1761 17.0966 19.7751 16.8922C19.374 16.6799 19.0555 16.3653 18.8196 15.9485C18.5916 15.5318 18.4776 15.0246 18.4776 14.4269V10.6406H19.5391V14.2854C19.5391 14.9223 19.7003 15.4138 20.0228 15.7598C20.3452 16.0979 20.7855 16.267 21.3439 16.267C21.9179 16.267 22.3701 16.0901 22.7003 15.7362C23.0306 15.3824 23.1957 14.8673 23.1957 14.191V10.6406H24.2691ZM27.3908 11.5252V15.3352C27.3908 15.6497 27.4576 15.8738 27.5913 16.0075C27.725 16.1333 27.957 16.1962 28.2872 16.1962H29.0775V17.1045H28.1103C27.5127 17.1045 27.0644 16.9669 26.7656 16.6917C26.4668 16.4164 26.3174 15.9643 26.3174 15.3352V11.5252H25.4799V10.6406H26.3174V9.0128H27.3908V10.6406H29.0775V11.5252H27.3908ZM36.3419 17.2107C35.7364 17.2107 35.1859 17.073 34.6905 16.7978C34.203 16.5226 33.8177 16.1333 33.5346 15.6301C33.2593 15.1189 33.1217 14.5291 33.1217 13.8607C33.1217 13.2002 33.2633 12.6183 33.5464 12.115C33.8373 11.6039 34.2305 11.2146 34.7259 10.9473C35.2213 10.672 35.7757 10.5344 36.3891 10.5344C37.0024 10.5344 37.5568 10.672 38.0522 10.9473C38.5476 11.2146 38.9369 11.5999 39.22 12.1032C39.5109 12.6065 39.6564 13.1923 39.6564 13.8607C39.6564 14.5291 39.507 15.1189 39.2082 15.6301C38.9172 16.1333 38.5201 16.5226 38.0168 16.7978C37.5136 17.073 36.9553 17.2107 36.3419 17.2107ZM36.3419 16.267C36.7272 16.267 37.0889 16.1766 37.4271 15.9957C37.7652 15.8149 38.0365 15.5436 38.241 15.1818C38.4533 14.8201 38.5594 14.3797 38.5594 13.8607C38.5594 13.3417 38.4572 12.9014 38.2528 12.5396C38.0483 12.1779 37.7809 11.9106 37.4507 11.7376C37.1204 11.5567 36.7626 11.4663 36.3773 11.4663C35.9841 11.4663 35.6224 11.5567 35.2921 11.7376C34.9697 11.9106 34.7102 12.1779 34.5136 12.5396C34.317 12.9014 34.2187 13.3417 34.2187 13.8607C34.2187 14.3876 34.3131 14.8319 34.5018 15.1936C34.6984 15.5554 34.9579 15.8266 35.2803 16.0075C35.6027 16.1805 35.9566 16.267 36.3419 16.267ZM43.6981 11.5252H42.3416V17.1045H41.2683V11.5252H40.4308V10.6406H41.2683V10.1805C41.2683 9.45709 41.453 8.93023 41.8226 8.59996C42.2001 8.26182 42.8017 8.09275 43.6273 8.09275V8.98921C43.1555 8.98921 42.8213 9.08357 42.6247 9.2723C42.436 9.45316 42.3416 9.75591 42.3416 10.1805V10.6406H43.6981V11.5252ZM50.3827 17.2107C49.8872 17.2107 49.4429 17.1281 49.0498 16.9629C48.6566 16.7899 48.346 16.554 48.1179 16.2552C47.8899 15.9485 47.7641 15.5986 47.7405 15.2054H48.8492C48.8807 15.5278 49.0301 15.7913 49.2975 15.9957C49.5727 16.2002 49.9305 16.3024 50.3709 16.3024C50.7798 16.3024 51.1022 16.212 51.3381 16.0311C51.574 15.8502 51.6919 15.6222 51.6919 15.347C51.6919 15.0639 51.5661 14.8555 51.3145 14.7218C51.0629 14.5803 50.6736 14.4426 50.1467 14.309C49.6671 14.1831 49.2739 14.0573 48.9672 13.9315C48.6684 13.7978 48.4089 13.6052 48.1887 13.3535C47.9764 13.094 47.8702 12.7559 47.8702 12.3391C47.8702 12.0088 47.9685 11.7061 48.1651 11.4309C48.3617 11.1556 48.6409 10.9394 49.0026 10.7821C49.3643 10.617 49.7771 10.5344 50.2411 10.5344C50.9567 10.5344 51.5347 10.7153 51.975 11.077C52.4154 11.4387 52.6513 11.9341 52.6828 12.5632H51.6094C51.5858 12.2251 51.4482 11.9538 51.1965 11.7493C50.9528 11.5449 50.6225 11.4427 50.2057 11.4427C49.8204 11.4427 49.5137 11.5252 49.2857 11.6904C49.0576 11.8555 48.9436 12.0718 48.9436 12.3391C48.9436 12.5514 49.0104 12.7284 49.1441 12.8699C49.2857 13.0036 49.4587 13.1137 49.6631 13.2002C49.8754 13.2788 50.1664 13.3693 50.536 13.4715C50.9999 13.5973 51.3774 13.7231 51.6684 13.8489C51.9593 13.9669 52.207 14.1478 52.4115 14.3915C52.6238 14.6353 52.7339 14.9538 52.7417 15.347C52.7417 15.7008 52.6434 16.0193 52.4469 16.3024C52.2503 16.5855 51.9711 16.8096 51.6094 16.9747C51.2555 17.132 50.8466 17.2107 50.3827 17.2107ZM55.5663 11.5252V15.3352C55.5663 15.6497 55.6331 15.8738 55.7668 16.0075C55.9005 16.1333 56.1325 16.1962 56.4628 16.1962H57.2531V17.1045H56.2858C55.6882 17.1045 55.24 16.9669 54.9411 16.6917C54.6423 16.4164 54.4929 15.9643 54.4929 15.3352V11.5252H53.6554V10.6406H54.4929V9.0128H55.5663V10.6406H57.2531V11.5252H55.5663ZM61.3727 17.2107C60.7672 17.2107 60.2168 17.073 59.7213 16.7978C59.2338 16.5226 58.8485 16.1333 58.5654 15.6301C58.2902 15.1189 58.1525 14.5291 58.1525 13.8607C58.1525 13.2002 58.2941 12.6183 58.5772 12.115C58.8681 11.6039 59.2613 11.2146 59.7567 10.9473C60.2521 10.672 60.8065 10.5344 61.4199 10.5344C62.0333 10.5344 62.5876 10.672 63.0831 10.9473C63.5785 11.2146 63.9677 11.5999 64.2508 12.1032C64.5418 12.6065 64.6872 13.1923 64.6872 13.8607C64.6872 14.5291 64.5378 15.1189 64.239 15.6301C63.9481 16.1333 63.5509 16.5226 63.0477 16.7978C62.5444 17.073 61.9861 17.2107 61.3727 17.2107ZM61.3727 16.267C61.758 16.267 62.1198 16.1766 62.4579 15.9957C62.796 15.8149 63.0673 15.5436 63.2718 15.1818C63.4841 14.8201 63.5903 14.3797 63.5903 13.8607C63.5903 13.3417 63.488 12.9014 63.2836 12.5396C63.0791 12.1779 62.8118 11.9106 62.4815 11.7376C62.1512 11.5567 61.7934 11.4663 61.4081 11.4663C61.0149 11.4663 60.6532 11.5567 60.3229 11.7376C60.0005 11.9106 59.741 12.1779 59.5444 12.5396C59.3478 12.9014 59.2495 13.3417 59.2495 13.8607C59.2495 14.3876 59.3439 14.8319 59.5326 15.1936C59.7292 15.5554 59.9887 15.8266 60.3111 16.0075C60.6335 16.1805 60.9874 16.267 61.3727 16.267ZM65.6975 13.8607C65.6975 13.1923 65.8312 12.6104 66.0986 12.115C66.3659 11.6117 66.7355 11.2225 67.2073 10.9473C67.687 10.672 68.2335 10.5344 68.8469 10.5344C69.6411 10.5344 70.2938 10.7271 70.8049 11.1124C71.3239 11.4977 71.666 12.0324 71.8312 12.7166H70.6752C70.5651 12.3234 70.3489 12.0128 70.0264 11.7847C69.7119 11.5567 69.3187 11.4427 68.8469 11.4427C68.2335 11.4427 67.7381 11.655 67.3607 12.0796C66.9832 12.4964 66.7945 13.0901 66.7945 13.8607C66.7945 14.6392 66.9832 15.2408 67.3607 15.6654C67.7381 16.0901 68.2335 16.3024 68.8469 16.3024C69.3187 16.3024 69.7119 16.1923 70.0264 15.9721C70.341 15.7519 70.5572 15.4374 70.6752 15.0285H71.8312C71.6582 15.689 71.3122 16.2198 70.7932 16.6209C70.2741 17.0141 69.6254 17.2107 68.8469 17.2107C68.2335 17.2107 67.687 17.073 67.2073 16.7978C66.7355 16.5226 66.3659 16.1333 66.0986 15.6301C65.8312 15.1268 65.6975 14.537 65.6975 13.8607ZM76.8728 17.1045L74.3368 14.25V17.1045H73.2634V8.37584H74.3368V13.5069L76.8256 10.6406H78.3236L75.2804 13.8607L78.3354 17.1045H76.8728Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                <img
                  src={
                    products.imageUrls && products.imageUrls[currentImageIndex]
                  }
                  alt="Main Product Image"
                  className="w-full object-cover aspect-square lg:max-w-[780px] lg:max-h-[780px]"
                />
              )}
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
                    className={`w-full object-cover aspect-square lg:max-w-[172px] lg:max-h-[172px] cursor-pointer ${
                      stock == 0 && "brightness-[0.7]"
                    } ${
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
          {stock !== 0 && !hasDiscount() && (
            <p className="text-[32px] font-bold mb-7 lg:text-[40px] lg:mb-6">
              THB {products.price}.00
            </p>
          )}
          {stock == 0 && (
            <div>
              <p className="text-[32px] font-bold mb-2 lg:text-[40px] ">
                THB {products.price}.00
              </p>
              <p className="text-danger text-lg font-semibold mb-[24px] lg:text-2xl lg:font-bold">
                Out of stock
              </p>
            </div>
          )}
          {hasDiscount() && (
            <div>
              <div className=" inline-block bg-danger mb-2">
                <p className=" inline-block text-[32px] text-white font-bold my-2 mx-[10px] lg:text-[40px]">
                  THB {products.promotionalPrice}.00
                </p>
              </div>
              <p className="text-lg font-semibold mb-[24px]">
                From{" "}
                <span className="line-through ">THB {products.price}.00</span>
              </p>
            </div>
          )}


          <button className="bg-black w-full h-[54px] text-base text-white">
            Add to cart
          </button>
        </div>
      </div>
      {/* Another product section */}
      <div className="mx-4 mb-20 lg:md-[64px]">
        <h5 className="text-[31px] font-bold">People also like these</h5>
      </div>
    </main>
  );
}

export default ProductDetail;
