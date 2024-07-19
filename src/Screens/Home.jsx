import React, { useEffect } from "react";
import { Image } from "../Images/Images";
import About from "../Components/About";
import Products from "../Components/Products";
import Story from "../Components/Story";

function Home() {
  return (
    <div className="">
      <div id="home" className="h-[100vh] w-screen">
        <div
          style={{
            backgroundImage: `url(${Image.homebg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full h-full rounded-bl-[200px] rounded-br-[200px]"
        >
          <div className="flex flex-col align-middle justify-center h-full w-full text-gray-300">
            <div className=" pl-20">
              <p className="text-8xl">Welcome to </p>
              <p className="text-7xl">DudhDairy</p>
            </div>
            <div className="w-2/4 pl-20 py-10">
              <p className="text-xl text-justify">
                At Dudhdairy, our mission is to provide you with the finest
                dairy products, ensuring freshness, quality, and exceptional
                taste in every bite and sip. Our range of dairy products is
                crafted with the utmost care, using only the highest quality
                ingredients sourced from trusted local farms.
              </p>
              {/* <p className="text-4xl">with delivary service!</p> */}
            </div>
            <a href="/products">
              <button className="bg-gray-100 transition-all ease-in-out hover:shadow-2xl px-6 text-lg py-2 w-fit ml-20 rounded-2xl text-black">
                Discover Products
              </button>
            </a>
          </div>
        </div>
      </div>
      <div id="about" className="h-fit w-screen">
        <About />
      </div>
      <div className="h-fit w-screen ">
        <Products />
      </div>
      <div id="story" className="h-screen w-screen">
        <Story />
      </div>
    </div>
  );
}

export default Home;
