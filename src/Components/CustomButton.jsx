import React from "react";

const CustomButton = ({ text, isSelected, onClick }) => {
  return (
    <button
      className={`flex items-center justify-center py-2 px-4 rounded-lg ${
        isSelected ? "bg-red-100" : "bg-grey-100"
      }`}
      onClick={onClick}
    >
      <p className="font-normal text-base capitalize text-white">{text}</p>
    </button>
  );
};

export default CustomButton;
