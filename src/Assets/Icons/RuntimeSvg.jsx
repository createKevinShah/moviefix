import React from "react";

const RuntimeSvg = ({ className }) => {
  return (
    <span className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 38 38"
      >
        <path
          fill="currentColor"
          d="M19 .667C8.88.667.667 8.88.667 19S8.88 37.334 19 37.334 37.333 29.12 37.333 19 29.12.667 19 .667zm4.877 21.505l-2.347 1.357-2.347 1.356c-3.025 1.742-5.5.312-5.5-3.171v-5.427c0-3.502 2.475-4.913 5.5-3.172l2.347 1.357 2.347 1.357c3.025 1.741 3.025 4.601 0 6.343z"
        ></path>
      </svg>
    </span>
  );
};

export default RuntimeSvg;
