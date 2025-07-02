import React from "react";
import bgImg from "../../assets/HomeImage/HeroBG.jpg";

const Hero = () => {
  
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 flex flex-col justify-center h-full">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-[#f36b0a] to-[#f86802] bg-clip-text text-transparent">
              Discover Luxury & Wellness with O2
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-[#f36b0a] to-[#f86802] bg-clip-text text-transparent">
              Massage Chairs
            </span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 text-white">
            Rejuvenate your body and mind with every session.
          </p>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            At O2 Fitness Healthcare, we bring the spa experience to your home
            with state-of-the-art massage chairs and wellness equipment. Whether
            you're looking to ease chronic pain, reduce daily stress, or simply
            enjoy deep relaxation, our premium products are designed to support
            your lifestyle. Trusted by thousands across India, we combine
            intelligent technology with luxury comfort — because your well-being
            deserves nothing less.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <button className="bg-orange-600 hover:bg-orange-700 text-white text-sm sm:text-base px-6 py-2 rounded-lg">
              Shop Now
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white text-sm sm:text-base px-6 py-2 rounded-lg">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
