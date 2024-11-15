import React from "react";

const achievementsData = [
  { number: "5000+", label: "Complete project" },
  { number: "2500+", label: "Global Client" },
  { number: "100K+", label: "Slides designed" },
  { number: "4.8/5", label: "Average rating" },
];

const Achievements = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-8">
          We have spread satisfaction to whole the world
        </h2>

        {/* Achievements Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className="bg-black text-white p-8 rounded-lg shadow-md"
            >
              <p className="text-3xl font-bold">{item.number}</p>
              <p className="mt-2 text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
