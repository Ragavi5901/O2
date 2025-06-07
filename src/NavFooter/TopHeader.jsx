import React from 'react'
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import Logo from "../assets/HomeImage/Logo.png"
import { AiOutlineShoppingCart } from "react-icons/ai";

const TopHeader = () => {
  return (
    <div className="w-full border-b border-gray-200 bg-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 relative">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="h-18 w-auto" />
        </div>

        {/* Center: Search Bar */}
        <div className="w-full md:w-1/2 order-3 md:order-2">
          <div className="relative w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search products"
              className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Right: Icons + Button */}
        <div className="flex items-center gap-10 order-2 md:order-3">
          <AiOutlineShoppingCart className="text-xl cursor-pointer text-gray-700" />
          <BiUser className="text-xl cursor-pointer text-gray-700" />
          <button className="bg-orange-600 hover:bg-orange-700 text-white text-sm px-4 py-2 rounded-lg">
            Enquiry Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopHeader