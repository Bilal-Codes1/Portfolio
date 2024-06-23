import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu";
import Header from "./Components/Header";
import Home from "./Components/Home";
import You from "./Components/You";
import Work from "./Components/Work";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";

const App = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    console.log(mousePosition);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
    },
    text: {
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
    },
    link: {
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("body");
  const linkEnter = () => setCursorVariant("link");
  const linkLeave = () => setCursorVariant("body");
  const bodyLeave = () => setCursorVariant("default");
  const bodyEnter = () => setCursorVariant("body");

  return (
    <div
      className="container w-screen h-screen"
      onMouseLeave={bodyLeave}
      onMouseEnter={bodyEnter}
    >
      <Header linkLeave={linkLeave} linkEnter={linkEnter} />
      <Home
        linkLeave={linkLeave}
        linkEnter={linkEnter}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <You textEnter={textEnter} textLeave={textLeave} />
      <Work
        linkLeave={linkLeave}
        linkEnter={linkEnter}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <Pricing
        linkLeave={linkLeave}
        linkEnter={linkEnter}
        textEnter={textEnter}
        textLeave={textLeave}
      />
      <Footer textEnter={textEnter} textLeave={textLeave} />
      <motion.div
        className="cursor bg-primary border border-[#fff] flex justify-center items-center w-10 h-10 rounded-full fixed top-0 left-0 pointer-events-none duration-700 ease-linear transition-all translate-x-[-50%] translate-y-[-50%] z-50"
        variants={variants}
        animate="default"
        style={{
          background: cursorVariant === "text" && "white",
          mixBlendMode: cursorVariant === "text" && "difference",
          width: cursorVariant === "link" && "70px",
          height: cursorVariant === "link" && "70px",
          padding: cursorVariant === "text" && "30px",
          opacity: cursorVariant === "default" ? "0" : "1",
        }}
      >
        <div
          className="inner-cursor bg-[#fff] rounded-full w-6 h-6 pointer-events-none duration-700 ease-linear transition-all flex justify-center items-center z-50"
          style={{
            border: cursorVariant === "text" && "1px solid #0E1015",
            width: cursorVariant === "link" && "70px",
            height: cursorVariant === "link" && "70px",
            padding: cursorVariant === "text" && "25px",
          }}
        >
          <LuArrowUpRight
            style={{
              opacity: cursorVariant === "link" ? "1" : "0",
              color: cursorVariant === "link" ? "#0E1015" : "white",
            }}
            size={40}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default App;
