import React from "react";

const achievementsData = [
  { number: "5000+", label: "Complete project" },
  { number: "2500+", label: "Global Client" },
  { number: "100K+", label: "Slides designed" },
  { number: "4.8/5", label: "Average rating" },
];

const Achievements = () => {
  return (
    <section className="pt-12 bg-gray-50">
      <div className="container mx-auto px-4 text-left md:text-center">
        <h2 className="text-4xl mb-12 w-full md:w-1/2 mx-auto">
          We have spread satisfaction to whole the world
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-black text-white p-8 rounded-lg md:rounded-b-none shadow-md"
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
