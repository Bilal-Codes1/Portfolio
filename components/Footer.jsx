import { FiInstagram } from "react-icons/fi";

const Footer = ({ textEnter, textLeave }) => {
  return (
    <div className="flex flex-col w-screen items-center footer mt-40 gap-6">
      <span
        className="text-center text-lg mt-10"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        Bilalcodes
      </span>
      <a href="https://www.instagram.com/bilal._.codes/">
        <FiInstagram
          className="cursor-pointer"
          size={30}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        />
      </a>
      <span
        className="text-lg mb-12"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        Designed by bilalcodes
      </span>
    </div>
  );
};
export default Footer;
