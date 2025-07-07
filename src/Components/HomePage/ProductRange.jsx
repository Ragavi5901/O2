import React from 'react';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import Image4 from "../../assets/Products/MCChair/IMG-4.jpg";
import Image18 from "../../assets/Products/Leg/Img-18.jpeg";
import Image20 from "../../assets/Products/Foot/IMG-20.jpg"
import Image19 from "../../assets/Products/Neck/Img-19.jpeg";

const discoverproducts = [
  { name: 'Massage Chairs', image: Image4 },
  { name: 'Fitness Massager', image: Image18 },
  { name: 'Foot Massager', image: Image20 },
  { name: 'Neck Massager', image: Image19 },
];

const PrevArrow = ({ onClick }) => (
  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10">
    <button onClick={onClick} className="bg-white rounded-full shadow p-2 hover:text-orange-500">
      <ArrowLeft size={20} />
    </button>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10">
    <button onClick={onClick} className="bg-white rounded-full shadow p-2 hover:text-orange-500">
      <ArrowRight size={20} />
    </button>
  </div>
);

const ProductRange = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "ease-in-out",     
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full max-w-full overflow-hidden px-4 md:px-8">
      <div className="text-center py-12 md:py-20">
        <h1 className="text-2xl md:text-3xl font-bold mt-2">Discover Our Product Range</h1>
        <p className="px-2 md:px-40 leading-loose mt-2 text-gray-600 text-sm md:text-base">
          At O2 Fitness Healthcare, we offer a complete range of massage and fitness solutions for every need. Explore our carefully crafted product categories to find the right tools for your body, space, and wellness routine.
        </p>
      </div>

      <div className="relative mb-10 mx-4 md:mx-8">
        <Slider {...settings}>
          {discoverproducts.map((item, index) => (
            <div key={index} className="px-2 md:px-4">
              <div className="flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full cursor-pointer border-none focus:outline-none focus:ring-0"
                />
                <p className="mt-2 text-center font-medium text-sm md:text-base">{item.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductRange;