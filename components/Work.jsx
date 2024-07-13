import { useEffect } from "react";
import gsap from "gsap";
import banner from "@public/assets/work.png";
import Image from "next/image";
import Link from "next/link";

const Work = ({ textEnter, textLeave, linkEnter, linkLeave }) => {
  useEffect(() => {
    // GSAP animation for the image
    gsap.to(".animated-image", {
      x: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".animated-image",
        scroller: "body",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <div className="work w-screen flex flex-col justify-center items-center px-4 md:px-0 mt-6 md:mt-0">
      <h1
        className="font-extrabold md:text-[50px] text-[24px] md:mt-60 mt-24 animate"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        Our <span className="highlight">Recent Work</span>
      </h1>

      <span
        className="text-center mt-2 text-sm md:text-base animate"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        Exclusively crafting stunning, user-friendly websites and bespoke
        animations.
      </span>
      <Link
        href="https://neura-tan.vercel.app"
        className="w-full md:w-[80%] border mt-12 brightness-90 hover:brightness-100 duration-500 transition-all ease-linear animated-image -translate-x-12 opacity-0"
      >
        <Image
          src={banner}
          alt="Recent Work"
          onMouseEnter={linkEnter}
          onMouseLeave={linkLeave}
        />
      </Link>
    </div>
  );
};

export default Work;
