import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const categories = [
  { name: 'Massage Chairs', path: '/products/massage-chairs' },
  { name: 'Leg & Foot Massager', path: '/products/leg-foot-massager' },
  { name: 'Car Mini Massager', path: '/products/car-mini-massager' },
  { name: 'Steam & Heat Therapy', path: '/products/steam-heat-therapy' },
  { name: 'Fitness Accessories', path: '/products/fitness-accessories' },
  { name: 'Home Gym Equipment', path: '/products/home-gym-equipment' },
];

const CategoryProductTab = () => {

    const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="flex flex-wrap justify-center gap-3 py-4">
  {categories.map((cat) => (
    <div
      key={cat.path}
      onClick={() => navigate(cat.path)}
      className="p-[2px] rounded-full bg-gradient-to-b from-orange-400 to-blue-300 cursor-pointer"
    >
      <button
        className={clsx(
          'px-4 py-2 rounded-full font-medium w-full h-full',
          location.pathname === cat.path
            ? 'bg-orange-500 text-white'
            : 'bg-white text-gray-700 hover:bg-orange-100'
        )}
      >
        {cat.name}
      </button>
    </div>
  ))}
</div>
  )
}

export default CategoryProductTab