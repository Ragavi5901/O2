import React from "react";
import CategoryProductTab from "./CategoryTabs/CategoryProductTab";
import MCimg1 from '../../assets/Products/MCChair/MCimg1.png'
import MCimg2 from '../../assets/Products/MCChair/MCimg2.png'
import MCimg3 from '../../assets/Products/MCChair/MCimg3.png'
import MCimg4 from '../../assets/Products/MCChair/MCimg4.png'
import MCimg5 from '../../assets/Products/MCChair/MCimg5.png'
import MCimg6 from '../../assets/Products/MCChair/MCimg6.png'
import MCimg7 from '../../assets/Products/MCChair/MCimg7.png'
import MCimg8 from '../../assets/Products/MCChair/MCimg8.png'
import MCimg9 from '../../assets/Products/MCChair/MCimg9.png'
import MCimg10 from '../../assets/Products/MCChair/MCimg10.png'
import MCimg11 from '../../assets/Products/MCChair/MCimg11.png'
import MCimg12 from '../../assets/Products/MCChair/MCimg12.png'

const massageChairProducts = [
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
    title: "O2 Fitness Health Care Taaffelite A372-2 3D Model",
    image: MCimg2,
    oldPrice: "₹3,15,000",
    price: "₹2,75,000",
    rating: "4.9",
    reviews: "987",
    tag: "Massage Chair",
  },
  {
    id: 3,
    title: "O2 Fitness Health Care Jade A321-B 3D Model",
    image: MCimg3,
    oldPrice: "₹2,60,000",
    price: "₹1,95,000",
    rating: "4.7",
    reviews: "800",
    tag: "Massage Chair",
  },
  {
    id: 4,
    title: "O2 Fitness Health Care Armani A350 3D Model",
    image: MCimg4,
    oldPrice: "₹2,45,000",
    price: "₹1,85,000",
    rating: "4.5",
    reviews: "945",
    tag: "Massage Chair",
  },
  {
    id: 5,
    title: "O2 Fitness Health Care Baby A321-2 3D Model",
    image: MCimg5,
    oldPrice: "₹2,50,000",
    price: "₹1,79,000",
    rating: "4.6",
    reviews: "1,002",
    tag: "Massage Chair",
  },
  {
    id: 6,
    title: "O2 Fitness Health Care Relax Chair Pro",
    image: MCimg6,
    oldPrice: "₹2,40,000",
    price: "₹1,44,000",
    rating: "4.4",
    reviews: "987",
    tag: "Massage Chair",
  },
  {
    id: 7,
    title: "O2 Fitness Health Care Armani A350 3D Model",
    image: MCimg7,
    oldPrice: "₹2,45,000",
    price: "₹1,85,000",
    rating: "4.5",
    reviews: "945",
    tag: "Massage Chair",
  },
  {
    id: 8,
    title: "O2 Fitness Health Care Baby A321-2 3D Model",
    image: MCimg8,
    oldPrice: "₹2,50,000",
    price: "₹1,79,000",
    rating: "4.6",
    reviews: "1,002",
    tag: "Massage Chair",
  },
  {
    id: 9,
    title: "O2 Fitness Health Care Relax Chair Pro",
    image: MCimg9,
    oldPrice: "₹2,40,000",
    price: "₹1,44,000",
    rating: "4.4",
    reviews: "987",
    tag: "Massage Chair",
  },
  {
    id: 10,
    title: "O2 Fitness Health Care Relax Chair Pro",
    image: MCimg10,
    oldPrice: "₹2,40,000",
    price: "₹1,44,000",
    rating: "4.4",
    reviews: "987",
    tag: "Massage Chair",
  },
  {
    id: 11,
    title: "O2 Fitness Health Care Relax Chair Pro",
    image: MCimg11,
    oldPrice: "₹2,40,000",
    price: "₹1,44,000",
    rating: "4.4",
    reviews: "987",
    tag: "Massage Chair",
  },
  {
    id: 12,
    title: "O2 Fitness Health Care Relax Chair Pro",
    image: MCimg12,
    oldPrice: "₹2,40,000",
    price: "₹1,44,000",
    rating: "4.4",
    reviews: "987",
    tag: "Massage Chair",
  },
];

const MassageChair = () => {
  return (
    <div className="px-4 py-8">
      <CategoryProductTab />
      <h2 className="text-4xl font-bold text-center mb-6 mt-5">
        Massage Chairs
      </h2>
      <p className="text-center text-gray-800 mb-6 max-w-5xl mx-auto">
        Let our massage chairs do the work. From zero gravity to heated rollers,
        explore advanced features that soothe your body and calm your mind.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center">
        {massageChairProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-sm p-4 relative flex flex-col items-center"
          >
            <span className="absolute top-2 right-2 text-transparent bg-clip-text bg-gradient-to-b from-orange-800 to-orange-400 font-semibold">
              Sale
            </span>
            <img
              src={product.image}
              alt={product.title}
              className={`w-full h-40 object-contain mb-4 cursor-pointer transition-transform duration-300 
    ${product.id === 5 ? 'transform rotate-12 scale-110' : 'hover:scale-110'}`}
            />
            <h1 className="text-gray-500 text-sm">{product.tag}</h1>
            
            <div className="flex items-center justify-center gap-1 text-yellow-500 mt-1">
              ★ {product.rating}
              <span className="text-xs text-gray-500">({product.reviews})</span>
            </div>
            <h3 className="text-sm font-medium text-center">{product.title}</h3>
            <div className="text-sm text-gray-600 mt-2 line-through">
              {product.oldPrice}
            </div>
            <div className="text-lg font-bold text-orange-500">
              {product.price}
            </div>
            <button className="mt-3 bg-black text-white py-1 px-4 rounded hover:scale-110 cursor-pointer">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MassageChair;
