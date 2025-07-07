import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementQty, decrementQty } from "../../redux/cartSlice";
import Image5 from "../../assets/Products/MCChair/IMG-4.jpg";
import Image20 from "../../assets/Products/Foot/IMG-20.jpg";
import Image18 from "../../assets/Products/Leg/Img-18.jpeg";
import Image19 from "../../assets/Products/Neck/Img-19.jpeg";

const products = [
  {
    id: 2,
    title: "O2 PREMIUM 5D Massage Chair – 90-02",
    price: "₹99,999",
    mrp: "₹1,29,999",
    features: [
      "25 Auto & 5 Manual Programs",
      "54 Airbags, Full Body Massage",
      "Zero Gravity + SL Track",
      "Bluetooth, Heat Therapy, Calf Roller",
    ],
    image: Image5,
  },
  {
    id: 6,
    title: "O2 ACUPRESSURE LEG MASSAGER – 416-02",
    price: "₹25,999",
    mrp: "₹34,999",
    features: [
      "Foot & Calf Kneading",
      "Vibration + Heat Therapy",
      "3 Auto Modes & Manual Settings",
      "Compact and Zip Cover",
    ],
    image: Image18,
  },
  {
    id: 9,
    title: "Massage Chair – Model X",
    price: "₹49,999",
    mrp: "₹59,999",
    features: [
      "8 Auto Programs",
      "Full Body Airbags",
      "SL Track + Bluetooth",
      "Heated Rollers",
    ],
    image: Image20,
  },
  {
    id: 8,
    title: "Massage Cushion – Model C",
    price: "₹10,999",
    mrp: "₹15,999",
    features: [
      "Compact Cushion Massage",
      "3 Modes",
      "Heat Therapy",
      "Portable",
    ],
    image: Image19,
  },
];

const FeaturedProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const getQuantity = (productId) => {
    const item = cart.find((p) => p.id === productId);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (product) => dispatch(addToCart(product));
  const handleIncrement = (id) => dispatch(incrementQty(id));
  const handleDecrement = (id) => dispatch(decrementQty(id));
  const handleNavigate = (id) => navigate(`/product/${id}`);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-full overflow-hidden px-4 md:px-8 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Featured Products</h2>
      <p className="text-center text-gray-600 mb-6 text-sm md:text-base px-2">
        Discover our best-selling massage chairs and wellness devices — trusted
        by thousands across India.
      </p>

      <div className="max-w-full">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-2 cursor-pointer"
            onClick={() => handleNavigate(product.id)}>
              <div className="flex flex-col lg:flex-row max-w-sm lg:max-w-2xl bg-white rounded-lg border p-4 shadow hover:shadow-lg transition mx-auto min-h-[400px] lg:min-h-[300px]">
                
                {/* Image */}
                <div className="w-full lg:w-[45%] flex justify-center items-center mb-4 lg:mb-0">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-32 sm:h-36 lg:h-44 object-contain hover:scale-105 transition"
                  />
                </div>

                {/* Content */}
                <div className="w-full lg:w-[55%] lg:pl-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 text-black">
                      {product.title}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-orange-500 text-sm"
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-2">(123)</span>
                    </div>

                    {/* Features */}
                    <ul className="text-xs sm:text-sm text-gray-700 list-disc list-inside mt-2 space-y-1 max-h-[80px] lg:max-h-[120px] overflow-y-auto">
                      {product.features.map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Price + Button */}
                  <div className="mt-4">
                    <div className="mb-3">
                      <span className="text-orange-600 font-bold text-sm sm:text-base mr-2">
                        {product.price}
                      </span>
                      <span className="line-through text-xs sm:text-sm text-gray-500">
                        {product.mrp}
                      </span>
                    </div>

                    <button className="bg-black text-white text-xs sm:text-sm px-4 py-2 rounded w-full lg:w-auto">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Pagination */}
      <div className="mt-4 text-center text-gray-500 font-semibold text-sm">
        {`0${(currentSlide % products.length) + 1}`} — 0{products.length}
      </div>
    </div>
  );
};

export default FeaturedProducts;