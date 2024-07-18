import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Screens/Home";
import Products from "./Screens/Products";
import Lottie from "lottie-web";
import animationData from "./Images/Animation.json"; // Adjust path as per your file location

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: document.getElementById("lottie-container"),
      animationData: animationData,
      renderer: "svg",
      autoplay: true,
      loop: false,
    });

    // Show animation for 1 second
    setTimeout(() => {
      setLoading(false);
      animation.destroy(); // Cleanup animation instance
    }, 1000);

    return () => {
      animation.destroy(); // Cleanup animation instance if component unmounts
    };
  }, []);

  return (
    <div className="overflow-hidden font-Lato">
      {loading && (
        <div className="w-full h-screen flex bg-blue-500 flex-col justify-center items-center align-middle m-auto">
          <div id="lottie-container" className="w-52 h-52"></div>
        </div>
      )}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
