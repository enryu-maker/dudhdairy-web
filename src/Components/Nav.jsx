import React, { useEffect, useState } from "react";

function Nav() {
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
    <div className={`top-0 sticky border-b-[1px] ${textColorClass}`}>
      <div className="w-full top-0 fixed h-16 backdrop-blur-lg rounded-b-lg flex flex-col bg-gradient-to-b from-backdrop-xl to-transparent">
        <div className="flex flex-row flex-wrap w-full h-full items-center justify-center gap-8 sm:gap-10 md:gap-16 lg:gap-32 overflow-hidden text-center">
          <div>
            <p
              className={`link link-underline font-semibold text-sm sm:text-base md:text-lg lg:text-xl ${textColorClass}`}
            >
              <a href="/">Home</a>
            </p>
          </div>
          <div>
            <p
              className={`link link-underline font-semibold text-sm sm:text-base md:text-lg lg:text-xl ${textColorClass}`}
            >
              <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>
                About
              </a>
            </p>
          </div>
          <div>
            <p
              className={`link link-underline font-semibold text-sm sm:text-base md:text-lg lg:text-xl ${textColorClass}`}
            >
              Contact
            </p>
          </div>
          <div>
            <p
              className={`link link-underline font-semibold text-sm sm:text-base md:text-lg lg:text-xl ${textColorClass}`}
            >
              <a href="/products">Products</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
