import React from "react";

const CustomButton = ({
  text,
  isSelected = false,
  onClick,
  disableSelection,
}) => {
  return (
    <button
      className={`flex items-center justify-center max-w-[200px] py-2 px-4 rounded-lg ${
        isSelected ? "bg-red-100" : "bg-grey-100"
      }
      ${disableSelection && "cursor-default bg-red-100"}
      `}
      onClick={onClick}
    >
      <p className="font-normal text-base capitalize text-white whitespace-nowrap">
        {text}
      </p>
    </button>
  );
};

export default CustomButton;
