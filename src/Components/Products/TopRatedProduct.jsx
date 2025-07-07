import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementQty, decrementQty } from "@/redux/cartSlice";
import { useNavigate } from "react-router-dom";

import CategoryProductTab from "./CategoryTabs/CategoryProductTab";
import MassageChair from "./MassageChair";
import LegFootMassager from "./LegFootMassager";
import NeckMassager from "./NeckMassager";
import FitnessMassagers from "./FitnessMassagers";

import MCimg1 from "../../assets/Products/MCChair/IMG-1.jpg";
import Image4 from "../../assets/Products/MCChair/IMG-4.jpg";
import Image6 from "../../assets/Products/MCChair/IMG-6.jpeg";
import Image11 from "../../assets/Products/MCChair/IMG-11.jpg";
import Image13 from "../../assets/Products/MCChair/IMG-13.jpg";
import Image18 from "../../assets/Products/Leg/Img-18.jpeg";
import Image1 from "../../assets/Products/Neck/Img-19.jpeg";
import Image20 from "../../assets/Products/Foot/IMG-20.jpg";
import Image22 from "../../assets/Products/Foot/IMG-22.jpg";
import Image23 from "../../assets/Products/Foot/IMG-23.jpg";
import Image26 from "../../assets/Products/Foot/IMG-26.jpg";

const topRatedProducts = [
  {
    id: 1,
    title: "O2 Fitness Health Care Business Class 3D-Model",
    image: MCimg1,
    oldPrice: "₹2,65,000",
    price: "₹2,08,500",
    rating: "4.8",
    reviews: "1,204",
    tag: "Massage Chair",
  },
  {
    id: 2,
    title: "O2 Fitness Health Care 200-O2 Business Class 3D Massage Chair",
    image: Image4,
    oldPrice: "₹3,15,000",
    price: "₹2,75,000",
    rating: "4.9",
    reviews: "987",
    tag: "Massage Chair",
  },
  {
    id: 3,
    title: "O2 Fitness Health Care Jade A321-B 3D Model",
    image: Image6,
    oldPrice: "₹2,60,000",
    price: "₹1,95,000",
    rating: "4.7",
    reviews: "800",
    tag: "Massage Chair",
  },
  {
    id: 4,
    title: "O2 Fitness Health Care 90-02 Premium 5D Massage Chair",
    image: Image11,
    oldPrice: "₹2,45,000",
    price: "₹1,85,000",
    rating: "4.5",
    reviews: "945",
    tag: "Massage Chair",
  },
  {
    id: 5,
    title: "O2 Fitness Health Care A372.O2 Smart Luxury 4D Massage Chair",
    image: Image13,
    oldPrice: "₹2,50,000",
    price: "₹1,79,000",
    rating: "4.6",
    reviews: "1,002",
    tag: "Massage Chair",
  },
  {
    id: 6,
    title: "Home Gym Fitness (Advanced Model)",
    image: Image18,
    oldPrice: "₹2,65,000",
    price: "₹2,08,500",
    rating: "4.8",
    reviews: "1,204",
    tag: "Massage Chair",
  },
  {
    id: 7,
    title: "Home Gym Fitness (Advanced Model)",
    image: Image18,
    oldPrice: "₹3,15,000",
    price: "₹2,75,000",
    rating: "4.9",
    reviews: "987",
    tag: "Massage Chair",
  },
  {
    id: 8,
    title: "O2 Neck Massager (Wireless)",
    image: Image1,
    oldPrice: "₹2,65,000",
    price: "₹2,08,500",
    rating: "4.8",
    reviews: "1,204",
    tag: "Massage Chair",
  },
  {
    id: 9,
    title: "Foot Massager : Leg massager",
    image: Image20,
    oldPrice: "₹2,65,000",
    price: "₹2,08,500",
    rating: "4.8",
    reviews: "1,204",
    tag: "Massage Chair",
  },
  {
    id: 10,
    title: "Home Gym Fitness (Advanced Model)",
    image: Image22,
    oldPrice: "₹3,15,000",
    price: "₹2,75,000",
    rating: "4.9",
    reviews: "987",
    tag: "Massage Chair",
  },
  {
    id: 11,
    title: "Home Gym Fitness (Advanced Model)",
    image: Image23,
    oldPrice: "₹3,15,000",
    price: "₹2,75,000",
    rating: "4.9",
    reviews: "987",
    tag: "Massage Chair",
  },
  {
    id: 12,
    title: "Home Gym Fitness (Advanced Model)",
    image: Image26,
    oldPrice: "₹3,15,000",
    price: "₹2,75,000",
    rating: "4.9",
    reviews: "987",
    tag: "Massage Chair",
  },
];

const categoryComponents = {
  "Massage Chairs": MassageChair,
  "Leg & Foot Massager": LegFootMassager,
  "Neck Massager": NeckMassager,
  "Fitness Massagers": FitnessMassagers,
};

const TopRatedProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (product) => dispatch(addToCart(product));
  const handleIncrement = (id) => dispatch(incrementQty(id));
  const handleDecrement = (id) => dispatch(decrementQty(id));

  const getQuantity = (productId) => {
    const item = cart.find((p) => p.id === productId);
    return item ? item.quantity : 0;
  };

  

  const filteredProducts =
    selectedCategory === "All"
      ? topRatedProducts
      : topRatedProducts.filter((p) => p.tag === selectedCategory);

  const SelectedComponent = categoryComponents[selectedCategory];

  return (
    <div className="px-10 py-8 bg-white">
      <CategoryProductTab
        selectedTab={selectedCategory}
        onSelect={(cat) => setSelectedCategory(cat)}
      />

      <div className="my-4">{SelectedComponent && <SelectedComponent />}</div>

      {selectedCategory === "All" && (
        <>
          <div className="text-center mb-4">
            <h2 className="text-4xl font-bold mb-6 mt-5">Top Rated Products</h2>
            <p className="text-gray-700 mb-6 max-w-5xl mx-auto">
              Trusted by thousands of happy customers, these top-rated products
              are known for their performance, durability, and customer satisfaction.
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

                  {/* Image and Title click goes to detail page */}
                  <div
                    onClick={() => handleNavigate(product.id)}
                    className="cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-40 object-contain mb-3 hover:scale-110 transition"
                    />
                    <h2 className="text-md font-semibold text-gray-800 mb-1">
                      {product.title}
                    </h2>
                  </div>

                  <h3 className="text-sm text-gray-600">{product.tag}</h3>
                  <div className="text-sm text-yellow-500 mb-1">
                    ★ {product.rating}{" "}
                    <span className="text-xs text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="mb-2">
                    <span className="text-orange-600 font-bold text-sm">
                      {product.price}
                    </span>{" "}
                    <span className="text-gray-400 line-through text-xs">
                      {product.oldPrice}
                    </span>
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
                      Buy Now
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default TopRatedProduct;
