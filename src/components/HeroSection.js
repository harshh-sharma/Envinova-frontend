import axiosInstance from "@/helpers/axiosInstance";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CustomCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = useSelector(store => store?.eninova?.contents);
  const heroSectionData = data.find(item => item.title?.toLowerCase() === "hero-section");
  
  

  const slides = [
    {
      image:
        "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, repudiandae.",
      contactLink: "#contact",
      productsLink: "#products",
    },
    {
      image:
        "https://images.pexels.com/photos/813269/pexels-photo-813269.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, repudiandae.",
      contactLink: "#contact",
      productsLink: "#products",
    },
    {
      image:
        "https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, repudiandae.",
      contactLink: "#contact",
      productsLink: "#products",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-[80vh]">
      {/* Background Image */}
      <div
        className="h-full bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        {/* Overlay and Text */}
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white px-4 md:px-12 max-w-2xl">
            <h2 className="text-xl md:text-3xl lg:text-4xl mb-6 text-[rgb(255,242,188)]">
              {heroSectionData ? heroSectionData?.content : slides[currentSlide].text}
            </h2>
            <div className="space-x-4">
              <a
                href={slides[currentSlide].contactLink}
                className="inline-block text-base md:text-xl px-4 py-2 bg-[rgb(254,254,254)] text-black rounded-lg hover:bg-gray-200"
              >
                Contact Us
              </a>
              <a
                href={slides[currentSlide].productsLink}
                className="inline-block text-base md:text-xl px-4 py-2 bg-[rgb(18,214,255)] text-black rounded-lg hover:bg-[rgb(16,190,230)]"
              >
                Products
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 p-2 rounded-full hover:bg-gray-800 md:p-4"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 p-2 rounded-full hover:bg-gray-800 md:p-4"
      >
        Next
      </button>
    </div>
  );
};

export default CustomCarousel;
