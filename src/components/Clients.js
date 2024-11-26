"use client";

import React, { useEffect, useRef } from "react";

const ClientCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Set the scroll speed and infinite scrolling
    const scrollInterval = setInterval(() => {
      if (carouselRef.current) {
        // Scroll 1px to the right
        carouselRef.current.scrollLeft += 1; 
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          // Reset to the start when it reaches halfway (infinite scroll)
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 30); // Adjust the speed by changing the interval (ms)

    return () => clearInterval(scrollInterval); // Cleanup interval on component unmount
  }, []);

  const clients = [
    "Client 1", "Client 2", "Client 3", "Client 4", "Client 5", "Client 6", "Client 7",
    "Client 8", "Client 9", "Client 10"
  ];

  return (
    <div className="flex flex-col">
    <div className="client-carousel-container">
      <h2 className="carousel-heading">Our Clients</h2>
      <div className="client-carousel" ref={carouselRef}>
        <div className="client-names">
          {clients.map((client, index) => (
            <div key={index} className="client-item">{client}</div>
          ))}
          {/* Duplicate the list for infinite scroll effect */}
          {clients.map((client, index) => (
            <div key={index + clients.length} className="client-item">{client}</div>
          ))}
        </div>
      </div>
    </div>
<div>
<img src="https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-full h-[400px]" />
</div>
</div>
  );
};

export default ClientCarousel;
