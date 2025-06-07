import React from "react";
import Logo from "../assets/HomeImage/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#f7f3ef] to-[#e8f1f2] text-gray-800 px-6 py-10">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top: Company Logo */}
        <div className="flex justify-start">
          <img src={Logo} alt="Company Logo" className="w-40" />
        </div>

        {/* Bottom: 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left: Contact Info */}
          <div className="text-sm space-y-3">
            <p>
              <strong>Email:</strong> www.o2fitnesshealthcare@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> 6380307315, 9750905275, 8867633332,
              9868140412
            </p>
            <p>
              <strong>WhatsApp:</strong> https://wa.link/2omy5j
            </p>
            <div>
              <p>
                <strong>Address:</strong>
              </p>
              <p>
                <strong>Head Office:</strong>
                <br />
                O2FITNESS HEALTH CARE
                <br />
                No:229, Ganapathy colony, 7th cross street, Northpapakurichi PO
                <br />
                Chozhan – 638006, 9750905275
              </p>
              <p className="mt-2">
                <strong>Branch Office:</strong>
                <br />
                No.4 Kamarathottam street, Near Thermal blood lab, (junction
                kop)
                <br />
                Suramangalam, SALEM - 636005
                <br />
                9868140412, 9750905275
              </p>
            </div>
          </div>

          {/* Middle: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-orange-500">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-orange-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-orange-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="/warranty" className="hover:text-orange-500">
                  Warranty
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Subscribe */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Let's Stay in Touch</h3>
            <p className="text-sm mb-4">
              Join our community to get the latest on product launches,
              promotions, and expert wellness advice. No spam, just pure
              comfort.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="email"
                placeholder="Email Id"
                className="px-3 py-2 w-full sm:w-auto rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-5 text-gray-400" />
      <div className="text-center mt-2">Copyright © 2025. Tekno Spot</div>
    </footer>
  );
};

export default Footer;
