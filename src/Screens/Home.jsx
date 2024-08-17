import React from "react";
import { Image } from "../Images/Images";
import About from "../Components/About";
import Products from "../Components/Products";
import Story from "../Components/Story";

function Home() {
  return (
    <div className="font-Lato">
      {/* Home Section */}
      <div
        id="home"
        className="relative h-screen w-full overflow-hidden md:rounded-b-[200px] rounded-none "
      >
        <div
          style={{
            backgroundImage: `url(${Image.homebg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full h-full flex flex-col justify-center items-start bg-gray-900 bg-opacity-50"
        >
          <div className="p-6 md:p-10 lg:p-20 text-white">
            <p className="text-4xl md:text-5xl lg:text-8xl font-bold">
              Welcome to
            </p>
            <p className="text-3xl md:text-4xl lg:text-7xl font-bold">
              DudhDairy
            </p>
            <div className="mt-4 md:mt-6 lg:mt-10 max-w-lg">
              <p className="text-sm md:text-lg lg:text-xl text-justify">
                At Dudhdairy, our mission is to provide you with the finest
                dairy products, ensuring freshness, quality, and exceptional
                taste in every bite and sip. Our range of dairy products is
                crafted with the utmost care, using only the highest quality
                ingredients sourced from trusted local farms.
              </p>
            </div>
            <a href="/products">
              <button className="bg-gray-100 text-black transition-all ease-in-out hover:shadow-2xl px-4 md:px-6 py-2 md:py-3 mt-4 rounded-2xl text-sm md:text-lg lg:text-xl">
                Discover Products
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="h-fit w-screen">
        <About />
      </div>
      <div className="h-fit w-screen ">
        <Products />
      </div>
      <div id="story" className="md:h-screen h-full w-screen">
        <Story />
      </div>
    </div>
  );
}

export default Home;
