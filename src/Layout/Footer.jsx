import React from "react";
import ArrowSvg from "../Assets/Icons/ArrowSvg";

const Footer = () => {
  return (
    <div className="fixed top-20 left-0 right-0 h-[200px] bg-black z-40">
      <div className="flex justify-end primary-layout py-4">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-grey-100">
          <ArrowSvg className="text-grey-10" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
