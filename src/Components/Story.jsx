import React from "react";
import { PiCowLight } from "react-icons/pi";

function Story() {
  return (
    <div className="h-full w-full border-b-2 border-blue-500">
      <div className="w-full h-full bg-blue-50 flex flex-col gap-10 justify-center align-middle items-center">
        <div>
          <p className="text-5xl ">Our Story</p>
        </div>
        <div className="w-full h-fit flex items-center justify-center ">
          <p className="text-6xl flex w-5/6 text-center font-light tracking-wide leading-snug">
            Our story started from a small farm we have now grown to a best and
            leading producer and supplyer of Dairy products...!!!
          </p>
        </div>
        <div className="w-full h-fit flex items-center justify-center ">
          <p className="text-xl flex w-2/6 text-center font-light ">
            We are proud of our path and long history of creating natural
            products of the highest quality...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Story;
