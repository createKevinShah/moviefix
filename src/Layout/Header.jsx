import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-[50px] bg-black z-20">
      <div className="bg-black primary-layout">
        <div className="w-[190px] ml-4">
          <a href="/">
            <div className="flex items-center justify-center w-full ml-[12px]">
              <p className="py-4 text-3xl font-semibold text-red-100">
                Moviefix
              </p>
              <img
                src="/moviefix-logo.png"
                className="w-[90px] h-[90px]"
                alt="Moviefix"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
