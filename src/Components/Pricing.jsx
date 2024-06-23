import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Pricing = ({ textEnter, textLeave, linkEnter, linkLeave }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.0001, // Trigger as soon as a tiny portion is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div ref={ref} className="w-screen flex flex-col items-center mt-40 px-4 mb-40">
      <motion.h3
        className="text-center text-3xl md:text-6xl font-bold mb-3"
        initial="hidden"
        animate={controls}
        variants={fadeIn}
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        <span className="block">Simple and Transparent</span>
        <span className="highlight bg-gradient-to-r from-gradient1 to-gradient2">
          Pricin{" "}
          <span className="highlight bg-gradient-to-r from-gradient1 to-gradient2 -ml-3">
            g
          </span>
        </span>
        <span> 😇</span>
      </motion.h3>
      <motion.span
        className="text-center md:text-left mb-24"
        initial="hidden"
        animate={controls}
        variants={fadeIn}
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        We have three options for you depending on your website needs
      </motion.span>
      <div className="grid grid-cols-1 custom:grid-cols-2 xl:grid-cols-3 place-items-center gap-8 mx-12">
        <motion.div
          className="bg-[#21232c] px-8 md:px-12 py-8 rounded-[40px] max-w-[400px]"
          initial="hidden"
          animate={controls}
          variants={fadeIn}
        >
          <h2
            className="text-xl md:text-2xl font-semibold"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Getting Started
          </h2>
          <h3
            className="text-4xl md:text-5xl font-bold mt-5"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            $599/mo
          </h3>
          <ul
            className="mt-4 leading-8 md:leading-10"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <li className="flex items-center gap-3">
              <span className="text-xl">✅</span>
              <span>Responsive web design</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">✅</span>
              <span>Unlimited revisions</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">✅</span>
              <span>7-14 days delivery</span>
            </li>
          </ul>
          <div
            className="hover:bg-[#fff] cursor-pointer py-2.5 px-3 rounded-3xl border border-[#fff] mt-5 group transition-all duration-[400ms] ease-out flex justify-center"
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
        <motion.div
          className="bg-[#14171f] px-8 md:px-12 py-8 rounded-[40px] max-w-[400px]"
          initial="hidden"
          animate={controls}
          variants={fadeIn}
        >
          <h2
            className="text-xl md:text-2xl font-semibold"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Pro Package
          </h2>
          <h3
            className="text-4xl md:text-5xl font-bold mt-5"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            $799/mo
          </h3>
          <ul
            className="mt-4 leading-8 md:leading-10"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <li className="flex items-center gap-3">
              <span className="text-xl">✅</span>
              <span>Responsive web design</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">✅</span>
              <span>Unlimited revisions</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">✅</span>
              <span>Eye-catching animations</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">✅</span>
              <span>SEO Optimization</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">✅</span>
              <span>7-14 days delivery</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">✅</span>
              <span>Custom domain name</span>
            </li>
          </ul>
          <div
            className="hover:bg-[#fff] py-2.5 px-3 rounded-3xl border border-[#fff] mt-5 group transition-all duration-[400ms] ease-out flex justify-center"
            onMouseEnter={linkEnter}
            onMouseLeave={linkLeave}
          >
            <a
              href=""
              className="cursor-pointer group-hover:text-primary transition-all duration-[400ms] ease-out"
            >
              Get Started
            </a>
          </div>
        </motion.div>
        <motion.div
          className="bg-[#21232c] px-8 md:px-12 py-8 rounded-[40px] max-w-[400px] md:col-span-2 xl:col-span-1"
          initial="hidden"
          animate={controls}
          variants={fadeIn}
        >
          <h2
            className="text-xl md:text-2xl font-semibold"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            Custom Package
          </h2>
          <h3
            className="text-4xl md:text-5xl font-bold mt-5"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            $???/mo
          </h3>
          <ul
            className="mt-4 md:leading-7"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          >
            <li className="text-center">
              Schedule a call with us, and together, we can explore your needs
              and determine if we are the right fit to work together.
            </li>
          </ul>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-3xl">👉</span>
            <span>30 mins free zoom call​</span>
          </div>
          <div
            className="cursor-pointer hover:bg-[#fff] py-2.5 px-3 rounded-3xl border border-[#fff] mt-5 group transition-all duration-[400ms] ease-out flex justify-center"
            onMouseEnter={linkEnter}
            onMouseLeave={linkLeave}
          >
            <a
              href=""
              className="group-hover:text-primary transition-all duration-[400ms] ease-out"
            >
              Book A Call
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
