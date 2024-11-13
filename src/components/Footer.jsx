import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
            <h2 className="text-2xl font-bold mb-4">rrgraph</h2>
            <p className="text-gray-400 mb-4">
              Reliable place to create PowerPoint slides.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" />
              <FaTiktok className="hover:text-white cursor-pointer" />
              <FaFacebook className="hover:text-white cursor-pointer" />
              <FaLinkedin className="hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Client review
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Referral program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Free Template
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="flex items-center space-x-2 text-gray-400">
              <FaMapMarkerAlt />
              <span>
                Simpang L.A. Sucipto Gg. 22A No.85, Blimbing, Malang 65126
              </span>
            </p>
            <p className="flex items-center space-x-2 text-gray-400 mt-2">
              <FaPhoneAlt />
              <span>+6281 334 783 938</span>
            </p>
            <p className="flex items-center space-x-2 text-gray-400 mt-2">
              <FaEnvelope />
              <span>support@rrgraphdesign.com</span>
            </p>
            <p className="flex items-center space-x-2 text-gray-400 mt-2">
              <FaClock />
              <span>
                Monday - Saturday
                <br />
                07:00 - 18.00 WIB GMT+9
              </span>
            </p>
            <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
              Contact now
            </button>
          </div>

          {/* Guest Post */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Guest post</h3>
            <p className="text-gray-400">
              Contact us via email to participate on our Blog :
            </p>
            <a
              href="mailto:market@rrgraphdesign.com"
              className="text-yellow-500 font-semibold"
            >
              market@rrgraphdesign.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400">
          <p>© 2023 by RRGraph Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
