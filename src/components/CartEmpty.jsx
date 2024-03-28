import React from "react";
import { Link } from "react-router-dom";

function CartEmpty() {
  return (
    <>
      <svg
        className=""
        width="262"
        height="261"
        viewBox="0 0 262 261"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_6393)">
          <g opacity="0.25">
            <path
              d="M107.486 129.099C107.486 129.063 107.492 129.026 107.492 128.989C107.492 128.963 107.492 128.937 107.494 128.911C107.492 128.974 107.489 129.036 107.486 129.102V129.099Z"
              fill="#E1E1E1"
            />
            <path
              d="M238.738 198.783H212.698L208.107 216.721C206.343 223.614 200.131 228.438 193.018 228.438H74.9238C67.8037 228.438 61.5945 223.614 59.8328 216.721L49.7791 177.43C49.4293 183.152 46.9681 188.304 43.1601 192.114C39.0389 196.235 33.3517 198.78 27.0669 198.78H23.2641C16.9792 198.78 11.2894 201.328 7.17082 205.446C3.04963 209.562 0.504883 215.252 0.504883 221.537C0.504883 234.107 10.6969 244.299 23.2667 244.299H238.743C245.028 244.299 250.718 241.751 254.836 237.633C258.958 233.511 261.502 227.824 261.502 221.539C261.502 208.97 251.31 198.783 238.74 198.783H238.738Z"
              fill="#E1E1E1"
            />
            <path
              d="M108.014 124.761C108.022 124.725 108.029 124.688 108.037 124.651C108.04 124.636 108.042 124.617 108.048 124.601C108.037 124.654 108.024 124.709 108.014 124.761Z"
              fill="#E1E1E1"
            />
            <path
              d="M238.738 107.741H216.699C204.13 107.741 193.943 97.5514 193.943 84.979C193.943 84.1177 193.995 83.2669 194.089 82.429H163.069L154.185 90.3139C152.245 92.0339 149.181 90.6584 149.181 88.064V82.429H139.498C136.197 82.429 133.519 79.7512 133.519 76.4495V41.6556C133.519 38.354 136.197 35.6761 139.498 35.6761H200.288C203.589 35.6761 206.267 38.354 206.267 41.6556V64.7567C209.394 63.1411 212.938 62.2224 216.702 62.2224H238.741C245.026 62.2224 250.715 59.6751 254.834 55.5565C258.955 51.4353 261.5 45.7481 261.5 39.4632C261.5 26.8935 251.308 16.7014 238.738 16.7014H23.2618C16.9769 16.7014 11.2871 19.2488 7.16855 23.3674C3.04736 27.4859 0.5 33.1757 0.5 39.4606C0.5 52.0304 10.692 62.2224 23.2618 62.2224H47.6679C60.2377 62.2224 70.4297 72.4119 70.4297 84.979C70.4297 91.2639 67.8824 96.9563 63.7638 101.072C59.6426 105.193 53.9554 107.738 47.6705 107.738H23.2644C16.9795 107.738 11.2897 110.286 7.17116 114.404C3.04997 118.52 0.50522 124.213 0.50522 130.497C0.50522 143.067 10.6973 153.254 23.267 153.254H27.0698C35.1712 153.254 42.2809 157.493 46.3133 163.869L44.4654 156.644L41.7641 146.09H37.1418C33.1224 146.09 29.8625 142.83 29.8625 138.81V121.472C29.8625 117.455 33.1198 114.193 37.1418 114.193H110.407L84.1192 70.3526C82.6315 67.8652 83.438 64.6445 85.9227 63.1542L97.2161 56.3839C99.7009 54.8962 102.924 55.7 104.412 58.1874L131.723 103.734C131.746 103.734 131.77 103.734 131.793 103.729C132.109 103.703 132.425 103.682 132.743 103.669C132.827 103.667 132.908 103.664 132.991 103.659C133.294 103.648 133.597 103.641 133.9 103.641C133.923 103.641 133.949 103.641 133.973 103.641C134.062 103.641 134.148 103.643 134.236 103.646C134.39 103.646 134.544 103.648 134.698 103.654C134.816 103.656 134.933 103.661 135.051 103.667C135.181 103.672 135.312 103.677 135.442 103.685C135.562 103.693 135.682 103.701 135.805 103.708C135.93 103.716 136.058 103.727 136.183 103.737C136.303 103.748 136.424 103.758 136.544 103.768C136.669 103.781 136.797 103.795 136.922 103.808C137.04 103.821 137.157 103.834 137.274 103.847C137.41 103.862 137.546 103.883 137.682 103.902C137.786 103.917 137.893 103.93 137.997 103.946C138.224 103.98 138.452 104.019 138.676 104.058C138.778 104.076 138.882 104.097 138.984 104.118C139.12 104.144 139.253 104.17 139.389 104.196C139.498 104.22 139.61 104.243 139.72 104.27C139.845 104.298 139.971 104.324 140.096 104.356C140.208 104.382 140.318 104.408 140.427 104.437C140.553 104.468 140.675 104.499 140.801 104.533C140.908 104.562 141.017 104.591 141.124 104.622C141.255 104.658 141.383 104.695 141.51 104.734C141.61 104.763 141.711 104.792 141.811 104.823C141.98 104.875 142.147 104.93 142.314 104.985C142.421 105.019 142.526 105.055 142.63 105.092C142.797 105.149 142.967 105.209 143.131 105.269C143.223 105.303 143.314 105.34 143.408 105.374C143.538 105.423 143.669 105.473 143.799 105.525C143.896 105.564 143.99 105.603 144.087 105.642C144.212 105.695 144.337 105.747 144.46 105.799C144.554 105.841 144.648 105.88 144.742 105.922C144.87 105.979 144.997 106.036 145.125 106.097C145.211 106.136 145.298 106.177 145.384 106.217C145.532 106.287 145.681 106.36 145.827 106.436C145.89 106.467 145.953 106.496 146.015 106.53C146.222 106.637 146.428 106.744 146.631 106.856C146.686 106.885 146.741 106.916 146.796 106.947C146.947 107.031 147.098 107.117 147.25 107.203C147.323 107.245 147.393 107.287 147.464 107.331C147.597 107.409 147.73 107.49 147.861 107.571C147.934 107.616 148.007 107.663 148.08 107.707C148.213 107.79 148.343 107.877 148.477 107.96C148.542 108.004 148.61 108.046 148.675 108.091C148.821 108.19 148.967 108.289 149.113 108.391C149.16 108.425 149.207 108.456 149.257 108.49C149.648 108.767 150.032 109.054 150.405 109.351C150.439 109.377 150.473 109.406 150.507 109.435C150.659 109.557 150.81 109.68 150.959 109.803C151.003 109.839 151.047 109.878 151.092 109.915C151.233 110.035 151.374 110.155 151.512 110.278C151.554 110.314 151.596 110.351 151.637 110.39C151.786 110.523 151.932 110.656 152.078 110.792C152.107 110.818 152.133 110.844 152.162 110.868C152.697 111.371 153.211 111.899 153.702 112.447C153.712 112.46 153.723 112.47 153.733 112.483C153.884 112.653 154.036 112.825 154.182 113C154.198 113.018 154.213 113.037 154.229 113.055C154.378 113.23 154.524 113.407 154.667 113.587C154.675 113.598 154.683 113.605 154.691 113.616C154.845 113.809 154.996 114.002 155.145 114.201H230.809C234.828 114.201 238.088 117.46 238.088 121.48V138.818C238.088 142.835 234.831 146.097 230.809 146.097H226.187L224.352 153.262H238.743C245.028 153.262 250.718 150.714 254.837 146.596C258.958 142.48 261.503 136.79 261.503 130.505C261.503 117.933 251.311 107.743 238.741 107.743L238.738 107.741Z"
              fill="#E1E1E1"
            />
            <path
              d="M108.542 122.647C108.555 122.603 108.568 122.561 108.581 122.519C108.586 122.503 108.589 122.487 108.594 122.474C108.576 122.532 108.557 122.59 108.539 122.65L108.542 122.647Z"
              fill="#E1E1E1"
            />
            <path
              d="M108.235 123.796C108.235 123.796 108.238 123.785 108.241 123.777C108.254 123.722 108.267 123.667 108.28 123.612C108.264 123.673 108.251 123.733 108.238 123.793L108.235 123.796Z"
              fill="#E1E1E1"
            />
          </g>
          <g opacity="0.5">
            <path
              d="M226.179 146.095L223.478 156.65L208.105 216.724C206.341 223.617 200.129 228.44 193.017 228.44H74.9221C67.802 228.44 61.5928 223.617 59.8311 216.724L44.4582 156.65L41.7568 146.095H112.798C117.635 152.507 125.316 156.652 133.968 156.652C142.62 156.652 150.302 152.507 155.138 146.095H226.179Z"
              fill="#E1E1E1"
            />
          </g>
          <g opacity="0.5">
            <path
              d="M133.564 156.647H44.4582L41.7568 146.092H112.798C117.559 152.403 125.076 156.519 133.564 156.647Z"
              fill="#E1E1E1"
            />
          </g>
          <g opacity="0.5">
            <path
              d="M226.181 146.095L223.479 156.649H134.374C142.862 156.522 150.379 152.408 155.139 146.095H226.181Z"
              fill="#E1E1E1"
            />
          </g>
          <g opacity="0.5">
            <path
              d="M135.812 163.782H132.121C129.288 163.782 126.99 166.08 126.99 168.914V208.124C126.99 210.958 129.288 213.255 132.121 213.255H135.812C138.646 213.255 140.943 210.958 140.943 208.124V168.914C140.943 166.08 138.646 163.782 135.812 163.782Z"
              fill="#E1E1E1"
            />
            <path
              d="M90.2808 163.814L86.6381 164.406C83.8408 164.86 81.9417 167.496 82.3963 170.293L88.6855 208.996C89.1401 211.793 91.7761 213.692 94.5734 213.238L98.2161 212.646C101.013 212.191 102.912 209.555 102.458 206.758L96.1687 168.055C95.7141 165.258 93.078 163.359 90.2808 163.814Z"
              fill="#E1E1E1"
            />
            <path
              d="M169.7 212.648L173.342 213.24C176.14 213.695 178.776 211.796 179.23 208.999L185.519 170.296C185.974 167.499 184.075 164.863 181.278 164.408L177.635 163.816C174.838 163.362 172.202 165.261 171.747 168.058L165.458 206.76C165.003 209.558 166.902 212.194 169.7 212.648Z"
              fill="#E1E1E1"
            />
          </g>
          <path
            d="M193.016 229.22H74.9218C67.4415 229.22 60.9243 224.16 59.0712 216.914L40.749 145.309H113.19L113.424 145.62C118.243 152.009 125.587 155.744 133.576 155.864C133.715 155.866 133.845 155.864 133.983 155.864C134.109 155.864 134.231 155.864 134.357 155.864C142.348 155.744 149.693 152.011 154.511 145.62L154.746 145.309H227.187L208.864 216.914C207.011 224.16 200.494 229.218 193.016 229.218V229.22ZM42.7639 146.878L60.5876 216.528C62.2633 223.079 68.1566 227.654 74.9218 227.654H193.016C199.779 227.654 205.672 223.079 207.348 216.528L225.172 146.878H155.524C150.411 153.465 142.727 157.307 134.383 157.432C134.109 157.438 133.827 157.438 133.548 157.432C125.206 157.307 117.525 153.465 112.409 146.878H42.7639Z"
            fill="#E1E1E1"
          />
          <path
            d="M155.07 219.096H133.968V220.662H155.07V219.096Z"
            fill="#E1E1E1"
          />
          <path
            d="M207.115 219.096H169.024V220.662H207.115V219.096Z"
            fill="#E1E1E1"
          />
          <g opacity="0.75">
            <path
              d="M238.077 121.477V138.815C238.077 142.832 234.82 146.095 230.798 146.095H155.134C158.485 141.658 160.469 136.135 160.469 130.148C160.469 124.16 158.482 118.637 155.134 114.2H230.798C234.817 114.2 238.077 117.46 238.077 121.48V121.477Z"
              fill="#E1E1E1"
            />
          </g>
          <g opacity="0.75">
            <path
              d="M107.465 130.145C107.465 136.132 109.451 141.655 112.8 146.092H37.1357C33.1163 146.092 29.8564 142.832 29.8564 138.813V121.475C29.8564 117.458 33.1137 114.195 37.1357 114.195H112.8C109.448 118.632 107.465 124.155 107.465 130.142V130.145Z"
              fill="#E1E1E1"
            />
          </g>
          <path
            d="M230.801 146.878H153.563L154.511 145.622C157.899 141.136 159.689 135.785 159.689 130.148C159.689 124.51 157.899 119.159 154.511 114.673L153.563 113.417H230.801C235.246 113.417 238.864 117.035 238.864 121.48V138.818C238.864 143.263 235.246 146.88 230.801 146.88V146.878ZM156.656 145.312H230.801C234.382 145.312 237.298 142.399 237.298 138.815V121.477C237.298 117.896 234.385 114.981 230.801 114.981H156.656C159.671 119.47 161.255 124.682 161.255 130.145C161.255 135.608 159.671 140.82 156.656 145.309V145.312Z"
            fill="#E1E1E1"
          />
          <path
            d="M114.37 146.878H37.1346C32.6897 146.878 29.0723 143.26 29.0723 138.815V121.477C29.0723 117.032 32.6871 113.415 37.1346 113.415H114.372L113.425 114.67C110.037 119.157 108.247 124.507 108.247 130.145C108.247 135.782 110.037 141.133 113.425 145.62L114.372 146.875L114.37 146.878ZM37.1319 114.983C33.551 114.983 30.6357 117.896 30.6357 121.48V138.818C30.6357 142.399 33.5484 145.314 37.1319 145.314H111.277C108.262 140.825 106.678 135.613 106.678 130.15C106.678 124.687 108.262 119.475 111.277 114.986H37.1346L37.1319 114.983Z"
            fill="#E1E1E1"
          />
          <g opacity="0.5">
            <path
              d="M131.716 103.737C123.99 104.387 117.209 108.349 112.798 114.198C112.344 114.801 111.916 115.419 111.514 116.059L84.1093 70.3577C82.6216 67.8704 83.4281 64.6496 85.9128 63.1593L97.2063 56.389C99.691 54.9013 102.914 55.7052 104.402 58.1925L131.713 103.74L131.716 103.737Z"
              fill="#E1E1E1"
            />
          </g>
          <path
            d="M111.503 117.557L83.4429 70.7622C81.7359 67.9121 82.6651 64.2007 85.5152 62.4885L96.8087 55.7182C98.1894 54.8908 99.8102 54.6507 101.374 55.0396C102.937 55.4311 104.252 56.4072 105.08 57.7905L133.038 104.413L131.785 104.517C124.524 105.128 117.832 108.829 113.427 114.67C112.988 115.252 112.568 115.86 112.182 116.476L111.503 117.557ZM99.8989 56.4229C99.1003 56.4229 98.3147 56.6395 97.6126 57.0597L86.3191 63.8301C84.2102 65.0959 83.5212 67.8443 84.7844 69.9558L111.55 114.592C111.754 114.3 111.962 114.01 112.176 113.728C116.598 107.863 123.193 104.035 130.418 103.09L103.736 58.5944C103.122 57.5713 102.149 56.8483 100.993 56.5586C100.63 56.4673 100.264 56.4229 99.9015 56.4229H99.8989Z"
            fill="#E1E1E1"
          />
          <g opacity="0.5">
            <path
              d="M160.473 130.145C160.473 136.132 158.487 141.655 155.138 146.092C150.377 152.403 142.861 156.519 134.373 156.647C134.237 156.649 134.104 156.649 133.968 156.649C133.833 156.649 133.7 156.649 133.564 156.647C125.076 156.519 117.559 152.406 112.799 146.092C109.447 141.655 107.464 136.132 107.464 130.145C107.464 124.969 108.946 120.141 111.517 116.059C111.919 115.419 112.347 114.801 112.801 114.198C117.212 108.349 123.996 104.384 131.719 103.737C132.46 103.674 133.212 103.643 133.971 103.643C142.623 103.643 150.304 107.788 155.141 114.2C158.492 118.637 160.476 124.16 160.476 130.147L160.473 130.145Z"
              fill="#E1E1E1"
            />
          </g>
          <g opacity="0.5">
            <path
              d="M147.611 130.145C147.611 137.68 141.504 143.787 133.969 143.787C126.434 143.787 120.668 138.017 120.342 130.777C120.331 130.568 120.326 130.356 120.326 130.145C120.326 122.61 126.434 116.502 133.969 116.502C136.258 116.502 138.413 117.064 140.306 118.063C144.649 120.344 147.611 124.901 147.611 130.145Z"
              fill="#E1E1E1"
            />
          </g>
          <path
            d="M133.969 144.573C126.014 144.573 119.544 138.103 119.544 130.148C119.544 122.192 126.014 115.722 133.969 115.722C141.925 115.722 148.395 122.192 148.395 130.148C148.395 138.103 141.925 144.573 133.969 144.573ZM133.969 117.288C126.878 117.288 121.11 123.056 121.11 130.148C121.11 137.239 126.878 143.007 133.969 143.007C141.061 143.007 146.829 137.239 146.829 130.148C146.829 123.056 141.061 117.288 133.969 117.288Z"
            fill="#E1E1E1"
          />
          <path
            d="M133.969 157.433C118.923 157.433 106.682 145.192 106.682 130.145C106.682 115.098 118.923 102.857 133.969 102.857C149.016 102.857 161.257 115.098 161.257 130.145C161.257 145.192 149.016 157.433 133.969 157.433ZM133.969 104.426C119.786 104.426 108.248 115.965 108.248 130.148C108.248 144.33 119.786 155.869 133.969 155.869C148.152 155.869 159.691 144.33 159.691 130.148C159.691 115.965 148.152 104.426 133.969 104.426Z"
            fill="#E1E1E1"
          />
          <path
            d="M97.4416 137.406H52.0459V138.972H97.4416V137.406Z"
            fill="#E1E1E1"
          />
          <path
            d="M184.428 137.406H169.023V138.972H184.428V137.406Z"
            fill="#E1E1E1"
          />
          <g opacity="0.5">
            <path
              d="M200.286 35.6736H139.496C136.194 35.6736 133.517 38.3514 133.517 41.6531V76.447C133.517 79.7487 136.194 82.4265 139.496 82.4265H149.179V88.0615C149.179 90.6558 152.241 92.0313 154.183 90.3113L163.067 82.4265H200.283C203.585 82.4265 206.263 79.7487 206.263 76.447V41.6531C206.263 38.3514 203.585 35.6736 200.283 35.6736H200.286Z"
              fill="#E1E1E1"
            />
          </g>
          <path
            d="M152.2 91.8616C151.673 91.8616 151.141 91.7494 150.632 91.5223C149.254 90.9011 148.395 89.5779 148.395 88.0667V83.2147H139.495C135.765 83.2147 132.732 80.1819 132.732 76.4522V41.6583C132.732 37.9286 135.765 34.8958 139.495 34.8958H200.284C204.014 34.8958 207.047 37.9286 207.047 41.6583V76.4522C207.047 80.1819 204.014 83.2147 200.284 83.2147H163.366L154.703 90.9011C153.988 91.5354 153.103 91.8642 152.203 91.8642L152.2 91.8616ZM139.495 36.4565C136.629 36.4565 134.298 38.7873 134.298 41.653V76.447C134.298 79.3127 136.629 81.6435 139.495 81.6435H149.961V88.0615C149.961 88.9619 150.452 89.7214 151.274 90.0894C152.096 90.4574 152.989 90.3217 153.662 89.724L162.771 81.6435H200.284C203.15 81.6435 205.481 79.3127 205.481 76.447V41.653C205.481 38.7873 203.15 36.4565 200.284 36.4565H139.495Z"
            fill="#E1E1E1"
          />
          <path
            d="M180.118 60.9802C180.118 64.9421 179.228 68.001 177.448 70.1491C175.668 72.2997 173.159 73.3724 169.92 73.3724C166.681 73.3724 164.129 72.2919 162.344 70.1282C160.556 67.9645 159.663 64.916 159.663 60.9802V55.6192C159.663 51.6572 160.553 48.6009 162.333 46.4503C164.113 44.3023 166.629 43.2269 169.879 43.2269C173.128 43.2269 175.649 44.3075 177.435 46.4712C179.222 48.6349 180.115 51.6912 180.115 55.6401V60.9802H180.118ZM173.326 54.7527C173.326 52.6438 173.05 51.0674 172.499 50.026C171.948 48.9846 171.074 48.4652 169.879 48.4652C168.683 48.4652 167.861 48.9481 167.329 49.9164C166.799 50.8847 166.512 52.3489 166.473 54.309V61.8049C166.473 63.9947 166.747 65.5972 167.297 66.6099C167.848 67.6252 168.722 68.1316 169.918 68.1316C171.113 68.1316 171.925 67.6383 172.478 66.6491C173.029 65.6625 173.311 64.1122 173.324 62.0033V54.7475L173.326 54.7527Z"
            fill="#E1E1E1"
          />
          <path
            d="M98.3817 107.905C98.366 107.905 98.3503 107.905 98.3347 107.905C97.8153 107.874 97.2933 107.843 96.7687 107.809C96.338 107.782 96.0092 107.409 96.0379 106.979C96.0666 106.548 96.4398 106.222 96.8679 106.248C97.3899 106.282 97.9092 106.313 98.4286 106.344C98.8593 106.37 99.1881 106.741 99.162 107.174C99.1359 107.589 98.7914 107.91 98.3817 107.91V107.905Z"
            fill="#E1E1E1"
          />
          <path
            d="M93.6472 107.584C93.6263 107.584 93.6054 107.584 93.5845 107.584C92.4309 107.493 91.3869 107.394 90.3951 107.287C89.9645 107.24 89.6539 106.853 89.7035 106.423C89.7504 105.992 90.1367 105.681 90.5674 105.731C91.5435 105.838 92.5718 105.935 93.7098 106.026C94.1405 106.06 94.4615 106.438 94.4276 106.869C94.3962 107.279 94.0517 107.589 93.6472 107.589V107.584ZM87.3284 106.877C87.2892 106.877 87.2474 106.874 87.2083 106.866C86.1043 106.697 85.0368 106.504 84.0345 106.29C83.6117 106.198 83.3429 105.783 83.4316 105.36C83.5204 104.938 83.938 104.669 84.3608 104.757C85.3317 104.966 86.3705 105.154 87.4432 105.319C87.8712 105.384 88.1636 105.783 88.0983 106.211C88.0383 106.598 87.7042 106.874 87.3258 106.874L87.3284 106.877ZM81.1166 105.533C81.0435 105.533 80.9704 105.522 80.8973 105.501C79.8298 105.188 78.7963 104.836 77.8227 104.452C77.4208 104.293 77.2224 103.839 77.3817 103.437C77.5409 103.035 77.995 102.836 78.3969 102.996C79.3261 103.361 80.3153 103.7 81.3384 103.998C81.7534 104.121 81.9909 104.554 81.8708 104.969C81.7717 105.311 81.4585 105.533 81.1192 105.533H81.1166ZM75.218 103.189C75.0953 103.189 74.9726 103.16 74.8552 103.1C73.9991 102.651 73.1665 102.161 72.3809 101.639C72.2687 101.565 72.159 101.49 72.0494 101.414C71.6945 101.169 71.6031 100.681 71.8484 100.326C72.0938 99.9707 72.5819 99.8794 72.9368 100.125C73.0386 100.195 73.143 100.266 73.2474 100.334C73.986 100.824 74.7717 101.289 75.5808 101.712C75.9644 101.913 76.1132 102.385 75.9122 102.769C75.7713 103.035 75.4998 103.189 75.218 103.189ZM70.0058 99.5766C69.8179 99.5766 69.6299 99.5088 69.4812 99.3756C68.6851 98.6553 67.9152 97.8697 67.1896 97.0423C66.9051 96.716 66.939 96.2228 67.2653 95.9383C67.5915 95.6538 68.0848 95.6877 68.3693 96.014C69.0531 96.797 69.7787 97.5382 70.5304 98.2168C70.8514 98.5065 70.8749 99.0024 70.5852 99.3234C70.4312 99.4957 70.2172 99.5818 70.0032 99.5818L70.0058 99.5766ZM65.8298 94.8003C65.5818 94.8003 65.3365 94.6829 65.1851 94.461C64.5639 93.5632 63.9924 92.6236 63.4834 91.6709C63.2798 91.2899 63.4234 90.8148 63.8044 90.6113C64.1855 90.4077 64.6605 90.5512 64.8641 90.9323C65.3443 91.8327 65.8846 92.7201 66.4719 93.5684C66.7172 93.9234 66.6285 94.4114 66.2735 94.6568C66.1378 94.7507 65.9838 94.7951 65.8298 94.7951V94.8003ZM62.8466 89.1993C62.5334 89.1993 62.2358 89.0087 62.1158 88.6981C61.7138 87.662 61.385 86.6075 61.1318 85.5661C61.03 85.1459 61.2884 84.7231 61.7086 84.6213C62.1314 84.5195 62.5516 84.7779 62.6534 85.1981C62.8883 86.1717 63.1989 87.1582 63.5748 88.1292C63.7314 88.5337 63.5304 88.9852 63.1284 89.1418C63.0345 89.1784 62.9405 89.194 62.8466 89.194V89.1993ZM61.1892 84.3499C61.0509 84.3499 60.9126 84.3499 60.7742 84.342C60.341 84.329 60.0017 83.9662 60.0173 83.5329C60.0304 83.1101 60.3775 82.776 60.8003 82.776C60.6881 82.6534 60.615 82.4942 60.5994 82.3167C60.5498 81.7399 60.5237 81.1605 60.5237 80.5941C60.5237 80.0616 60.5472 79.5292 60.5889 79.0098C60.6255 78.5792 61.0039 78.2581 61.4346 78.2947C61.8652 78.3312 62.1862 78.7097 62.1497 79.1403C62.1105 79.6153 62.0897 80.106 62.0897 80.5941C62.0897 81.1161 62.1132 81.6511 62.1601 82.1836C62.1784 82.4002 62.1079 82.6064 61.9748 82.7578C62.5647 82.7186 63.1806 82.6403 63.8123 82.5203C64.2377 82.4394 64.6475 82.7186 64.7284 83.1414C64.8093 83.5643 64.53 83.9766 64.1072 84.0576C63.0919 84.2507 62.1105 84.3499 61.1892 84.3499ZM57.684 83.7705C57.5952 83.7705 57.5065 83.7548 57.4178 83.7235C56.4077 83.3607 55.4002 82.8413 54.4267 82.1836C54.0691 81.9408 53.9752 81.4554 54.2153 81.0952C54.458 80.7376 54.9435 80.6437 55.3037 80.8838C56.1676 81.4684 57.0576 81.9278 57.945 82.2462C58.3521 82.3924 58.5636 82.8413 58.4174 83.2485C58.3026 83.5669 58.0024 83.7678 57.6814 83.7678L57.684 83.7705ZM67.0226 83.2354C66.6989 83.2354 66.3962 83.0318 66.2839 82.7108C66.143 82.3036 66.357 81.8573 66.7668 81.7138C67.8369 81.3405 68.7399 80.936 69.5256 80.4766C69.8988 80.2574 70.379 80.3853 70.5957 80.7585C70.8149 81.1317 70.687 81.612 70.3138 81.8286C69.4394 82.3402 68.4476 82.7865 67.281 83.1936C67.1948 83.2224 67.1087 83.238 67.0226 83.238V83.2354ZM52.4196 80.2992C52.2213 80.2992 52.0229 80.2235 51.8715 80.0747C51.1329 79.3517 50.3995 78.5296 49.6922 77.6265C49.4259 77.2872 49.4834 76.7939 49.8227 76.5277C50.162 76.2589 50.6553 76.3189 50.9215 76.6582C51.5896 77.5065 52.2787 78.2816 52.9677 78.9576C53.2757 79.2604 53.2809 79.7563 52.9782 80.0643C52.8242 80.2209 52.6232 80.2992 52.4196 80.2992ZM72.3731 79.939C72.193 79.939 72.0103 79.8763 71.8615 79.7484C71.5353 79.4666 71.4987 78.9707 71.7806 78.6444L71.8354 78.5792C72.4227 77.8797 72.8481 77.0471 73.0647 76.1701C73.1691 75.7499 73.5945 75.4941 74.0148 75.5985C74.435 75.7029 74.6907 76.1284 74.5863 76.5486C74.3097 77.6552 73.7746 78.7044 73.036 79.584L72.9655 79.6675C72.8115 79.8476 72.5923 79.939 72.3731 79.939ZM61.9409 76.7391C61.8652 76.7391 61.7869 76.7287 61.7086 76.7026C61.2962 76.5747 61.0639 76.1362 61.1918 75.7238C61.5416 74.5989 62.0479 73.568 62.6978 72.6571C62.9484 72.3047 63.439 72.2238 63.7914 72.4744C64.1437 72.7249 64.2246 73.2156 63.9741 73.568C63.4208 74.3405 62.9901 75.2227 62.69 76.1884C62.5856 76.5251 62.2776 76.7391 61.9435 76.7391H61.9409ZM48.4681 75.3349C48.2097 75.3349 47.9591 75.207 47.8077 74.9748C47.2492 74.1082 46.6959 73.1712 46.1608 72.1899C45.9546 71.8114 46.093 71.3338 46.474 71.1276C46.8525 70.9214 47.3301 71.0598 47.5363 71.4408C48.0531 72.3882 48.5881 73.2913 49.1258 74.1265C49.3607 74.4893 49.2537 74.9748 48.8909 75.2097C48.7604 75.2932 48.6142 75.3349 48.4681 75.3349ZM73.7198 74.0143C73.3988 74.0143 73.0986 73.8159 72.9838 73.4975C72.9238 73.3305 72.8481 73.166 72.7646 73.0094C72.4409 72.4065 71.9502 71.9106 71.3082 71.5374C70.9349 71.3208 70.8071 70.8405 71.0237 70.4673C71.2403 70.0941 71.7206 69.9662 72.0938 70.1828C72.9786 70.697 73.6859 71.4173 74.1426 72.2656C74.2627 72.49 74.3671 72.7223 74.4532 72.9624C74.602 73.3696 74.3906 73.8185 73.986 73.9647C73.8973 73.996 73.8086 74.0117 73.7198 74.0117V74.0143ZM65.6367 71.7357C65.3704 71.7357 65.1094 71.6 64.9633 71.3547C64.7414 70.9841 64.8615 70.5038 65.2321 70.282C65.5114 70.1149 65.7985 69.9662 66.0934 69.8409C66.8738 69.5042 67.756 69.3189 68.6434 69.3058C69.0766 69.3058 69.4316 69.6451 69.4368 70.0784C69.442 70.5117 69.0975 70.8666 68.6643 70.8718C67.9804 70.8797 67.3071 71.0206 66.7146 71.2764C66.4849 71.3756 66.2552 71.493 66.036 71.6261C65.9107 71.7018 65.7724 71.7384 65.634 71.7384L65.6367 71.7357ZM45.4092 69.7626C45.1168 69.7626 44.835 69.5982 44.7018 69.3137C44.2581 68.3741 43.8197 67.3849 43.3968 66.3722C43.2298 65.9729 43.4203 65.5135 43.8197 65.3491C44.219 65.182 44.6784 65.3726 44.8428 65.7719C45.2552 66.7611 45.6832 67.7294 46.1165 68.6455C46.3018 69.037 46.1347 69.5042 45.7432 69.6869C45.6362 69.7391 45.5214 69.7626 45.4092 69.7626ZM42.961 63.8927C42.6426 63.8927 42.3424 63.6969 42.225 63.3811C41.8622 62.3946 41.5072 61.374 41.1731 60.3483C41.04 59.9385 41.2645 59.4948 41.6742 59.3617C42.084 59.226 42.5277 59.4531 42.6608 59.8629C42.9897 60.8703 43.3368 61.8726 43.6944 62.8409C43.8432 63.2454 43.637 63.6969 43.2298 63.8457C43.1411 63.8796 43.0497 63.8953 42.9584 63.8953L42.961 63.8927Z"
            fill="#E1E1E1"
          />
          <path
            d="M40.9798 57.8297C40.6405 57.8297 40.3273 57.6052 40.2281 57.2633C40.0768 56.7361 39.9358 56.2272 39.8053 55.7417C39.6931 55.3241 39.941 54.8935 40.3586 54.7838C40.7762 54.6716 41.2043 54.9196 41.3165 55.3372C41.4444 55.8122 41.5827 56.3133 41.7315 56.8301C41.8516 57.2451 41.6114 57.6783 41.1964 57.7984C41.1234 57.8193 41.0503 57.8297 40.9798 57.8297Z"
            fill="#E1E1E1"
          />
          <path
            d="M44.5154 39.2556C49.8729 37.6105 53.5811 34.2092 52.7979 31.6586C52.0147 29.108 47.0367 28.3739 41.6792 30.0191C36.3216 31.6642 32.6134 35.0655 33.3966 37.6161C34.1798 40.1667 39.1579 40.9007 44.5154 39.2556Z"
            fill="#E1E1E1"
          />
          <g opacity="0.5">
            <path
              d="M40.8671 50.7133C44.1732 49.3459 45.1169 44.0391 42.9749 38.8602C40.8329 33.6812 36.4163 30.5914 33.1102 31.9588C29.8041 33.3262 28.8605 38.633 31.0025 43.812C33.1445 48.9909 37.561 52.0807 40.8671 50.7133Z"
              fill="#E1E1E1"
            />
          </g>
          <path
            d="M39.1979 51.8264C37.8564 51.8264 36.4339 51.3305 35.048 50.3622C33.0644 48.9737 31.3705 46.7552 30.2769 44.1139C29.1834 41.4726 28.8153 38.706 29.2408 36.3204C29.6871 33.8096 30.9555 32.0035 32.8086 31.2361C36.5096 29.7067 41.3929 32.9927 43.6976 38.5624C44.7912 41.2037 45.1592 43.9703 44.7337 46.3559C44.2874 48.8667 43.019 50.6728 41.1659 51.4401C40.5395 51.6985 39.8791 51.8264 39.1979 51.8264ZM34.8001 32.4132C34.3198 32.4132 33.8526 32.502 33.4089 32.6847C32.0648 33.2406 31.133 34.6291 30.7833 36.5945C30.4101 38.6877 30.7441 41.1463 31.7255 43.5136C32.7069 45.8808 34.205 47.8592 35.9459 49.0781C37.5823 50.2239 39.224 50.5475 40.5682 49.9916C41.9123 49.4357 42.8441 48.0471 43.1938 46.0818C43.5671 43.9886 43.233 41.53 42.2516 39.1627C40.5786 35.1172 37.4753 32.4132 34.8001 32.4132Z"
            fill="#E1E1E1"
          />
          <path
            d="M52.1694 42.5882C52.9481 40.0362 49.234 36.6414 43.8736 35.0056C38.5132 33.3698 33.5365 34.1126 32.7577 36.6645C31.979 39.2165 35.6931 42.6113 41.0535 44.2471C46.4139 45.8829 51.3906 45.1401 52.1694 42.5882Z"
            fill="#E1E1E1"
          />
          <path
            d="M46.5046 45.8991C44.7351 45.8991 42.7802 45.5912 40.8253 44.9961C38.1239 44.1713 35.7253 42.8872 34.0758 41.376C32.2723 39.7291 31.5389 37.9752 32.0087 36.4353C32.4785 34.8954 34.068 33.8514 36.4822 33.4912C38.6955 33.1623 41.4021 33.4338 44.1034 34.2585C49.9655 36.0464 53.8387 39.8074 52.92 42.8193C52.4502 44.3592 50.8607 45.4032 48.4465 45.766C47.8331 45.8574 47.1832 45.9017 46.5046 45.9017V45.8991ZM38.4345 34.9189C37.8316 34.9189 37.2574 34.958 36.7145 35.0389C34.9554 35.2999 33.7861 35.9759 33.5068 36.892C33.2276 37.8081 33.82 39.0218 35.1329 40.2198C36.6153 41.5744 38.7999 42.7384 41.2846 43.4979C43.7694 44.2548 46.2306 44.5106 48.2168 44.2131C49.9759 43.9521 51.1452 43.2761 51.4245 42.36C51.983 40.5278 48.9267 37.3644 43.6493 35.7541C41.8432 35.2034 40.0449 34.9189 38.4371 34.9189H38.4345Z"
            fill="#E1E1E1"
          />
          <path
            d="M39.2426 51.8135C35.9149 51.8135 32.2008 48.7572 30.2799 44.1114C29.1863 41.4701 28.8183 38.7035 29.2437 36.3179C29.69 33.8071 30.9585 32.001 32.8116 31.2336C34.067 30.7142 35.4868 30.7247 36.9406 31.2597C38.2717 30.4585 39.822 29.7746 41.4481 29.2761C47.3075 27.4778 52.6215 28.4253 53.5454 31.4346C54.1248 33.3242 52.9034 35.4932 50.2542 37.3697C52.4466 39.1289 53.4358 41.1151 52.9164 42.8168C52.2169 45.1058 49.0771 46.2464 44.815 45.8105C44.4704 48.5484 43.1393 50.6207 41.1662 51.4376C40.5528 51.6908 39.9056 51.8135 39.2426 51.8135ZM34.7691 32.4186C34.2914 32.4186 33.8347 32.5047 33.4119 32.6796C32.0677 33.2355 31.136 34.624 30.7862 36.592C30.413 38.6852 30.7471 41.1438 31.7284 43.5111C33.7016 48.2822 37.6688 51.1897 40.5711 49.9891C42.1684 49.3288 43.1994 47.4235 43.3299 44.8918L43.3742 44.0331L44.2251 44.1557C47.9156 44.6908 50.9432 43.9313 51.4261 42.3575C51.7967 41.1438 50.6561 39.4656 48.4533 37.9805L47.438 37.2967L48.4846 36.6624C51.0633 35.099 52.4649 33.2277 52.0551 31.894C51.4939 30.0644 47.1901 29.1535 41.9153 30.7717C40.2788 31.2754 38.7337 31.9723 37.4443 32.7918L37.0946 33.0137L36.7135 32.8492C36.0428 32.5621 35.3903 32.416 34.7743 32.416L34.7691 32.4186Z"
            fill="#E1E1E1"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_6393">
            <rect
              width="261"
              height="261"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>

      {/* Empty Message */}
      <div className="flex flex-col items-center gap-2">
        <p className="font-bold text-[32px] leading-[48px] text-center lg:text-[40px] lg:leading-[60px]">
          Your cart is empty
        </p>
        <p className="font-semibold text-[18px] leading-6 text-center">
          Looks like you have not added anything to your cart.
          <br />
          Go ahead & explore top categories.
        </p>
      </div>
      <Link
        to="/products/categories/all-men"
        className="bg-[#222] text-white h-[54px] py-[17px] px-2.5 lg:mb-[137px] hover:bg-[#DEF81C] hover:text-[#222] !important"
      >
        Continue shopping
      </Link>
    </>
  );
}

export default CartEmpty;
