"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const You = ({ textEnter, textLeave }) => {
  useEffect(() => {
    const listItems = document.querySelectorAll(".animate");

    listItems.forEach((item) => {
      gsap.fromTo(
        item,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 100%",
            end: "top 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="you w-screen grid grid-cols-1 place-items-center px-4 md:px-0">
      <h1
        className="font-extrabold md:text-[50px] text-[24px] md:mt-24 mt-12 animate"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        Is This <span className="highlight">You?</span>
      </h1>
      <ul className="space-y-4 flex flex-col mt-6 text-center md:text-left point">
        <li
          className="flex md:flex-row items-center gap-3 animate"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <span className="text-2xl">❌</span>
          <span className="text-base md:text-lg">
            Struggling to make your website{" "}
            <span className="highlight font-bold">
              visually appealing and user-friendly
            </span>
            ?
          </span>
        </li>
        <li
          className="flex md:flex-row items-center gap-3 animate"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <span className="text-2xl">❌</span>
          <span className="text-base md:text-lg">
            Overwhelmed by the{" "}
            <span className="highlight font-bold">technical aspects</span> of
            web design?
          </span>
        </li>
        <li
          className="flex md:flex-row items-center gap-3 animate"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <span className="text-2xl">❌</span>
          <span className="text-base md:text-lg">
            Aspiring to position your website as{" "}
            <span className="highlight font-bold">top-tier</span> in your
            industry?
          </span>
        </li>
        <li
          className="flex md:flex-row items-center gap-3 animate"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <span className="text-2xl">❌</span>
          <span className="text-base md:text-lg">
            Struggling to keep up with the{" "}
            <span className="highlight font-bold">
              latest web design trends
            </span>{" "}
            and technologies?
          </span>
        </li>
      </ul>
    </div>
  );
};

export default You;
