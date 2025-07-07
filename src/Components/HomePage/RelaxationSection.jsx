import React, { useState } from "react";
import Relax from "../../assets/HomeImage/Relax.jpg";
import Enquiry from "../../NavFooter/Enquiry";

const RelaxationSection = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const handleOpen = () => setPopupOpen(true);
  const handleClose = () => setPopupOpen(false);

  return (
    <section
      className="relative w-full h-[65vh] sm:h-[40vh] md:h-screen overflow-hidden text-white"
    >
      <img
          src={Relax}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      {/* Gray overlay */}
      <div className="absolute inset-0 bg-black/30 bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-16 gap-10">
        {/* Left Text */}
        <div className="md:w-full">
          <h2 className="text-xl md:text-4xl font-bold leading-normal">
            <span className="bg-gradient-to-r from-blue-200 via-[#f36b0a] to-[#f86802] bg-clip-text text-transparent">
              Discover Luxury & Wellness with O2  
            </span> <br /><span className="bg-gradient-to-r from-blue-200 via-[#f36b0a] to-[#f86802] bg-clip-text text-transparent">
               Massage Chairs
            </span>
          </h2>
          <p className="md:text-2xl text-lg font-bold text-white mt-5">
            Experience full-body relaxation powered by advanced massage technology.
          </p>
          <div className="md:w-1/2">
            <p className="md:text-lg text-sm font-normal text-gray-200 mt-5 leading-relaxed">
              O2 Fitness Healthcare brings together intelligent design and
              therapeutic comfort to help you feel your best every day. Whether
              you're easing muscle tension, reducing stress, or enhancing recovery,
              our massage chairs and wellness products deliver expert-level results
              with the press of a button...
            </p>
            <div className="flex gap-5 mt-3 font-semibold">
              <button
                className="bg-orange-600 hover:bg-orange-700 text-white text-sm px-4 py-2 rounded-lg"
                onClick={handleOpen}
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Popup */}
      {popupOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="rounded-xl shadow-2xl max-w-xl w-full p-6 relative">
            <Enquiry onClose={handleClose} />
          </div>
        </div>
      )}
    </section>
  );
};

export default RelaxationSection;
