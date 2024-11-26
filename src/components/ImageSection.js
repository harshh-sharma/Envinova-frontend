import React from "react";

const ImageSection = () => {
  return (
    <div
      className="w-full h-[400px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=600')",
      }}
    >
      {/* Optional Content over the Background */}
      <div className="flex items-center justify-center h-full bg-black/40 text-white flex-col gap-5">
        <h1 className="text-3xl md:text-4xl font-bold">Welcome to Our Section</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, ipsum. Voluptatum illum cum facere adipisci praesentium officia id consectetur a.</p>
        <button className="bg-white text-black px-4 py-1 rounded-lg">Know more</button>
      </div>
    </div>
  );
};

export default ImageSection;
