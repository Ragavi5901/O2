import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { AuthContext } from "../contexts/AuthContext";
import Logo from "../assets/HomeImage/Logo.png";
import Enquiry from "./Enquiry"; // ⬅️ import Enquiry form component

const TopHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false); // ⬅️ state for modal
  const { user, role, authChecked } = useContext(AuthContext);
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart.items);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = async () => {
    await signOut(auth);
    setDropdownOpen(false);
    navigate("/");
  };

  const handleDashboardRedirect = () => {
    if (!authChecked) return;
    if (role === "admin") navigate("/admindashboard");
    else if (role === "superadmin") navigate("/superadmindashboard");
    else navigate("/");
    setDropdownOpen(false);
  };

  const handleUserDashboard = () => {
    if (role === "user") {
      navigate("/userdashboard");
      setDropdownOpen(false);
    }
  };

  return (
    <div className="w-full border-b border-gray-200 bg-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 relative">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="h-18 w-auto" />
        </div>

        {/* Search Bar */}
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

        {/* Cart and User Controls */}
        <div className="flex items-center gap-6 order-2 md:order-3 relative">
          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <AiOutlineShoppingCart className="text-xl cursor-pointer text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Wishlist Icon */}
          <Link to="/wishlist">
            <AiOutlineHeart className="text-xl cursor-pointer text-gray-700" />
          </Link>

          {user ? (
            <>
              <div className="relative">
                <BiUser
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="text-xl cursor-pointer text-gray-700"
                />
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-md z-50">
                    <div className="flex flex-col p-2 text-sm text-gray-700">
                      <span className="px-4 py-2 border-b text-xs text-gray-500">
                        {user.email}
                      </span>

                      {/* Admin or Superadmin Dashboard */}
                      {(role === "admin" || role === "superadmin") && (
                        <button
                          onClick={handleDashboardRedirect}
                          className="px-4 py-2 text-left hover:bg-gray-100"
                        >
                          Dashboard
                        </button>
                      )}

                      <Link
                        to="/edit-profile"
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Edit Profile
                      </Link>
                      <Link
                        to="/orders"
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Order History
                      </Link>
                      <Link
                        to="/wishlist"
                        className="px-4 py-2 hover:bg-gray-100"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Wishlist
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="px-4 py-2 text-red-500 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Enquiry Now Button */}
              <button
                className="bg-orange-600 hover:bg-orange-700 text-white text-sm px-4 py-2 rounded-lg"
                onClick={() => setShowEnquiry(true)}
              >
                Enquiry Now
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-orange-600 hover:bg-orange-700 text-white text-sm px-4 py-2 rounded-lg"
            >
              Sign In / Sign Up
            </Link>
          )}
        </div>
      </div>

      {/* Enquiry Form Popup Modal */}
      {showEnquiry && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className=" rounded-xl shadow-2xl max-w-xl w-full p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-4 text-black text-2xl font-bold"
              onClick={() => setShowEnquiry(false)}
            >
              &times;
            </button>

            {/* Enquiry Form */}
            <Enquiry  onClose={() => setShowEnquiry(false)}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopHeader;
