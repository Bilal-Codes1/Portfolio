import React from "react";
import { motion } from "framer-motion";

const Home = ({ textEnter, textLeave, linkEnter, linkLeave }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="w-screen md:h-[110vh] flex flex-col justify-center items-center h-[90vh] -mb-28"
    >
      <h3
        className="md:text-6xl text-center font-bold md:leading-[70px] text-3xl"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        <span className="highlight bg-gradient-to-r from-gradient1 to-gradient2 md:block inline">
          We Transform Your Designs
        </span>{" "}
        <span className="md:block inline">into Captivating Visual </span>
        Experiences 🔥
      </h3>
      <span
        className="mt-3 text-center md:text-left"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        Our Designs Elevate Your Brand with Custom Animations and Creative
        Excellence.
      </span>
      <div
        className="cursor-pointer hover:bg-[#fff] py-2.5 px-3 rounded-3xl border border-[#fff] mt-5 group transition-all duration-[400ms] ease-out"
        onMouseEnter={linkEnter}
        onMouseLeave={linkLeave}
      >
        <a
          href=""
          className="group-hover:text-primary transition-all duration-[400ms] ease-out"
        >
          Get Started
        </a>
      </div>
    </motion.div>
  );
};

export default Home;
