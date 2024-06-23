import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = ({ textEnter, textLeave }) => {
  return (
    <div
      className="footer w-screen h-[200px] flex flex-col items-center pt-10"
      text
    >
      <span
        className="font-light"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        Bilalcodes
      </span>
      <FaInstagram
        size={28}
        className="mt-6 cursor-pointer"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      />
      <span
        className="font-light mt-6"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        Designed by bilalcodes
      </span>
    </div>
  );
};

export default Footer;
