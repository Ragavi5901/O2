import React from "react";
import bgImg from "../../assets/HomeImage/HeroBG.jpg";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[100vh] bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${bgImg})`,
        minHeight: "",
      }}
    >
      {/* Gray overlay */}
      <div className="absolute inset-0 bg-black/20 bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-16 gap-10">
        {/* Left Text */}
        <div className="md:w-full">
          <h2 className="text-4xl md:text-5xl font-bold leading-normal ">
            <span className="bg-gradient-to-r from-white via-[#f36b0a] to-[#f86802] bg-clip-text text-transparent">Discover Luxury & Wellness with O2 </span> <br />
            <span className="bg-gradient-to-r from-white via-[#f36b0a] to-[#f86802] bg-clip-text text-transparent">Massage Chairs</span>
          </h2>
          <p className="text-2xl font-bold text-white mt-5">Rejuvenate your body and mind with every session.</p>
          <div className="md:w-1/2">
          <p className="text-md font-normal text-gray-200 mt-5 leading-loose">
            At O2 Fitness Healthcare, we bring the spa experience to your home
            with state-of-the-art massage chairs and wellness equipment. Whether
            you're looking to ease chronic pain, reduce daily stress, or simply
            enjoy deep relaxation, our premium products are designed to support
            your lifestyle. Trusted by thousands across India, we combine
            intelligent technology with luxury comfort — because your well-being
            deserves nothing less.
          </p>
          <div className="flex gap-5 mt-3 font-semibold">
          <button className="bg-orange-600 hover:bg-orange-700 text-white text-sm px-4 py-2 rounded-lg">Shop Now</button>
          <button className="bg-orange-600 hover:bg-orange-700 text-white text-sm px-4 py-2 rounded-lg">Enquire Now</button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
