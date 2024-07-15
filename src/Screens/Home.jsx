import React from "react";
import { Image } from "../Images/Images";
import Model from "../Components/Model";
function Home() {
  return (
    <div>
      <div className="h-screen w-screen ">
        <div
          style={{
            backgroundImage: `url(${Image.bg1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full h-full "
        >
          <div className="w-full h-full">
            <Model />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
