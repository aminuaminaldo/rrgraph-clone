import React from "react";
import "../Partners.css";

const Partners = () => {
  const logos = [
    {
      src: "https://www.rrgraphdesign.com/wp-content/uploads/2023/08/Pertamina-Logo.png",
      alt: "Pertamina Logo",
    },
    {
      src: "https://www.rrgraphdesign.com/wp-content/uploads/2023/08/Samsung-Logo.png",
      alt: "Samsung Logo",
    },
    {
      src: "https://www.rrgraphdesign.com/wp-content/uploads/2023/08/Seagate-Logo.png",
      alt: "Seagate Logo",
    },
    {
      src: "https://www.rrgraphdesign.com/wp-content/uploads/2023/08/Airbnb-Logo.png",
      alt: "Airbnb Logo",
    },
    {
      src: "https://www.rrgraphdesign.com/wp-content/uploads/2023/08/BBC-Logo.png",
      alt: "BBC Logo",
    },
    {
      src: "https://www.rrgraphdesign.com/wp-content/uploads/2023/08/Benchmark-Logo.png",
      alt: "Benchmark Logo",
    },
    {
      src: "https://www.rrgraphdesign.com/wp-content/uploads/2023/08/CAT-Logo.png",
      alt: "CAT Logo",
    },
    {
      src: "https://www.rrgraphdesign.com/wp-content/uploads/2023/08/CNN-Logo.png",
      alt: "CNN Logo",
    },
    {
      src: "https://www.rrgraphdesign.com/wp-content/uploads/2023/08/DHL-Logo.png",
      alt: "DHL Logo",
    },
    {
      src: "https://www.rrgraphdesign.com/wp-content/uploads/2023/08/Discover-Logo.png",
      alt: "Discover Logo",
    },
    {
      src: "https://www.rrgraphdesign.com/wp-content/uploads/2023/08/Fluke-Logo.png",
      alt: "Fluke Logo",
    },
    {
      src: "https://www.rrgraphdesign.com/wp-content/uploads/2023/08/Google-Logo.png",
      alt: "Google Logo",
    },
  ];

  return (
    <section className="partners-container bg-black px-8 py-4">
      <div className="partners-slider mx-4 flex items-center overflow-hidden">
        <div className="partners-logos flex items-center gap-8 whitespace-nowrap">
          {logos.map((logo) => (
            <img
              key={logo.src}
              className="partner-logo"
              src={logo.src}
              alt={logo.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
