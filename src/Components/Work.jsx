import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import work from "../assets/work.png";

const Work = ({ textEnter, textLeave, linkEnter, linkLeave }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 }, // Start 50px below the final position
    visible: {
      opacity: 1,
      y: 0, // End at the original position
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="w-screen flex flex-col items-center">
      <motion.h3
        className="md:text-6xl font-bold text-3xl"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeIn}
        key={inView}
      >
        Our{" "}
        <span className="highlight bg-gradient-to-r from-gradient1 to-gradient2">
          Recent Work
        </span>
      </motion.h3>
      <motion.span
        className="mt-3 text-center md:text-left"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeIn}
        key={`${inView}-span`} // Use a different key to reset the animation on view change
      >
        Exclusively crafting stunning, user-friendly websites and bespoke
        animations.
      </motion.span>
      <a
        href="https://Bilal-Codes1.github.io/Airbnb/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div
          className="w-full max-w-[1000px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform mt-12"
          onMouseEnter={linkEnter}
          onMouseLeave={linkLeave}
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeIn}
          key={`${inView}-div`} // Use a different key to reset the animation on view change
        >
          <div className="relative overflow-hidden aspect-h-1 aspect-w-1">
            <img
              src={work}
              className="object-cover object-center w-full h-full"
            />
          </div>
        </motion.div>
      </a>
    </div>
  );
};

export default Work;
