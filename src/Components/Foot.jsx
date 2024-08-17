import React, { useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Foot() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textColorClass =
    scrollPosition > window.innerHeight ? "text-white" : "text-white";

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`h-auto w-full bg-white text-${textColorClass}`}>
      <div className="flex flex-row md:flex-row p-6 md:p-10 justify-between  items-start md:items-center">
        <div className="flex flex-col md:flex-row md:gap-10 text-black">
          <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">Pages</div>
            <div>
              <a href="/" className="hover:underline">
                Home
              </a>
            </div>
            <div>
              <a
                href="#about"
                onClick={(e) => handleSmoothScroll(e, "about")}
                className="hover:underline"
              >
                About
              </a>
            </div>
            <div>
              <a
                href="#story"
                onClick={(e) => handleSmoothScroll(e, "story")}
                className="hover:underline"
              >
                Story
              </a>
            </div>
            <div>
              <a href="/products" className="hover:underline">
                Products
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:mt-0 -mt-6">
            <div className="text-lg font-semibold">&nbsp;</div>
            <div>
              <a href="/terms-conditions" className="hover:underline">
                Terms and Conditions
              </a>
            </div>
            <div>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </div>
            <div>
              <a href="/refund" className="hover:underline">
                Refund
              </a>
            </div>
            <div>
              <a href="/faq" className="hover:underline">
                FAQ's
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center md:items-end">
          <div className="text-lg font-semibold">Contact Us</div>
          <div className="flex flex-row gap-4 text-black">
            <a
              href="https://www.instagram.com"
              className="text-3xl hover:text-gray-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              className="text-3xl hover:text-gray-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com"
              className="text-3xl hover:text-gray-400"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.whatsapp.com"
              className="text-3xl hover:text-gray-400"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      {/* <p className="text-center text-xl py-10 font-semibold md:-mt-24">
        Made with <span className="text-red-500">❤️</span> from NerdTech
      </p> */}
      <p className="text-center text-2xl py-4 md:py-10 font-semibold md:-mt-24 relative">
        Made with
        <span className="text-red-500 mx-2 animate-pulse">❤️</span>
        from
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          &nbsp;NerdTech
        </span>
        {/* <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-lg"></span> */}
      </p>
    </div>
  );
}

export default Foot;
