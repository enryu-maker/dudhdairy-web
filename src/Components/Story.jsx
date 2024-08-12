import React from "react";

function Story() {
  return (
    <div className="w-full h-full border-b-2 border-blue-500 bg-blue-50">
      <div className="w-full h-full flex flex-col gap-8 md:gap-10 justify-center items-center py-10 px-4 md:px-8">
        <div>
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
            Our Story
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-xl md:text-2xl lg:text-3xl text-center font-light tracking-wide leading-snug px-4 md:px-8">
            Our story started from a small farm. We have now grown to become one
            of the best and leading producers and suppliers of dairy products.
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-sm md:text-base lg:text-xl text-center font-light px-4 md:px-8">
            We are proud of our journey and long history of creating natural
            products of the highest quality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Story;
