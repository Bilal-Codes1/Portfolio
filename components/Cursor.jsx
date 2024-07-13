"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = ({ isMask, setisMask }) => {
  const cursorRef = useRef(null);
  const innerCursorRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        duration: 1,
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cursor fixed left-0 top-0 z-[100] bg-transparent border border-white rounded-full flex justify-center items-center pointer-events-none transition-all ${
        isMask === "text" ? "w-20 h-20 bg-[#fff]" : "w-10 h-10"
      }`}
    >
      <div
        ref={innerCursorRef}
        className="inner-cursor bg-white w-6 h-6 rounded-full pointer-events-none transition-all duration-[900] "
      />
    </div>
  );
};

export default Cursor;
