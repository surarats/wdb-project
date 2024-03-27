import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import axios from "axios";

function Header() {
  const [categories, setCategories] = useState([]);
  const [isMenuToggle, setIsMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    document.querySelector("body").style.overflow = isMenuToggle
      ? "scroll"
      : "hidden";
    setIsMenuToggle(!isMenuToggle);
  };

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
    <header className="bg-[#222] fixed w-full top-0 left-0 z-50 ">
      <nav className="flex justify-center py-2 pr-2 pl-4 shadow-[0_4px_24px_0_rgba(17,17,26,0.03)] lg:max-w-[1600px] lg:mx-auto lg:items-center lg:pl-0">
        <div className="flex flex-col gap-10 lg:flex-row w-full">
          <div className="flex items-center gap-2 ">
            {/* Menu Button */}
            <svg
              className="lg:hidden cursor-pointer"
              onClick={handleMenuToggle}
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12L31.6274 12"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M9 20H31.6274"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M9 28H31.6274"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            {/* WDB Logo */}
            <Link to={"/"}>
              <svg
                width="91"
                height="37"
                viewBox="0 0 91 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.7554 31.1412C17.9656 31.8878 17.5166 32.9318 17.5166 34.0192C17.5166 35.1065 17.9548 36.1398 18.7554 36.8971C18.8257 36.9674 18.9177 36.9999 19.0151 36.9999C19.1125 36.9999 19.199 36.9674 19.2747 36.8971C20.0754 36.1398 20.5136 35.1173 20.5136 34.0192C20.5136 32.921 20.0646 31.8878 19.2747 31.1412C19.1287 31.006 18.9015 31.006 18.7608 31.1412H18.7554Z"
                  fill="#DEF81C"
                />
                <path
                  d="M23.9167 27.7494C23.722 27.7061 23.5326 27.8197 23.4731 28.0091C23.1756 29.0423 23.3162 30.1729 23.8626 31.098C24.4198 32.0393 25.3124 32.6939 26.3781 32.9373C26.4052 32.9427 26.4322 32.9481 26.4593 32.9481C26.6216 32.9481 26.773 32.8399 26.8163 32.6776C27.1192 31.6282 26.9786 30.53 26.4268 29.5887C25.8804 28.6582 24.9608 27.9874 23.9113 27.7494H23.9167Z"
                  fill="#DEF81C"
                />
                <path
                  d="M14.1096 27.7494C13.0602 27.9874 12.1405 28.6582 11.5941 29.5887C11.0369 30.53 10.9017 31.6282 11.2046 32.6776C11.2533 32.8399 11.3994 32.9481 11.5617 32.9481C11.5887 32.9481 11.6158 32.9481 11.6428 32.9373C12.7085 32.6939 13.6011 32.0393 14.1583 31.098C14.7047 30.1675 14.8508 29.0423 14.5478 28.0091C14.4937 27.8197 14.299 27.7061 14.1042 27.7494H14.1096Z"
                  fill="#DEF81C"
                />
                <path
                  d="M20.3685 28.2853C20.2603 28.2421 20.1413 28.2907 20.0926 28.3935C19.8276 28.9615 19.8113 29.6215 20.0439 30.2058C20.282 30.7954 20.7364 31.2498 21.326 31.4879C21.3531 31.4987 21.3801 31.5041 21.4072 31.5041C21.4883 31.5041 21.5695 31.4554 21.6019 31.3797C21.867 30.8008 21.8832 30.1571 21.6506 29.5674C21.418 28.9832 20.9474 28.518 20.3685 28.2853Z"
                  fill="#DEF81C"
                />
                <path
                  d="M17.9332 28.3984C17.8845 28.2956 17.7655 28.2469 17.6573 28.2902C17.0731 28.5228 16.6078 28.9881 16.3752 29.5723C16.1372 30.162 16.1588 30.8057 16.4239 31.3846C16.4618 31.4657 16.5375 31.509 16.6186 31.509C16.6457 31.509 16.6727 31.509 16.6998 31.4928C17.2894 31.2601 17.7493 30.8057 17.9819 30.2107C18.2145 29.6264 18.1983 28.9664 17.9332 28.3984Z"
                  fill="#DEF81C"
                />
                <path
                  d="M27.3249 26.5646C27.2113 26.5754 27.1247 26.6782 27.1301 26.7918C27.1626 27.4193 27.4547 28.0089 27.9362 28.4147C28.3581 28.7717 28.872 28.961 29.4184 28.961C29.505 28.961 29.5861 28.961 29.6727 28.9448C29.7863 28.934 29.8728 28.8312 29.8674 28.7176C29.835 28.0793 29.5482 27.5058 29.0614 27.0947C28.5853 26.689 27.9524 26.4942 27.3303 26.5591L27.3249 26.5646Z"
                  fill="#DEF81C"
                />
                <path
                  d="M10.7063 26.5646C10.0842 26.4943 9.45128 26.6891 8.97523 27.1002C8.48836 27.5113 8.20705 28.0902 8.16919 28.7231C8.16378 28.8367 8.25033 28.9395 8.36393 28.9503C8.45049 28.9611 8.53164 28.9665 8.61819 28.9665C9.15916 28.9665 9.67849 28.7772 10.1004 28.4202C10.5765 28.0144 10.8686 27.4194 10.9065 26.7973C10.9119 26.6837 10.8253 26.5809 10.7117 26.5701L10.7063 26.5646Z"
                  fill="#DEF81C"
                />
                <path
                  d="M29.012 22.5342C28.0978 22.2854 27.1132 22.4314 26.3072 22.9237C26.1611 23.0157 26.107 23.205 26.1882 23.3565C26.6372 24.1896 27.4162 24.8063 28.3304 25.0497C28.6333 25.1309 28.9363 25.1687 29.2338 25.1687C29.8613 25.1687 30.478 24.9956 31.0298 24.6548C31.1759 24.5628 31.23 24.3735 31.1488 24.222C30.6944 23.3781 29.9317 22.7776 29.0066 22.5288L29.012 22.5342Z"
                  fill="#DEF81C"
                />
                <path
                  d="M9.69381 25.0556C10.608 24.8121 11.387 24.19 11.836 23.3623C11.9172 23.2109 11.8685 23.0215 11.717 22.9296C10.911 22.4373 9.92643 22.2912 9.01219 22.5401C8.08714 22.7889 7.32978 23.3894 6.86996 24.2333C6.78882 24.3848 6.8375 24.5741 6.98897 24.6661C7.54076 25.0069 8.15746 25.18 8.78499 25.18C9.08793 25.18 9.39087 25.1421 9.6884 25.061L9.69381 25.0556Z"
                  fill="#DEF81C"
                />
                <path
                  d="M24.5172 25.9972C24.6308 25.9864 24.7173 25.889 24.7119 25.77C24.6849 25.1317 24.4036 24.5529 23.9275 24.1363C23.4515 23.7252 22.8239 23.525 22.2018 23.5845C22.0882 23.5953 22.0017 23.6927 22.0071 23.8117C22.0341 24.4392 22.3208 25.0343 22.7915 25.4454C23.2134 25.8133 23.7382 26.0081 24.29 26.0081C24.3657 26.0081 24.4414 26.0081 24.5172 25.9972Z"
                  fill="#DEF81C"
                />
                <path
                  d="M15.8294 23.5845C15.2073 23.525 14.5744 23.7252 14.1037 24.1363C13.6223 24.5529 13.3464 25.1317 13.3193 25.77C13.3193 25.8836 13.4005 25.9864 13.5141 25.9972C13.5898 26.0026 13.6656 26.0081 13.7413 26.0081C14.2931 26.0081 14.8178 25.8133 15.2398 25.4454C15.7104 25.0343 15.9971 24.4392 16.0242 23.8117C16.0242 23.6981 15.943 23.6007 15.8294 23.5845Z"
                  fill="#DEF81C"
                />
                <path
                  d="M32.3608 8.44794C32.7286 8.55614 33.1073 8.61023 33.486 8.61023C34.1784 8.61023 34.8654 8.43172 35.4713 8.08009C36.4234 7.5283 37.0888 6.64111 37.3431 5.56999C37.3918 5.37525 37.2782 5.1805 37.0834 5.1264C36.0285 4.81264 34.9249 4.94247 33.9728 5.49426C33.0316 6.03523 32.3499 6.94946 32.1011 8.00435C32.0524 8.1991 32.166 8.39385 32.3608 8.44794Z"
                  fill="#DEF81C"
                />
                <path
                  d="M27.2054 5.93761C27.2324 5.93761 27.2649 5.93761 27.2973 5.92679C28.3414 5.66713 29.2502 4.9801 29.7804 4.04422C30.3159 3.09212 30.4349 1.99395 30.1158 0.944476C30.0563 0.755137 29.8615 0.641534 29.6722 0.690221C28.6119 0.955295 27.7301 1.62069 27.1891 2.57279C26.659 3.50866 26.5346 4.63929 26.8537 5.67254C26.9024 5.82942 27.0485 5.93761 27.2108 5.93761H27.2054Z"
                  fill="#DEF81C"
                />
                <path
                  d="M37.4793 13.6999C36.7327 12.8993 35.7211 12.4503 34.6284 12.4395C34.6175 12.4395 34.6067 12.4395 34.5959 12.4395C33.5302 12.4395 32.4969 12.8776 31.7558 13.6458C31.6206 13.7865 31.6152 14.0137 31.7558 14.1597C32.4915 14.9495 33.5302 15.4094 34.6067 15.4202C34.6175 15.4202 34.6338 15.4202 34.6446 15.4202C35.7211 15.4202 36.7273 14.9928 37.4793 14.2138C37.6145 14.0732 37.6199 13.846 37.4793 13.6999Z"
                  fill="#DEF81C"
                />
                <path
                  d="M29.5534 6.72784C29.1639 7.22012 28.9962 7.85847 29.0881 8.48058C29.1043 8.58877 29.1963 8.66451 29.3045 8.66451C29.3099 8.66451 29.3153 8.66451 29.3261 8.66451C29.9483 8.61041 30.5325 8.29124 30.922 7.79896C31.3169 7.30127 31.4792 6.67916 31.3872 6.04622C31.371 5.93262 31.2682 5.85148 31.1546 5.8623C30.5217 5.9218 29.9537 6.23015 29.5588 6.72784H29.5534Z"
                  fill="#DEF81C"
                />
                <path
                  d="M30.3977 10.5303C30.3328 10.6223 30.349 10.7521 30.441 10.8279C30.8467 11.1525 31.3552 11.3256 31.8691 11.3256C31.9773 11.3256 32.0855 11.3202 32.1937 11.3039C32.8212 11.212 33.373 10.8766 33.7409 10.3572C33.8058 10.2653 33.7896 10.1354 33.6976 10.0597C33.1999 9.6648 32.5778 9.4971 31.9449 9.58906C31.3228 9.68103 30.7601 10.0218 30.3977 10.5358V10.5303Z"
                  fill="#DEF81C"
                />
                <path
                  d="M24.2952 3.40048C24.333 3.40048 24.3763 3.38966 24.4142 3.36802C24.9389 3.02721 25.3068 2.47543 25.4204 1.85872C25.534 1.2312 25.3933 0.603676 25.0147 0.0897569C24.9443 -0.00220766 24.8199 -0.0292561 24.7225 0.0356601C24.187 0.38188 23.8299 0.917438 23.7163 1.54496C23.6027 2.16166 23.7488 2.80542 24.1221 3.31393C24.1653 3.37343 24.2303 3.40048 24.2952 3.40048Z"
                  fill="#DEF81C"
                />
                <path
                  d="M34.3353 17.3086C33.7457 17.0976 33.0857 17.1409 32.5285 17.4276C32.4257 17.4817 32.3824 17.6007 32.4311 17.7089C32.6854 18.2823 33.1668 18.7313 33.7565 18.9423C34.0107 19.0343 34.2704 19.0776 34.5301 19.0776C34.8871 19.0776 35.2387 18.991 35.5687 18.8287C35.6715 18.7746 35.7148 18.6556 35.6715 18.5474C35.4118 17.9632 34.9412 17.525 34.3461 17.314L34.3353 17.3086Z"
                  fill="#DEF81C"
                />
                <path
                  d="M22.3046 3.19455C22.0557 2.26949 21.4553 1.50673 20.6168 1.0469C20.4653 0.965758 20.276 1.01444 20.184 1.16051C19.6809 1.97737 19.5402 2.93488 19.7891 3.85994C20.0325 4.77417 20.6492 5.55317 21.4769 6.00758C21.5256 6.03463 21.5797 6.04545 21.6338 6.04545C21.742 6.04545 21.8502 5.99135 21.9097 5.88857C22.4074 5.08252 22.548 4.09796 22.3046 3.18914V3.19455Z"
                  fill="#DEF81C"
                />
                <path
                  d="M29.0832 18.3313C28.9101 18.3313 28.7695 18.4774 28.7641 18.6505C28.737 19.5918 29.1103 20.5168 29.7757 21.1876C30.4302 21.8422 31.2904 22.1938 32.21 22.1938C32.2425 22.1938 32.2804 22.1938 32.3128 22.1938C32.4859 22.1938 32.6266 22.0477 32.632 21.8746C32.659 20.9171 32.2966 20.0137 31.6204 19.3375C30.9496 18.6721 30.0245 18.2988 29.0832 18.3313Z"
                  fill="#DEF81C"
                />
                <path
                  d="M24.2739 9.33537C24.3118 9.33537 24.3551 9.32455 24.3875 9.30291C24.9177 8.96751 25.2909 8.42114 25.4099 7.80443C25.529 7.18232 25.3937 6.54939 25.0259 6.03547C24.9609 5.9435 24.8311 5.91645 24.7337 5.97596C24.1982 6.31677 23.8357 6.84692 23.7113 7.47444C23.5923 8.09114 23.7329 8.7349 24.0954 9.24341C24.1387 9.30291 24.2036 9.33537 24.2739 9.33537Z"
                  fill="#DEF81C"
                />
                <path
                  d="M29.1859 14.3441C28.5908 14.1386 27.9363 14.1872 27.3791 14.4794C27.2763 14.5335 27.233 14.6579 27.2817 14.7607C27.5414 15.3341 28.0282 15.7777 28.6233 15.9779C28.8667 16.0644 29.121 16.1023 29.3698 16.1023C29.7323 16.1023 30.0947 16.0157 30.4301 15.8372C30.5329 15.7831 30.5762 15.6587 30.5275 15.5559C30.2624 14.9771 29.7864 14.5443 29.1859 14.3387V14.3441Z"
                  fill="#DEF81C"
                />
                <path
                  d="M2.53815 8.09083C3.14404 8.44246 3.83107 8.62098 4.52351 8.62098C4.90219 8.62098 5.28086 8.56688 5.64872 8.45869C5.83806 8.40459 5.95166 8.20443 5.90838 8.01509C5.65954 6.96021 4.97251 6.04597 4.03664 5.505C3.08453 4.95321 1.98096 4.82338 0.92607 5.13714C0.736731 5.19124 0.623128 5.3914 0.666406 5.58074C0.920661 6.65185 1.58605 7.54445 2.53815 8.09083Z"
                  fill="#DEF81C"
                />
                <path
                  d="M3.40854 15.4316C4.48507 15.4208 5.52373 14.961 6.25944 14.1766C6.39469 14.0305 6.38928 13.8087 6.25944 13.6627C5.51832 12.8945 4.48507 12.4563 3.41936 12.4563C3.40854 12.4563 3.39772 12.4563 3.3869 12.4563C2.29415 12.4671 1.28254 12.9107 0.536002 13.7168C0.40076 13.8628 0.40076 14.0846 0.536002 14.2307C1.28795 15.0097 2.29415 15.437 3.37067 15.437C3.38149 15.437 3.39772 15.437 3.40854 15.437V15.4316Z"
                  fill="#DEF81C"
                />
                <path
                  d="M10.717 5.93216C10.7494 5.93757 10.7765 5.94298 10.8089 5.94298C10.9712 5.94298 11.1173 5.8402 11.166 5.67791C11.4851 4.65007 11.3607 3.51944 10.8306 2.57816C10.295 1.62606 9.41324 0.955257 8.34753 0.695592C8.15278 0.646905 7.95803 0.760508 7.90394 0.949847C7.58477 1.99391 7.70378 3.09749 8.23934 4.04959C8.76949 4.99088 9.6729 5.67791 10.7224 5.93216H10.717Z"
                  fill="#DEF81C"
                />
                <path
                  d="M4.31793 10.0593C4.22597 10.1296 4.20974 10.2594 4.27465 10.3568C4.64251 10.8761 5.18889 11.2115 5.82182 11.3035C5.93002 11.3197 6.03821 11.3251 6.14641 11.3251C6.66032 11.3251 7.16883 11.152 7.57456 10.8274C7.66652 10.7571 7.68275 10.6273 7.61784 10.5299C7.25539 10.016 6.69278 9.66976 6.07067 9.58321C5.44315 9.49124 4.82103 9.65894 4.31793 10.0538V10.0593Z"
                  fill="#DEF81C"
                />
                <path
                  d="M8.69405 8.66965C8.69405 8.66965 8.70487 8.66965 8.71569 8.66965C8.82388 8.66965 8.91585 8.59392 8.93208 8.48572C9.02404 7.86361 8.85093 7.22527 8.46684 6.73299C8.07194 6.2353 7.50933 5.92695 6.8764 5.86744C6.7628 5.85121 6.66001 5.93777 6.64378 6.05137C6.55182 6.67889 6.71952 7.301 7.10902 7.8041C7.49851 8.29639 8.07735 8.61015 8.70487 8.66965H8.69405Z"
                  fill="#DEF81C"
                />
                <path
                  d="M5.48571 17.4334C4.92852 17.1467 4.26853 17.1088 3.67888 17.3144C3.07841 17.5253 2.60776 17.9635 2.3481 18.5478C2.29941 18.6505 2.3481 18.775 2.45088 18.8291C2.78087 18.9968 3.1325 19.0779 3.48954 19.0779C3.74921 19.0779 4.00887 19.0346 4.26313 18.9427C4.85278 18.7317 5.33965 18.2827 5.5885 17.7093C5.63718 17.6065 5.5885 17.4821 5.49112 17.428L5.48571 17.4334Z"
                  fill="#DEF81C"
                />
                <path
                  d="M13.6005 3.37901C13.6383 3.40065 13.6762 3.41147 13.7195 3.41147C13.7844 3.41147 13.8547 3.37901 13.8926 3.32491C14.2604 2.8164 14.4119 2.17265 14.2983 1.55595C14.1847 0.928424 13.8277 0.392866 13.2921 0.0466464C13.1947 -0.0182697 13.0649 0.00877867 13 0.100743C12.6267 0.614663 12.4807 1.24219 12.5943 1.86971C12.7079 2.48641 13.0757 3.0382 13.6005 3.37901Z"
                  fill="#DEF81C"
                />
                <path
                  d="M9.24043 18.6561C9.24043 18.483 9.09436 18.3423 8.92125 18.3369C7.97456 18.3045 7.04951 18.6777 6.38412 19.3431C5.70791 20.0193 5.34546 20.9173 5.37251 21.8803C5.37251 22.0534 5.51857 22.194 5.69168 22.1994C5.72413 22.1994 5.762 22.1994 5.79446 22.1994C6.71411 22.1994 7.57424 21.8424 8.22882 21.1932C8.89962 20.5278 9.26747 19.6028 9.24043 18.6561Z"
                  fill="#DEF81C"
                />
                <path
                  d="M16.5379 6.01877C17.3656 5.56977 17.9823 4.78536 18.2257 3.87113C18.4745 2.94607 18.3339 1.98856 17.8308 1.1717C17.7388 1.02564 17.5495 0.97154 17.398 1.0581C16.5541 1.51792 15.9536 2.27527 15.7102 3.20574C15.4668 4.11997 15.6128 5.10454 16.1051 5.90517C16.1646 6.00254 16.2728 6.06205 16.381 6.06205C16.4351 6.06205 16.4892 6.05123 16.5379 6.02418V6.01877Z"
                  fill="#DEF81C"
                />
                <path
                  d="M10.6304 14.4901C10.0732 14.198 9.41866 14.1493 8.82359 14.3549C8.22312 14.5604 7.74707 14.9932 7.48199 15.572C7.4333 15.6748 7.48199 15.7993 7.57937 15.8533C7.91477 16.0265 8.27722 16.1184 8.63966 16.1184C8.88851 16.1184 9.14276 16.0751 9.3862 15.994C9.98126 15.7884 10.4681 15.3448 10.7278 14.7768C10.7765 14.674 10.7278 14.5496 10.6304 14.4955V14.4901Z"
                  fill="#DEF81C"
                />
                <path
                  d="M13.2752 5.98124C13.1778 5.92174 13.048 5.94337 12.9831 6.04075C12.6152 6.56008 12.4746 7.1876 12.599 7.80971C12.718 8.42642 13.0913 8.9728 13.6214 9.3082C13.6593 9.32983 13.6972 9.34065 13.735 9.34065C13.8053 9.34065 13.8703 9.3082 13.9135 9.24869C14.276 8.74018 14.4166 8.09102 14.2976 7.47972C14.1786 6.85761 13.8108 6.32205 13.2752 5.98124Z"
                  fill="#DEF81C"
                />
                <path
                  d="M66.036 11.436L62.526 24H59.556L57.198 15.054L54.732 24L51.78 24.018L48.396 11.436H51.096L53.31 21.192L55.866 11.436H58.674L61.086 21.138L63.318 11.436H66.036ZM72.0735 11.436C73.3935 11.436 74.5515 11.694 75.5475 12.21C76.5555 12.726 77.3295 13.464 77.8695 14.424C78.4215 15.372 78.6975 16.476 78.6975 17.736C78.6975 18.996 78.4215 20.1 77.8695 21.048C77.3295 21.984 76.5555 22.71 75.5475 23.226C74.5515 23.742 73.3935 24 72.0735 24H67.6815V11.436H72.0735ZM71.9835 21.858C73.3035 21.858 74.3235 21.498 75.0435 20.778C75.7635 20.058 76.1235 19.044 76.1235 17.736C76.1235 16.428 75.7635 15.408 75.0435 14.676C74.3235 13.932 73.3035 13.56 71.9835 13.56H70.2015V21.858H71.9835ZM87.7118 17.556C88.4198 17.688 89.0018 18.042 89.4578 18.618C89.9138 19.194 90.1418 19.854 90.1418 20.598C90.1418 21.27 89.9738 21.864 89.6378 22.38C89.3138 22.884 88.8398 23.28 88.2158 23.568C87.5918 23.856 86.8538 24 86.0018 24H80.5838V11.436H85.7678C86.6198 11.436 87.3518 11.574 87.9638 11.85C88.5878 12.126 89.0558 12.51 89.3678 13.002C89.6918 13.494 89.8538 14.052 89.8538 14.676C89.8538 15.408 89.6558 16.02 89.2598 16.512C88.8758 17.004 88.3598 17.352 87.7118 17.556ZM83.1038 16.62H85.4078C86.0078 16.62 86.4698 16.488 86.7938 16.224C87.1178 15.948 87.2798 15.558 87.2798 15.054C87.2798 14.55 87.1178 14.16 86.7938 13.884C86.4698 13.608 86.0078 13.47 85.4078 13.47H83.1038V16.62ZM85.6418 21.948C86.2538 21.948 86.7278 21.804 87.0638 21.516C87.4118 21.228 87.5858 20.82 87.5858 20.292C87.5858 19.752 87.4058 19.332 87.0458 19.032C86.6858 18.72 86.1998 18.564 85.5878 18.564H83.1038V21.948H85.6418Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
          {/* Menu List */}
          <ul className="text-white transition-[flex] duration-700 hidden  lg:flex lg:flex-row lg:justify-start">
            {categories.map(
              (category) =>
                !category.parentId && (
                  <Link
                    to={`/products/categories/${category.permalink}`}
                    key={category.id}
                  >
                    <li className="py-3 pr-6 pl-0">{category.name}</li>
                  </Link>
                )
            )}
          </ul>
        </div>

        <Link to="/cart">
          <div className="relative">
            {/* Cart Button */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.6 19.3L23.7 31.1M14.9 19.3L16.8 31.1M11 25.2H28.7M20.3 19.3V31.1M12.2 15.5L15.8 9.30002M24.7 9.20001L28.3 15.4M25.5 31.1H15C13.5 31.1 12.2 30.1 11.9 28.7L9.5 19.3H31L28.6 28.7C28.3 30.1 27 31.1 25.5 31.1ZM33.1 17.4C33.1 16.3 32.2 15.5 31.2 15.5H9.39999C8.29999 15.5 7.5 16.4 7.5 17.4C7.5 18.5 8.39999 19.3 9.39999 19.3H31.2C32.2 19.3 33.1 18.4 33.1 17.4Z"
                stroke="#fff"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="bg-[#ff000d] w-[7px] h-[7px] rounded-full absolute top-[11px] left-[26px] z-10"></div>
          </div>
        </Link>
      </nav>

      <Sidebar
        isMenuToggle={isMenuToggle}
        handleMenuToggle={handleMenuToggle}
        categories={categories}
      />
    </header>
  );
}

export default Header;
