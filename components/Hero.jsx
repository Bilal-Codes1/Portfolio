"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";

const Hero = ({ textEnter, textLeave, linkEnter, linkLeave }) => {
  const href = useRef(null);
  const sref = useRef(null);
  const bref = useRef(null);

  useEffect(() => {
    // Fade-in animation for text elements
    gsap.fromTo(
      href.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, delay: 0.1, ease: "power2.out" }
    );
    gsap.fromTo(
      sref.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, delay: 0.1, ease: "power2.out" }
    );

    // Fade-in and translate animation for the button
    gsap.fromTo(
      bref.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="hero w-screen md:h-[82vh] h-screen flex flex-col justify-center items-center px-4 md:px-0">
      <h1
        className="font-extrabold md:text-[60px] text-[30px] text-center leading-tight"
        ref={href}
      >
        <span
          className="highlight md:block"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          We Transform Your Designs
        </span>
        <span
          className="md:block ml-2 md:ml-0"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          into Captivating Visual
        </span>
        <span
          className="ml-2 md:ml-0"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Experiences 🔥
        </span>
      </h1>
      <span
        className="text-center mt-2 text-sm md:text-base px-2"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        ref={sref}
      >
        Our team will elevate your brand with our custom animations and
        storytelling approach.
      </span>
      <div
        className="py-2.5 px-3 rounded-full border border-white hover:bg-[#fff] hover:text-[#0e1015] transition-all ease-linear cursor-pointer mt-6 opacity-0 translate-y-6 text-sm md:text-base"
        onMouseEnter={linkEnter}
        onMouseLeave={linkLeave}
        ref={bref}
      >
        <Link to="you" spy={true} smooth={true} offset={-50} duration={500}>
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Hero;
