import React from "react";

const CheckMark = ({ width = 73, height = 73 }) => {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.6321 8.24737L0 4.61528L1.50229 3.11299L5.13439 6.74508L11.9502 0L13.4524 1.50229L5.13397 9.75L3.63168 8.24771L3.6321 8.24737Z"
        fill="white"
      />
    </svg>
  );
};

export default CheckMark;
