import React, { useState, useEffect } from "react";
import bgImg from "../../assets/HomeImage/HeroBG.jpg";
import Enquiry from "../../NavFooter/Enquiry";

const Hero = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const handleOpen = () => setPopupOpen(true);
  const handleClose = () => setPopupOpen(false);

  // Optional: Disable scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = popupOpen ? "" : "";
  }, [popupOpen]);

  return (
    <section className="relative w-full h-[45vh] sm:h-[40vh] md:h-screen overflow-hidden text-white">
  <img
    src={bgImg}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover"
  />
    
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 flex flex-col justify-center h-full ">
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f36b0a] to-[#f86802]">
            Discover Luxury & Wellness with O2 <br />
            Massage Chairs
          </h2>

          <p className="mt-4 text-lg md:text-xl font-semibold">
            Rejuvenate your body and mind with every session.
          </p>

          <p className="mt-4 text-sm md:text-base text-gray-200 max-w-2xl mx-auto md:mx-0">
            At O2 Fitness Healthcare, we bring the spa experience to your home
            with premium massage chairs. Whether you're easing pain or reducing
            stress — we’ve got your back.
          </p>

          <div className="flex gap-4 mt-3 justify-center md:justify-start">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg">
              Shop Now
            </button>
            <button
              onClick={handleOpen}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg"
            >
              Enquire Now
            </button>
          </div>

          {/* Show Popup */}
          {popupOpen && <Enquiry onClose={handleClose} />}
        </div>
      </div>
    </section>
  );
};

export default Hero;
