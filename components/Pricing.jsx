const Pricing = ({ textEnter, textLeave, linkEnter, linkLeave }) => {
  return (
    <div className="w-screen flex flex-col justify-center items-center pricing px-4 md:px-0 mt-8 md:mt-0">
      <h1
        className="font-extrabold md:text-[50px] text-[24px] md:mt-60 mt-24 text-center animate"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        <span>Simple And Transparent</span>{" "}
        <span className="flex justify-center">
          <span className="highlight block">Pricing</span> <span>😇</span>
        </span>
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 py-12">
        <div
          className="bg-[#21232c] shadow-md rounded-[30px] p-6 max-w-sm w-full"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <h2 className="text-xl font-bold mb-2">Getting Started</h2>
          <span className="text-4xl font-extrabold">$599</span>
          <ul className="mt-4 space-y-1 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="text-lg">Custom Web Design</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="text-lg">Responsive Web Design</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="text-lg">Basic SEO</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="text-lg">Up To 5 Pages</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="text-lg">Basic Animations</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="text-lg">2-3 Weeks Delivery</span>
            </li>
          </ul>
          <button
            className="w-full py-2.5 px-3 rounded-full border border-white hover:bg-[#fff] hover:text-[#0e1015] transition-all duration-300 ease-linear cursor-pointer"
            onMouseEnter={linkEnter}
            onMouseLeave={linkLeave}
          >
            <a
              href="https://www.instagram.com/bilal._.codes/"
              className="w-full h-full"
            >
              Contact
            </a>
          </button>
        </div>
        <div
          className="bg-[#14171f] shadow-md rounded-[30px] p-6 max-w-sm w-full md:-translate-y-2"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <h2 className="text-xl font-bold mb-2">Pro Package</h2>
          <span className="text-4xl font-extrabold">$799</span>
          <ul className="mt-4 space-y-1 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="text-lg">Custom Web Design</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="text-lg">Responsive Web Design</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="text-lg">Advanced SEO</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="text-lg">Up To 10 Pages</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="text-lg">Eye Catching Animations</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="text-lg">Custom Graphics</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="text-lg">Performance Optimization</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="text-lg">Additional Revisions</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="text-lg">2-3 Weeks Delivery</span>
            </li>
          </ul>
          <button
            className="w-full py-2.5 px-3 rounded-full border border-white hover:bg-[#fff] hover:text-[#0e1015] transition-all duration-300 ease-linear cursor-pointer"
            onMouseEnter={linkEnter}
            onMouseLeave={linkLeave}
          >
            <a href="https://www.instagram.com/bilal._.codes/">Contact</a>
          </button>
        </div>
        <div
          className="bg-[#21232c] shadow-md rounded-[30px] p-6 max-w-sm w-full"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          <h2 className="text-xl font-bold mb-2">Custom Package</h2>
          <span className="text-4xl font-extrabold mb-4">$???</span>
          <div className="text-center mt-4 mb-6">
            Schedule a call with us, and together, we can explore your needs and
            determine if we are the right fit to work together.
          </div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">👉</span>
            <span className="text-lg">30 mins free zoom call</span>​
          </div>
          <button
            className="w-full py-2.5 px-3 rounded-full border border-white hover:bg-[#fff] hover:text-[#0e1015] transition-all duration-300 ease-linear cursor-pointer"
            onMouseEnter={linkEnter}
            onMouseLeave={linkLeave}
          >
            <a href="https://www.instagram.com/bilal._.codes/">Book a call</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
