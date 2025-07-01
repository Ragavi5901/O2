import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  incrementQty,
  decrementQty,
} from "@/redux/cartSlice";

import CategoryProductTab from "./CategoryTabs/CategoryProductTab";
import MassageChair from "./MassageChair";
import LegFootMassager from "./LegFootMassager";
import CarMiniMassager from "./CarMiniMassager";

import TopIMG1 from "../../assets/Products/TopProducts/TopIMG1.png";
import TopIMG2 from "../../assets/Products/TopProducts/TopIMG2.png";
import TopIMG3 from "../../assets/Products/TopProducts/TopIMG3.png";
import TopIMG4 from "../../assets/Products/TopProducts/TopIMG4.png";
import TopIMG5 from "../../assets/Products/TopProducts/TopIMG5.png";
import TopIMG6 from "../../assets/Products/TopProducts/TopIMG6.png";
import TopIMG7 from "../../assets/Products/TopProducts/TopIMG7.png";
import TopIMG8 from "../../assets/Products/TopProducts/TopIMG8.png";
import TopIMG9 from "../../assets/Products/TopProducts/TopIMG9.png";

const topRatedProducts = [
  {
    id: 1,
    title: "O2 Fitness Health Care 200-Q2 3D – Business Class Model",
    image: TopIMG1,
    oldPrice: "₹2,10,000",
    price: "₹1,70,000",
    rating: "4.6",
    reviews: "1,234",
    tag: "Massage Chair",
  },
  {
    id: 2,
    title: "O2 Fitness Health Care Core Gem Bed Massager",
    image: TopIMG2,
    oldPrice: "₹2,85,000",
    price: "₹2,10,000",
    rating: "4.9",
    reviews: "5,689",
    tag: "Bed Massager",
  },
  {
    id: 3,
    title: "O2 Fitness Health Care FL – Acupressure Leg Massager",
    image: TopIMG3,
    oldPrice: "₹4,599",
    price: "₹3,599",
    rating: "4.9",
    reviews: "4,659",
    tag: "Leg & Foot Massager",
  },
  {
    id: 4,
    title: "O2 Fitness Health Care DISC TYPE MINI MODEL – 3D",
    image: TopIMG4,
    oldPrice: "₹1,70,000",
    price: "₹1,10,000",
    rating: "4.5",
    reviews: "1,203",
    tag: "Massage Chair",
  },
  {
    id: 5,
    title: "O2 Fitness Health Care PREMIUM 5D Massage Chair – 90-Q2",
    image: TopIMG5,
    oldPrice: "₹2,60,000",
    price: "₹1,95,000",
    rating: "4.7",
    reviews: "2,010",
    tag: "Massage Chair",
  },
  {
    id: 6,
    title: "O2 Fitness Health Care Leg Beautician",
    image: TopIMG6,
    oldPrice: "₹5,999",
    price: "₹3,599",
    rating: "4.3",
    reviews: "1,890",
    tag: "Leg & Foot Massager",
  },
  {
    id: 7,
    title: "O2 Fitness Health Care Neck Kneading Special",
    image: TopIMG7,
    oldPrice: "₹3,499",
    price: "₹2,499",
    rating: "4.3",
    reviews: "1,231",
    tag: "Neck Kneading",
  },
  {
    id: 8,
    title: "O2 Fitness Health Care Magnetic Bed Matters",
    image: TopIMG8,
    oldPrice: "₹28,500",
    price: "₹17,799",
    rating: "4.3",
    reviews: "1,231",
    tag: "Bed Matters",
  },
  {
    id: 9,
    title: "O2 Fitness Health Care 12 Balls Car Seat Massager",
    image: TopIMG9,
    oldPrice: "₹9,500",
    price: "₹6,500",
    rating: "4.3",
    reviews: "1,231",
    tag: "Car Seat Massager",
  },
];

const categoryComponents = {
  "Massage Chairs": <MassageChair />,
  "Leg & Foot Massager": <LegFootMassager />,
  "Car Mini Massager": <CarMiniMassager />,
};

const TopRatedProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const getQuantity = (productId) => {
    const item = cart.find((p) => p.id === productId);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (product) => dispatch(addToCart(product));
  const handleIncrement = (id) => dispatch(incrementQty(id));
  const handleDecrement = (id) => dispatch(decrementQty(id));

  const filteredProducts =
    selectedCategory === "All"
      ? topRatedProducts
      : topRatedProducts.filter((p) => p.tag === selectedCategory);

  return (
    <div className="px-10 py-8 bg-white">
      <CategoryProductTab
        selectedTab={selectedCategory}
        onSelect={(cat) => setSelectedCategory(cat)}
      />

      <div className="my-4">{categoryComponents[selectedCategory] || <></>}</div>

      <div className="text-center mb-4">
        <h2 className="text-4xl font-bold mb-6 mt-5">Top Rated Products</h2>
        <p className="text-gray-700 mb-6 max-w-5xl mx-auto">
          Trusted by thousands of happy customers, these top-rated products are
          known for their performance, durability, and customer satisfaction.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center">
        {filteredProducts.map((product) => {
          const quantity = getQuantity(product.id);
          return (
            <div
              key={product.id}
              className="border rounded-lg shadow-sm p-4 relative bg-white text-center border-gray-300"
            >
              <div className="absolute top-2 right-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-b from-orange-800 to-orange-400">
                Sale
              </div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-3 hover:scale-110 transition"
              />
              <h3 className="text-sm text-gray-600">{product.tag}</h3>
              <div className="text-sm text-yellow-500 mb-1">
                ★ {product.rating}{" "}
                <span className="text-xs text-gray-500">({product.reviews})</span>
              </div>
              <h2 className="text-md font-semibold text-gray-800 mb-1">
                {product.title}
              </h2>
              <div className="mb-2">
                <span className="text-orange-600 font-bold text-sm">{product.price}</span>{" "}
                <span className="text-gray-400 line-through text-xs">{product.oldPrice}</span>
              </div>
              {quantity > 0 ? (
                <div className="flex justify-center items-center space-x-2 mt-2">
                  <button
                    onClick={() => handleDecrement(product.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    –
                  </button>
                  <span className="font-medium">{quantity}</span>
                  <button
                    onClick={() => handleIncrement(product.id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="mt-2 bg-black text-white py-1 px-4 text-sm rounded hover:bg-gray-800 hover:scale-110 transition"
                  onClick={() => handleAddToCart(product)}
                >
                  Add To Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRatedProduct;
