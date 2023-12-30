import React from "react";

const ResetSvg = ({ className }) => {
  return (
    <span className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M14.665 8A6.67 6.67 0 018 14.667c-3.68 0-5.927-3.707-5.927-3.707m0 0h3.013m-3.013 0v3.333M1.332 8c0-3.68 2.96-6.667 6.667-6.667 4.446 0 6.666 3.707 6.666 3.707m0 0V1.707m0 3.333h-2.96"
        ></path>
      </svg>
    </span>
  );
};

export default ResetSvg;
