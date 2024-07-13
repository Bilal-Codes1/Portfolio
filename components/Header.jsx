"use client";

import { Link } from "react-scroll";
import { useEffect } from "react";
import gsap from "gsap";

const Header = ({ linkEnter, linkLeave }) => {
  useEffect(() => {
    // GSAP animations
    gsap.to(".nav-link", {
      x: 0,
      opacity: 1,
      duration: 0.2,
      ease: "power2.in",
      stagger: 0.2,
    });
  }, []);

  return (
    <header className="header w-screen h-[18vh] z-50 sticky top-0 md:flex justify-around items-center px-40 bg-background hidden">
      <Link
        className="nav-link py-2.5 px-3 rounded-full cursor-pointer hover:bg-[#fff] hover:text-[#0e1015] transition-all duration-300 ease-linear -translate-x-6 opacity-0"
        to="hero"
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
        activeClass="active"
        onMouseEnter={linkEnter}
        onMouseLeave={linkLeave}
      >
        Home
      </Link>
      <Link
        className="nav-link py-2.5 px-3 rounded-full hover:bg-[#fff] hover:text-[#0e1015] transition-all duration-300 ease-linear cursor-pointer -translate-x-6 opacity-0"
        to="work"
        spy={true}
        smooth={true}
        offset={120}
        duration={500}
        activeClass="active"
        onMouseEnter={linkEnter}
        onMouseLeave={linkLeave}
      >
        My Work
      </Link>
      <Link
        className="nav-link py-2.5 px-3 rounded-full hover:bg-[#fff] hover:text-[#0e1015] transition-all duration-300 ease-linear cursor-pointer -translate-x-6 opacity-0"
        to="pricing"
        spy={true}
        smooth={true}
        offset={130}
        duration={500}
        activeClass="active"
        onMouseEnter={linkEnter}
        onMouseLeave={linkLeave}
      >
        Pricing
      </Link>
      <a
        className="nav-link py-2.5 px-3 rounded-full border border-white hover:bg-[#fff] hover:text-[#0e1015] transition-all duration-300 ease-linear cursor-pointer -translate-x-6 opacity-0"
        href="https://www.instagram.com/bilal._.codes/"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        activeClass="active"
        onMouseEnter={linkEnter}
        onMouseLeave={linkLeave}
      >
        Contact
      </a>
    </header>
  );
};

export default Header;
