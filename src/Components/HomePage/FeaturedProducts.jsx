import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import  FeaturedIMG1 from '../../assets/HomeImage/FeaturedIMG1.png'
import  FeaturedIMG2 from '../../assets/HomeImage/FeaturedIMG2.png'
import  FeaturedIMG3 from '../../assets/HomeImage/FeaturedIMG3.png'

const products = [
  {
    id: 1,
    title: "O2 PREMIUM 5D Massage Chair – 90-02",
    price: "₹99,999",
    mrp: "₹1,29,999",
    features: [
      "25 Auto & 5 Manual Programs",
      "54 Airbags, Full Body Massage",
      "Zero Gravity + SL Track",
      "Bluetooth, Heat Therapy, Calf Roller"
    ],
    image: FeaturedIMG3,
  },
  {
    id: 2,
    title: "O2 ACUPRESSURE LEG MASSAGER – 416-02",
    price: "₹25,999",
    mrp: "₹34,999",
    features: [
      "Foot & Calf Kneading",
      "Vibration + Heat Therapy",
      "3 Auto Modes & Manual Settings",
      "Compact and Zip Cover"
    ],
    image:  FeaturedIMG2,
  },
  {
    id: 3,
    title: "Massage Chair – Model X",
    price: "₹49,999",
    mrp: "₹59,999",
    features: [
      "8 Auto Programs",
      "Full Body Airbags",
      "SL Track + Bluetooth",
      "Heated Rollers"
    ],
    image:  FeaturedIMG1,
  },
  {
    id: 4,
    title: "Massage Cushion – Model C",
    price: "₹10,999",
    mrp: "₹15,999",
    features: [
      "Compact Cushion Massage",
      "3 Modes",
      "Heat Therapy",
      "Portable"
    ],
    image: "https://via.placeholder.com/150"
  },
  {
    id: 5,
    title: "Handheld Massager – Turbo",
    price: "₹5,999",
    mrp: "₹8,999",
    features: [
      "Handheld Massage Gun",
      "Adjustable Speed",
      "USB Charging",
      "Silent Motor"
    ],
    image: "https://via.placeholder.com/150"
  }
];

const FeaturedProducts = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 2,  // Show 2 cards
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
  
  return (
    <div className="w-full px-4 md:px-12 py-10">
      <h2 className="text-2xl font-bold text-center mb-4">Featured Products</h2>
      <p className="text-center text-gray-600 mb-6">
        Discover our best-selling massage chairs and wellness devices — trusted by thousands across India.
      </p>

      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
  <div
    className="flex h-[350px] w-[600px] bg-white rounded-lg border p-4 shadow hover:shadow-lg transition mx-auto"
    style={{
      borderImage: "linear-gradient(to right, orange, skyblue) 1"
    }}
  >
    {/* Left: Image */}
    <div className="w-[45%] flex justify-center items-center">
      <img
        src={product.image}
        alt={product.title}
        className="h-44 object-contain hover:scale-110"
      />
      
    </div>

    {/* Right: Content */}
    <div className="w-[55%] pl-4 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold mb-1 text-black">{product.title}</h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-orange-500 text-md mt-3" />
          ))}
          <span className="text-sm text-gray-500 ml-2">(123)</span>
        </div>

        {/* Features */}
        <ul className="text-md text-gray-700 list-disc list-inside  mt-2 space-y-1 max-h-[120px] overflow-y-auto">
          {product.features.map((feat, i) => (
            <li key={i}>{feat}</li>
          ))}
        </ul>
      </div>

      {/* Price + Button */}
      <div>
        <div className="mb-5">
          <span className="text-orange-600 font-bold text-lg mr-2">
            {product.price}
          </span>
          <span className="line-through text-gray-500">{product.mrp}</span>
        </div>

        <button className="bg-black text-white text-sm px-4 py-2 rounded">
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</div>
        ))}
      </Slider>

      {/* Pagination like 01 — 05 */}
      <div className="mt-4 text-center text-gray-500 font-semibold">
        {`0${(currentSlide % products.length) + 1}`} — 0{products.length}
      </div>
    </div>
  )
}

export default FeaturedProducts