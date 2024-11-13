import React from "react";
import { FaStar, FaWhatsapp } from "react-icons/fa";

const LandPage = () => {
  return (
    <section className="flex flex-wrap items-center justify-between px-6 py-4 bg-white">
      {/* Left Side: Presentation Images */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
        <img
          src="https://www.rrgraphdesign.com/wp-content/uploads/2023/07/Permira-Presentation-Featured-Image-min.jpg"
          alt="Presentation Slide Preview"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>

      {/* Right Side: Main Text and CTA */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
        {/* Trustpilot Rating */}
        <div className="flex items-center space-x-2 text-gray-600 mb-4">
          <span className="text-lg font-medium">4.8 / 5</span>
          <FaStar className="text-green-500" />
          <span className="text-green-500 font-semibold">on Trustpilot</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl font-bold text-black leading-tight mb-4">
          Make Your Presentation Noticeable
        </h1>

        {/* Subtext */}
        <p className="text-gray-700 text-lg mb-6">
          Impress your audience with real presentation design, not only “Fix
          them up your slide”. Transform your message into visually story-driven
          slides.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex space-x-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded">
            See plan
          </button>
          <button className="bg-white border border-gray-300 hover:border-gray-400 text-black font-semibold py-3 px-6 rounded shadow">
            Try us for $1
          </button>
        </div>
      </div>

      {/* WhatsApp Icon */}
      <div className="fixed bottom-4 right-4">
        <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-green-500 text-5xl hover:text-green-600" />
        </a>
      </div>
    </section>
  );
};

export default LandPage;
