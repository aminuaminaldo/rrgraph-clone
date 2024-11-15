import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLayerGroup,
  FaClipboardList,
  FaBuilding,
  FaChartPie,
} from "react-icons/fa";
import { HiOutlineChevronDown } from "react-icons/hi";
import { FiCheck } from "react-icons/fi";

const serviceData = [
  {
    title: "Presentation and product showcase",
    color: "bg-pink-100",
    icon: <FaLayerGroup className="text-pink-500 w-8 h-8" />,
    details: ["Slide design", "Product presentation", "Visual storytelling"],
  },
  {
    title: "Flyer, brochure, and print design",
    color: "bg-blue-100",
    icon: <FaClipboardList className="text-blue-500 w-8 h-8" />,
    details: ["Flyer design", "Brochure design", "Print-ready layout"],
  },
  {
    title: "Business kit and brand identity",
    color: "bg-green-100",
    icon: <FaBuilding className="text-green-500 w-8 h-8" />,
    details: ["Logo design", "Brand guidelines", "Stationery design"],
  },
  {
    title: "Graph and illustration",
    color: "bg-gray-100",
    icon: <FaChartPie className="text-gray-500 w-8 h-8" />,
    details: ["Infographics", "Custom illustrations", "Data visualization"],
  },
];

const Services = () => {
  const [openAccordions, setOpenAccordions] = useState([]);

  const toggleAccordion = (index) => {
    if (openAccordions.includes(index)) {
      setOpenAccordions(openAccordions.filter((i) => i !== index));
    } else {
      setOpenAccordions([...openAccordions, index]);
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="text-left">
            <h2 className="text-4xl font-bold mb-2">
              We cover all aspects of your brand identity design
            </h2>
            <p className="text-gray-600">
              This is a one-stop design solution for all your brand design. Make
              them consistent in one brand.
            </p>
          </div>
          <div>
            <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-yellow-600 transition-colors">
              More examples
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 ${service.color} shadow-md hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="flex flex-col items-center mb-4">
                <div className="mb-2">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>

              <button
                onClick={() => toggleAccordion(index)}
                className="text-gray-700 text-sm flex items-center justify-center w-full mt-4 py-2 hover:text-yellow-500"
              >
                <span>Our service</span>
                <HiOutlineChevronDown
                  className={`ml-2 w-4 h-4 transform transition-transform ${
                    openAccordions.includes(index) ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {openAccordions.includes(index) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-4 text-gray-700 text-sm"
                >
                  <div className="space-y-2">
                    {service.details.map((detail, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <FiCheck className="text-black w-4 h-4" />{" "}
                        <p>{detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
