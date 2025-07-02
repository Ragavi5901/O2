import React from 'react';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import chairImg from '../../assets/HomeImage/chair.jpg';
import legImg from '../../assets/HomeImage/leg.jpg';
import carImg from '../../assets/HomeImage/car.jpg';
import steamImg from '../../assets/HomeImage/steam.jpg';

const discoverproducts = [
  { name: 'Massage Chairs', image: chairImg },
  { name: 'Leg And Foot Massager', image: legImg },
  { name: 'Car Mini Massager', image: carImg },
  { name: 'Steam Massager', image: steamImg },
];

const PrevArrow = ({ onClick }) => (
  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
    <button onClick={onClick} className="bg-white rounded-full shadow p-2 hover:text-orange-500">
      <ArrowLeft size={24} />
    </button>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
    <button onClick={onClick} className="bg-white rounded-full shadow p-2 hover:text-orange-500">
      <ArrowRight size={24} />
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
    autoplayspeed:1000,
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
    <div className="px-4 md:px-10">
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold mt-2">Discover Our Product Range</h1>
        <p className="px-4 md:px-40 leading-loose mt-2 text-gray-600">
          At O2 Fitness Healthcare, we offer a complete range of massage and fitness solutions for every need. Explore our carefully crafted product categories to find the right tools for your body, space, and wellness routine.
        </p>
      </div>

      <div className="relative px-10 mb-10">
        <Slider {...settings}>
          {discoverproducts.map((item, index) => (
            <div key={index} className="flex flex-col items-center px-15">
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 object-cover rounded-full cursor-pointer border-none  focus:outline-none focus:ring-0"
              />
              <p className="mt-2 text-center font-medium">{item.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductRange;
