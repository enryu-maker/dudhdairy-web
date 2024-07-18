import React from "react";

function Nav() {
  return (
    <div className="top-0 sticky ">
      <div className="w-full top-0 fixed h-16 bg-transparent backdrop-blur-lg flex flex-col">
        <div className="flex flex-row flex-wrap w-full h-full text-white items-center justify-center gap-8 sm:gap-10 md:gap-16 lg:gap-32 overflow-hidden text-center">
          <div>
            <p className="link link-underline link-underline-black  font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
              Home
            </p>
          </div>
          <div>
            <p className="link link-underline link-underline-black  font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
              About
            </p>
          </div>
          <div>
            <p className="link link-underline link-underline-black  font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
              Contact
            </p>
          </div>
          <div>
            <p className="link link-underline link-underline-black  font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
              Etc
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
