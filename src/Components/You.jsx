import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const You = ({ textEnter, textLeave }) => {
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
    <div className="w-screen flex flex-col items-center px-4 md:px-8 mb-40">
      <motion.h3
        className="text-3xl md:text-6xl font-bold mt-16 text-center"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeIn}
        key={inView}
        onMouseEnter={textEnter} // Use the inView state as the key to reset the animation on view change
        onMouseLeave={textLeave}
      >
        Is This{" "}
        <span className="highlight bg-gradient-to-r from-gradient1 to-gradient2">
          You?
        </span>
      </motion.h3>
      <motion.ul
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="mt-6 text-base md:text-lg leading-6 md:leading-10 space-y-4 md:space-y-6"
        initial="hidden"
        animate={controls}
        variants={fadeIn}
        key={`${inView}-ul`} // Use a different key to reset the animation on view change
      >
        <li className="flex items-center gap-2 font-light">
          <span className="text-2xl md:text-3xl">❌</span>
          <span>
            Struggling to make your website{" "}
            <span className="highlight bg-gradient-to-r from-gradient1 to-gradient2 font-semibold italic">
              visually appealing and user-friendly
            </span>
            ?
          </span>
        </li>
        <li className="flex items-center gap-2 font-light">
          <span className="text-2xl md:text-3xl">❌</span>
          <span>
            Overwhelmed by the{" "}
            <span className="highlight bg-gradient-to-r from-gradient1 to-gradient2 font-semibold italic">
              technical aspects
            </span>{" "}
            of web design?
          </span>
        </li>
        <li className="flex items-center gap-2 font-light">
          <span className="text-2xl md:text-3xl">❌</span>
          <span>
            Aspiring to position yourself as a{" "}
            <span className="highlight bg-gradient-to-r from-gradient1 to-gradient2 font-semibold italic">
              top-tier web designer
            </span>{" "}
            in your industry?
          </span>
        </li>
        <li className="flex items-center gap-2 font-light">
          <span className="text-2xl md:text-3xl">❌</span>
          <span>
            Struggling to keep up with the{" "}
            <span className="highlight bg-gradient-to-r from-gradient1 to-gradient2 font-semibold italic">
              latest web design trends
            </span>{" "}
            and technologies?
          </span>
        </li>
      </motion.ul>
    </div>
  );
};

export default You;
