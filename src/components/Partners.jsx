import React, { useEffect, useRef } from "react";
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

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const logosClone = slider.innerHTML;
    slider.innerHTML += logosClone;

    let scrollPosition = 0;
    const speed = 3;

    const scrollLoop = () => {
      scrollPosition += speed;
      if (scrollPosition >= slider.scrollWidth / 2) {
        scrollPosition = 0;
      }
      slider.scrollLeft = scrollPosition;
      requestAnimationFrame(scrollLoop);
    };
    scrollLoop();
  }, []);

  return (
    <section className="partners-container">
      <div className="partners-slider" ref={sliderRef}>
        {logos.map((logo, index) => (
          <img
            key={index}
            className="partner-logo"
            src={logo.src}
            alt={logo.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Partners;
