import React, { useState } from "react";

const CustomCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, repudiandae.",
      contactLink: "#contact",
      productsLink: "#products",
    },
    {
      image: "https://images.pexels.com/photos/813269/pexels-photo-813269.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, repudiandae.",
      contactLink: "#contact",
      productsLink: "#products",
    },
    {
      image: "https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    <div className="relative">
      <div
        className="h-80 bg-cover bg-center"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      >
        <div className="flex items-center justify-start h-full bg-black bg-opacity-50">
          <div className="text-center text-white px-6 md:px-12">
            <div className="w-[500px] flex flex-wrap">
            <h2 className="text-lg md:text-2xl mb-4 text-[rgb(255,242,188)]">{slides[currentSlide].text}</h2>
            </div>
            <div className="space-x-4">
              <a
                href={""}
                className="inline-block text-xl px-4 py-2 bg-[rgb(254,254,254)] text-black rounded-lg"
              >
                Contact Us
              </a>
              <a
                href={""}
                className="inline-block text-xl px-4 rounded-xl py-2 bg-[rgb(18,214,255)]"
              >
                Products
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 p-2"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 p-2"
      >
        Next
      </button>
    </div>
  );
};

export default CustomCarousel;
