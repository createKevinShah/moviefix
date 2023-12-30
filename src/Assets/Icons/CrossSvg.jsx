import React from "react";

const CrossSvg = ({ size = 24, className = "", strokeWidth = "1.5" }) => {
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
          strokeWidth={strokeWidth}
          d="M6.464 6.465l7.072 7.07M6.464 13.536l7.072-7.071"
        ></path>
      </svg>
    </span>
  );
};

export default CrossSvg;
