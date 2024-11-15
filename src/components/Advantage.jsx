// src/components/Advantage.jsx
import React from "react";

const advantagesData = [
  {
    icon: "https://www.rrgraphdesign.com/wp-content/uploads/2023/08/Disciplines-Kind-1.png",
    title: "Disciplines of all kinds",
    description: "Our team works diligently on every project.",
  },
  {
    icon: "https://www.rrgraphdesign.com/wp-content/uploads/2023/08/Disciplines-Kind-2.png",
    title: "Achieving on-time completion",
    description: "Track and discuss the flow step by step with us.",
  },
  {
    icon: "https://www.rrgraphdesign.com/wp-content/uploads/2023/08/Disciplines-Kind-3.png",
    title: "Experts with an eye for detail",
    description: "We conduct thoughtful research on each topic.",
  },
  {
    icon: "https://www.rrgraphdesign.com/wp-content/uploads/2023/08/Disciplines-Kind-4.png",
    title: "Taking on complex projects",
    description: "All project analysis are part of our expertise.",
  },
  {
    icon: "https://www.rrgraphdesign.com/wp-content/uploads/2023/08/Disciplines-Kind-5.png",
    title: "Follow design trends",
    description: "Based on recent research in design and perception.",
  },
  {
    icon: "https://www.rrgraphdesign.com/wp-content/uploads/2023/08/Disciplines-Kind-6.png",
    title: "Made by creative top rated designer",
    description: "Make your data served in creative infographics.",
  },
];

const Advantage = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Main Header */}
        <h2 className="text-4xl font-bold mb-4">
          Why choose our presentation design agency?
        </h2>

        {/* Subheader */}
        <p className="text-gray-500 mb-12">
          Your presentation handled by top rated designer, to get real
          impressive presentation design
        </p>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {advantagesData.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Placeholder for icon */}
              <img src={item.icon} alt="Icon" className="w-16 h-16 mb-4" />{" "}
              {/* Replace with actual icon URLs later */}
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-500 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantage;
