import React from "react";
import { motion } from "framer-motion";

const Header = ({ linkEnter, linkLeave }) => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-screen z-50 fixed top-0 bg-primary hidden md:block"
    >
      <nav className="w-full flex justify-center items-center py-7">
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-20 list-none bg-[#fff] py-2.5 px-3 rounded-3xl cursor-pointer"
          onMouseEnter={linkEnter}
          onMouseLeave={linkLeave}
        >
          <a href="" className="text-primary">
            Home
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-20 list-none hover:bg-[#fff] py-2.5 px-3 rounded-3xl transition-all duration-[400ms] ease-out group cursor-pointer"
          onMouseEnter={linkEnter}
          onMouseLeave={linkLeave}
        >
          <a
            href=""
            className="group-hover:text-primary transition-all duration-[400ms] ease-out"
          >
            My Work
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-20 list-none hover:bg-[#fff] py-2.5 px-3 rounded-3xl group transition-all duration-[400ms] ease-out cursor-pointer"
          onMouseEnter={linkEnter}
          onMouseLeave={linkLeave}
        >
          <a
            href=""
            className="group-hover:text-primary transition-all duration-[400ms] ease-out"
          >
            Pricing
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-20 list-none hover:bg-[#fff] py-2.5 px-3 rounded-3xl border border-[#fff] group transition-all duration-[400ms] ease-out cursor-pointer"
          onMouseEnter={linkEnter}
          onMouseLeave={linkLeave}
        >
          <a
            href=""
            className="group-hover:text-primary transition-all duration-[400ms] ease-out"
          >
            Contact
          </a>
        </motion.li>
      </nav>
    </motion.header>
  );
};

export default Header;
