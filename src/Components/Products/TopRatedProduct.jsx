import React, { useState } from 'react';
import CategoryProductTab from "./CategoryTabs/CategoryProductTab";
import MassageChair from './MassageChair';
import LegFootMassager from './LegFootMassager';
import CarMiniMassager from './CarMiniMassager';
import TopIMG1 from '../../assets/Products/TopProducts/TopIMG1.png'
import TopIMG2 from '../../assets/Products/TopProducts/TopIMG2.png'
import TopIMG3 from '../../assets/Products/TopProducts/TopIMG3.png'
import TopIMG4 from '../../assets/Products/TopProducts/TopIMG4.png'
import TopIMG5 from '../../assets/Products/TopProducts/TopIMG5.png'
import TopIMG6 from '../../assets/Products/TopProducts/TopIMG6.png'
import TopIMG7 from '../../assets/Products/TopProducts/TopIMG7.png'
import TopIMG8 from '../../assets/Products/TopProducts/TopIMG8.png'
import TopIMG9 from '../../assets/Products/TopProducts/TopIMG9.png'

const topRatedProducts = [
  {
    id: 1,
    title: 'O2 Fitness Health Care 200-Q2 3D – Business Class Model',
    image: TopIMG1,
    oldPrice: '₹2,10,000',
    price: '₹1,70,000',
    rating: '4.6',
    reviews: '1,234',
    tag: 'Massage Chair',
  },
  {
    id: 2,
    title: 'O2 Fitness Health Care Core Gem Bed Massager',
    image: TopIMG2,
    oldPrice: '₹2,85,000',
    price: '₹2,10,000',
    rating: '4.9',
    reviews: '5,689',
    tag: 'Bed Massager',
  },
  {
    id: 3,
    title: 'O2 Fitness Health Care FL – Acupressure Leg Massager',
    image: TopIMG3,
    oldPrice: '₹4,599',
    price: '₹3,599',
    rating: '4.9',
    reviews: '4,659',
    tag: 'Leg & Foot Massager',
  },
  {
    id: 4,
    title: 'O2 Fitness Health Care DISC TYPE MINI MODEL – 3D',
    image: TopIMG4,
    oldPrice: '₹1,70,000',
    price: '₹1,10,000',
    rating: '4.5',
    reviews: '1,203',
    tag: 'Massage Chair',
  },
  {
    id: 5,
    title: 'O2 Fitness Health Care PREMIUM 5D Massage Chair – 90-Q2',
    image: TopIMG5,
    oldPrice: '₹2,60,000',
    price: '₹1,95,000',
    rating: '4.7',
    reviews: '2,010',
    tag: 'Massage Chair',
  },
  {
    id: 6,
    title: 'O2 Fitness Health Care Leg Beautician',
    image: TopIMG6,
    oldPrice: '₹5,999',
    price: '₹3,599',
    rating: '4.3',
    reviews: '1,890',
    tag: 'Leg & Foot Massager',
  },
  {
    id: 7,
    title: 'O2 Fitness Health Care Neck Kneading Special',
    image: TopIMG7,
    oldPrice: '₹3,499',
    price: '₹2,499',
    rating: '4.3',
    reviews: '1,231',
    tag: 'Neck Kneading'
  },
  {
    id: 8,
    title: 'O2 Fitness Health Care Magnetic Bed Matters',
    image: TopIMG8,
    oldPrice: '₹28,500',
    price: '₹17,799',
    rating: '4.3',
    reviews: '1,231',
    tag: 'Bed Matters'
  },
  {
    id: 9,
    title: 'O2 Fitness Health Care 12 Balls Car Seat Massager',
    image: TopIMG9,
    oldPrice: '₹9,500',
    price: '₹6,500',
    rating: '4.3',
    reviews: '1,231',
    tag: 'Car Seat Massager'
  }
];

const categoryComponents = {
  'Massage Chairs': <MassageChair />,
  'Leg & Foot Massager': <LegFootMassager />,
  'Car Mini Massager': <CarMiniMassager />,
  // Add more if needed
};

const TopRatedProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? topRatedProducts
      : topRatedProducts.filter((p) => p.tag === selectedCategory);

  return (
    <div className="px-10 py-8">
      <CategoryProductTab
        selectedTab={selectedCategory}
        onSelect={(cat) => setSelectedCategory(cat)}
      />

      <div className="my-4">
        {categoryComponents[selectedCategory] || <p></p>}
      </div>

      <div className="text-center mb-4">
        <h2 className="text-4xl font-bold mb-6 mt-5">Top Rated Products</h2>
        <p className="text-center text-gray-800 mb-6 max-w-5xl mx-auto">
          Trusted by thousands of happy customers, these top-rated products are
          known for their performance, durability, and customer satisfaction.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-sm p-4 relative">
            <span className="absolute top-2 right-2 text-transparent bg-clip-text bg-gradient-to-b from-orange-800 to-orange-400 font-semibold">
              Sale
            </span>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain mb-4 hover:scale-110 cursor-pointer"
            />
            <h1 className="text-gray-500 text-sm">{product.tag}</h1>
            <div className="flex items-center justify-center gap-1 text-yellow-500 mt-1">
              ★ {product.rating}
              <span className="text-xs text-gray-500">({product.reviews})</span>
            </div>
            <h3 className="text-sm font-medium">{product.title}</h3>
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

export default TopRatedProduct;
