import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { ChevronRight } from "lucide-react"; // Optional: Custom arrow icon

const testimonials = [
  {
    name: "Aarthi V., Chennai",
    review:
      "The O2 massage chair has become part of my daily routine. It helps me relax after long hours at work and has improved my back pain tremendously!",
    image: "/src/assets/About/CusSay1.jpg",
    rating: 5,
  },
  {
    name: "Kumar M., Chennai",
    review:
      "Excellent service and high-quality product. The leg massager works wonders after my evening walk!",
    image: "/src/assets/About/CusSay2.jpg",
    rating: 4,
  },
  {
    name: "VJ, Chennai",
    review:
      "Excellent service and high-quality product. The leg massager works wonders after my evening walk!",
    image: "/src/assets/About/CusSay2.jpg",
    rating: 4,
  },
];

const CustomerSay = () => {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-16 bg-white">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl">
          At OZ Fitness Healthcare, customer satisfaction is at the heart of
          everything we do. Here’s what a few of our happy customers have to
          say.
        </p>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{ nextEl: ".next-arrow" }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          speed={900}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="p-[1px] rounded-xl bg-gradient-to-r from-orange-400 to-blue-500 h-full">
                <div className="rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition h-full flex flex-col justify-between">
                  <p className="text-gray-800 italic">
                    <span className="font-bold text-slate-700 text-4xl">“</span>
                    <br />
                    {t.review}
                    <span className="font-bold text-slate-700 text-4xl">”</span>
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <div className="flex text-orange-500">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Arrow Button */}
        <div className="next-arrow absolute top-1/2 right-2 sm:-right-5 transform -translate-y-1/2 cursor-pointer z-10 bg-white shadow p-2 rounded-full">
          <ChevronRight className="text-gray-800 w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default CustomerSay;
