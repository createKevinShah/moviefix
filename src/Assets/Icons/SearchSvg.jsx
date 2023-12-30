import React from "react";

const SearchSvg = ({ size = 20, className = "" }) => {
  return (
    <span className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.583 17.5a7.917 7.917 0 100-15.834 7.917 7.917 0 000 15.834zM18.333 18.333l-1.666-1.666"
        ></path>
      </svg>
    </span>
  );
};

export default SearchSvg;
