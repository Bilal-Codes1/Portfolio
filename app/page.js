"use client";

import Header from "@components/Header";
import Hero from "@components/Hero";
import You from "@components/You";
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import Work from "@components/Work";
import Pricing from "@components/Pricing";
import Footer from "@components/Footer";

export default function Home() {
  const [isMask, setIsMask] = useState("default");
  const textEnter = () => setIsMask("text");
  const textLeave = () => setIsMask("default");
  const linkEnter = () => setIsMask("link");
  const linkLeave = () => setIsMask("default");
  const cursorRef = useRef(null);
  const innerCursorRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        duration: 1,
        x: e.clientX - 20,
        y: e.clientY - 20,
        ease: "power2.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.3,
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursorRef.current, {
        opacity: 1,
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <main className="w-screen min-h-screen">
      <div
        ref={cursorRef}
        className={`cursor fixed left-0 top-0 z-[100] bg-transparent border border-white rounded-full flex justify-center items-center pointer-events-none transition-all ease-linear ${
          isMask === "text"
            ? "w-16 h-16 bg-white mix-blend-difference"
            : "w-10 h-10"
        } ${isMask === "link" ? "w-16 h-16 bg-white" : "w-10 h-10"}`}
      >
        <div
          ref={innerCursorRef}
          className={`inner-cursor rounded-full pointer-events-none transition-all duration-[900] text-black flex justify-center items-center ${
            isMask === "text"
              ? "border border-background w-8 h-8"
              : "bg-white w-6 h-6"
          } ${isMask === "link" ? "w-8 h-8 bg-[#fff]" : "w-6 h-6"}`}
        >
          {isMask === "link" ? <FiArrowUpRight size={80} /> : <></>}
        </div>
      </div>
      <Header linkEnter={linkEnter} linkLeave={linkLeave} />
      <Hero
        textEnter={textEnter}
        textLeave={textLeave}
        linkEnter={linkEnter}
        linkLeave={linkLeave}
      />
      <You textEnter={textEnter} textLeave={textLeave} />
      <Work
        textEnter={textEnter}
        textLeave={textLeave}
        linkEnter={linkEnter}
        linkLeave={linkLeave}
      />
      <Pricing
        textEnter={textEnter}
        textLeave={textLeave}
        linkEnter={linkEnter}
        linkLeave={linkLeave}
      />
      <Footer textEnter={textEnter} textLeave={textLeave} />
    </main>
  );
}
