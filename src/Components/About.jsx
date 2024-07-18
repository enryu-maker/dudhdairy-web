import React from "react";
import { Image } from "../Images/Images";
function About() {
  return (
    <div className="w-full h-full py-10">
      <div className="text-center w-full h-fit flex justify-center py-6">
        <p className="text-4xl">About Us</p>
      </div>
      <div className="flex flex-row w-full h-full justify-center align-middle">
        <div className="flex flex-wrap w-full h-full justify-evenly">
          <div className="flex flex-col w-80 text-justify">
            <div className="flex flex-col justify-between h-44">
              <div>
                Our team consists of experienced professionals who deals with
                all our things with love and care!
              </div>
              <div className="flex flex-row justify-center align-bottom ">
                <img src={Image.m1} className="w-24 h-20 " />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-80 text-justify">
            <div className="flex flex-col justify-between h-44">
              <div>
                We attach great importance to the balance between caring for
                animals and creating high-quality products!
              </div>
              <div className="flex flex-row justify-center">
                <img src={Image.m2} className="w-20 h-20" />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-80 text-justify">
            <div className="flex flex-col justify-between h-44">
              <div>
                We stive to make sure that you'll be satisfied with our every
                milk product available!
              </div>
              <div className="flex flex-row justify-center">
                <img src={Image.m3} className="w-20 h-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
