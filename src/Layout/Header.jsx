import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 h-[50px] bg-black z-20">
      <div className="primary-layout bg-black">
        <div
          role="button"
          className="flex items-center justify-start w-[162px]"
          onClick={() => navigate("/")}
        >
          <p className="text-red-100 font-semibold text-3xl pl-4 py-4">
            Moviefix
          </p>
          <img
            src="/moviefix-logo.png"
            className="w-[90px] h-[90px] ml-[-10px]"
            alt="Moviefix"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
