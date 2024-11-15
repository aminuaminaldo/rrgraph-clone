import React, { useState } from "react";
import reactLogo from "../assets/react.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <img src={reactLogo} alt="rrgraph" className="w-8 h-8" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-gray-700">rrgraph</span>
            <span className="text-sm font-medium text-gray-500">
              #startwithpower
            </span>
          </div>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-yellow-500">
            Service
          </a>
          <a href="#" className="text-gray-700 hover:text-yellow-500">
            Portfolio
          </a>
          <a href="#" className="text-gray-700 hover:text-yellow-500">
            Review
          </a>
          <a href="#" className="text-gray-700 hover:text-yellow-500">
            Referral
          </a>
          <a href="#" className="text-gray-700 hover:text-yellow-500">
            About
          </a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className="hidden md:flex space-x-4">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100">
            Book a demo
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Start a project
          </button>
        </div>
      </div>

      <nav
        className={`md:hidden transition-all duration-500 ease-in-out transform ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95"
        } overflow-hidden bg-white shadow-lg`}
      >
        <div className="px-4 py-6 space-y-4">
          <a href="#" className="block text-gray-700 hover:text-yellow-500">
            Service
          </a>
          <a href="#" className="block text-gray-700 hover:text-yellow-500">
            Portfolio
          </a>
          <a href="#" className="block text-gray-700 hover:text-yellow-500">
            Review
          </a>
          <a href="#" className="block text-gray-700 hover:text-yellow-500">
            Referral
          </a>
          <a href="#" className="block text-gray-700 hover:text-yellow-500">
            About
          </a>

          <button className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 mt-4">
            Book a demo
          </button>
          <button className="w-full bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mt-2">
            Start a project
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
