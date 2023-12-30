import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 h-[50px] bg-black z-20">
      <div className="primary-layout p-4 bg-black">
        <div
          role="button"
          className="flex items-center justify-start gap-x-1 w-[162px]"
          onClick={() => navigate("/")}
        >
          <p className="text-red-100 font-semibold text-3xl">Moviefix</p>
          <img src="/popcorn-icon.png" className="w-10 h-10" alt="Moviefix" />
        </div>
      </div>
    </div>
  );
};

export default Header;
