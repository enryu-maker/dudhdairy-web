import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Screens/Home";
import Products from "./Screens/Products";
import Lottie from "lottie-web";
import animationData from "./Images/Animation.json"; // Adjust path as per your file location
import Foot from "./Components/Foot";
import Privacy from "./Screens/Privacy";
import Terms from "./Screens/Terms";
import Refund from "./Screens/Refund";
import FAQ from "./Screens/Faq";

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
    }, 500);

    return () => {
      animation.destroy(); // Cleanup animation instance if component unmounts
    };
  }, []);

  return (
    <div className="overflow-hidden font-Lato">
      {loading && (
        <div className="w-full h-screen flex bg-blue-500 flex-col justify-center items-center align-middle m-auto">
          <div id="lottie-container" className="w-[300px] h-[600px]"></div>
        </div>
      )}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Foot />
    </div>
  );
}

export default App;
