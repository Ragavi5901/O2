import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementQty, decrementQty } from "../../redux/cartSlice";

import Image1 from "../../assets/HomeImage/IMG1.png";
import Image2 from "../../assets/HomeImage/IMG2.png";
import Image3 from "../../assets/HomeImage/IMG3.png";
import Image4 from "../../assets/HomeImage/IMG4.png";
import Image5 from "../../assets/HomeImage/IMG5.png";
import Image6 from "../../assets/HomeImage/IMG6.png";

const shopcat = [
  {
    id: 1,
    title: "O2 Fitness Health Care RUBY A321-2.3D Model",
    type: "Massage Chair",
    rating: 4.5,
    reviews: 123,
    price: "₹1,70,000",
    original: "₹2,40,000",
    image: Image1,
  },
  {
    id: 2,
    title: "O2 Fitness Health Care Car Seat Massager Big",
    type: "Massage Chair",
    rating: 4.3,
    reviews: 112,
    price: "₹1,70,000",
    original: "₹2,40,000",
    image: Image2,
  },
  {
    id: 3,
    title: "O2 Fitness Health Care Mini Foot Massager",
    type: "Foot Massager",
    rating: 4.0,
    reviews: 80,
    price: "₹6,499",
    original: "₹14,999",
    image: Image3,
  },
  {
    id: 4,
    title: "O2 Fitness Health Care Home Gym Fitness, Advanced Model",
    type: "Home Gym",
    rating: 4.4,
    reviews: 97,
    price: "₹28,500",
    original: "₹32,500",
    image: Image4,
  },
  {
    id: 5,
    title: "O2 Fitness Health Care Mini Vibrator Machine",
    type: "Vibration Machine",
    rating: 4.2,
    reviews: 76,
    price: "₹11,600",
    original: "₹22,000",
    image: Image5,
  },
  {
    id: 6,
    title: "O2 Fitness Health Care Neck Kneading Special",
    type: "Neck Massager",
    rating: 4.1,
    reviews: 69,
    price: "₹2,499",
    original: "₹4,500",
    image: Image6,
  },
];

const ProductCard = ({
  product,
  quantity,
  onAddToCart,
  onIncrement,
  onDecrement,
  onNavigate,
}) => (
  <div className="border rounded-lg shadow-sm p-4 relative bg-white text-center border-gray-300">
    <div className="absolute top-2 right-2 text-sm px-2 py-0.5 font-semibold text-transparent bg-clip-text bg-gradient-to-b from-orange-800 to-orange-400">
      Sale
    </div>

    {/* Image */}
    <img
      onClick={() => onNavigate(product.id)}
      src={product.image}
      alt={product.title}
      className="w-full h-40 sm:h-48 md:h-56 object-contain mb-3 hover:scale-105 transition-transform cursor-pointer"
    />

    <h3 className="text-sm sm:text-md text-gray-600">{product.type}</h3>
    <div className="text-sm text-yellow-500 mb-1">
      {"★".repeat(Math.floor(product.rating))}
      {"☆".repeat(5 - Math.floor(product.rating))} ({product.reviews})
    </div>

    <h2
      onClick={() => onNavigate(product.id)}
      className="text-md sm:text-lg font-semibold text-gray-800 leading-snug mb-1 cursor-pointer hover:text-orange-600 transition"
    >
      {product.title}
    </h2>

    <div className="mb-2">
      <span className="text-orange-600 font-bold text-sm">{product.price}</span>{" "}
      <span className="text-gray-400 line-through text-xs">{product.original}</span>
    </div>

    {quantity > 0 ? (
      <div className="flex justify-center items-center space-x-2 mt-2">
        <button
          onClick={() => onDecrement(product.id)}
          className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
        >
          –
        </button>
        <span className="font-medium text-sm">{quantity}</span>
        <button
          onClick={() => onIncrement(product.id)}
          className="px-2 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>
    ) : (
      <button
        className="bg-black text-white px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm rounded hover:bg-gray-800 hover:scale-105 transition mt-2"
        onClick={() => onAddToCart(product)}
      >
        Add To Cart
      </button>
    )}
  </div>
);

const ShopCategory = () => {
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

  return (
    <section className="py-6 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-5">
          Shop By Category
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-4xl mx-auto leading-loose text-sm sm:text-base">
          Discover our full range of wellness solutions designed for every need.
          From luxurious massage chairs to compact leg massagers and car-friendly models —
          explore the right category to begin your journey to relaxation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shopcat.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={getQuantity(product.id)}
              onAddToCart={handleAddToCart}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onNavigate={handleNavigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopCategory;
