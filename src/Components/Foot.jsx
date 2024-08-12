import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

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
    <div className="h-[30vh] w-full">
      <div className="flex flex-row p-10 justify-between">
        <div className="flex gap-10">
          <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">Pages</div>
            <div>
              <a href="#home" onClick={(e) => handleSmoothScroll(e, "home")}>
                Home
              </a>
            </div>
            <div>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>
                About
              </a>
            </div>
            <div>
              <a href="#story" onClick={(e) => handleSmoothScroll(e, "story")}>
                Story
              </a>
            </div>
            <div>
              <a href="/products">Products</a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-lg font-semibold">&nbsp;</div>

            <div>
              <a href="/terms-conditions">Terms and Conditions</a>
            </div>
            <div>
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
            <div>
              <a href="/refund">Refund</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="text-lg font-semibold text-end">Contact Us</div>
          <div className="flex flex-row gap-3 justify-end">
            <div>
              <FaInstagram className="text-3xl" />
            </div>
            <div>
              <FaXTwitter className="text-3xl" />
            </div>
            <div>
              <FaFacebook className="text-3xl" />
            </div>
            <div>
              <FaWhatsapp className="text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foot;
