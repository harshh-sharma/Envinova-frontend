"use client";

import React, { useRef, useEffect } from "react";

const ContactUs = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Automatic horizontal scroll for the carousel
    const scrollInterval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1; // Adjust scrolling speed
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0; // Reset scroll to create infinite effect
        }
      }
    }, 20);

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  const images = [
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184397/pexels-photo-3184397.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div className="w-full bg-transparent py-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-600 mt-2">Get in touch with us for more details!</p>
      </div>

      {/* Carousel Section */}
      <div
        className="overflow-hidden w-full relative"
        style={{ height: "250px" }}
      >
        <div
          ref={carouselRef}
          className="flex gap-4 w-full h-full overflow-hidden"
          style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Contact carousel ${index + 1}`}
              className="rounded-lg object-cover w-[300px] h-[250px] flex-shrink-0"
            />
          ))}
          {/* Duplicate images for infinite scrolling */}
          {images.map((src, index) => (
            <img
              key={`duplicate-${index}`}
              src={src}
              alt={`Duplicate ${index + 1}`}
              className="rounded-lg object-cover w-[300px] h-[250px] flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
