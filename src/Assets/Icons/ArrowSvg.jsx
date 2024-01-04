const ArrowSvg = ({ size = 20, className = "", strokeWidth = "2" }) => {
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
          strokeMiterlimit="10"
          strokeWidth={strokeWidth}
          d="M7.974 4.942L2.916 10l5.058 5.058M17.084 10H3.059"
        ></path>
      </svg>
    </span>
  );
};

export default ArrowSvg;
