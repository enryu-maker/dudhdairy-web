import React from "react";

function Nav() {
  return (
    <div className="top-0 sticky border-white border-b-[1px]">
      <div className="w-full top-0 sticky h-20 bg-blue-500 flex flex-col">
        <div className="flex flex-row flex-wrap w-full h-full items-center justify-center gap-8 sm:gap-10 md:gap-16 lg:gap-32 overflow-hidden text-center">
          <div>
            <p className="link link-underline link-underline-black text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
              Home
            </p>
          </div>
          <div>
            <p className="link link-underline link-underline-black text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
              Home
            </p>
          </div>
          <div>
            <p className="link link-underline link-underline-black text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
              Home
            </p>
          </div>
          <div>
            <p className="link link-underline link-underline-black text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
              Home
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
