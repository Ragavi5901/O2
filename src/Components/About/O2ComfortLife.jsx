import React from "react";
import Relax from "../../assets/About/O2Comfort.jpg";

const O2ComfortLife = () => {
  return (
    <section
      className="relative w-full min-h-[100vh] bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${Relax})`,
        minHeight: "",
      }}
    >
      {/* Gray overlay */}
      <div className="absolute inset-0 bg-black/30 bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-16 gap-10">
        {/* Left Text */}
        <div className="md:w-full p-10">
          <h2 className="text-4xl md:text-5xl font-bold leading-normal text-white">
            Want to experience O2 comfort in real life?
          </h2>

          <div className="">
            <p className="text-md font-normal text-gray-200 mt-5 leading-loose ">
              Whether you're curious about how our massage chairs feel or want
              to find the right model for your needs, we're here <br />to help. Visit
              one of our showrooms, or book a free demo at your location.
              Experience the comfort, care, and advanced <br /> features of O2 products
              — before you decide.
            </p>
            <div className="flex gap-5 mt-3 font-semibold">
              <button className="bg-orange-600 hover:bg-orange-700 text-white text-sm px-4 py-2 rounded-lg">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default O2ComfortLife;
