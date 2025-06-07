import React from "react";
import Relax from "../../assets/ConatctImg/GetIn.jpg";

const Getintouch = () => {
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
        <div className="md:w-full p-10 space-y-9">
          <h2 className="text-4xl md:text-5xl font-bold leading-normal text-orange-500">
            Get in Touch with O2 Fitness Healthcare
          </h2>
          <p className="text-lg font-bold ">
            We’re here to answer your questions, help you choose the right{" "}
            <br />
            product, or assist with any service request.
          </p>

          <div className="space-y-9">
            <p className="text-md font-normal text-gray-200 mt-5 leading-loose ">
              Whether you're looking for product support, a showroom visit, or a
              custom wellness solution, our <br /> team is just a message away. Reach
              out to us via the contact form, WhatsApp, or phone — and we’ll <br />
              respond promptly.
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

export default Getintouch;
