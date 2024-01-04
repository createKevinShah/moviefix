import React from "react";

const BlankProfile = ({ size = 140 }) => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 256 256"
      >
        <g fill="none" strokeMiterlimit="10" strokeWidth="0">
          <path
            fill="#D6D6D6"
            d="M45 88c-11.049 0-21.18-2.003-29.021-8.634C6.212 71.105 0 58.764 0 45 0 20.187 20.187 0 45 0s45 20.187 45 45c0 13.765-6.212 26.105-15.979 34.366C66.181 85.998 56.049 88 45 88z"
            transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          ></path>
          <path
            fill="#A5A4A4"
            d="M45 60.71c-11.479 0-20.818-9.339-20.818-20.817 0-11.479 9.339-20.818 20.818-20.818 11.479 0 20.817 9.339 20.817 20.818 0 11.478-9.338 20.817-20.817 20.817z"
            transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          ></path>
          <path
            fill="#A5A4A4"
            d="M45 90a45.021 45.021 0 01-29.028-10.625 2 2 0 01-.579-2.237C20.034 64.919 31.933 56.71 45 56.71s24.966 8.209 29.607 20.428a2 2 0 01-.579 2.237A45.021 45.021 0 0145 90z"
            transform="matrix(2.81 0 0 2.81 1.407 1.407)"
          ></path>
        </g>
      </svg>
    </span>
  );
};

export default BlankProfile;
