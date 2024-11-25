import React from "react";

const BusinessComponent = () => {
  return (
    <div className="py-16 px-6 bg-gray-100">
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Business Solutions That Work for You
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Innovative services and features to drive success.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Large Vertical Div 1 */}
        <div
          className="h-[400px] bg-cover bg-center rounded-lg shadow-lg flex items-center justify-center text-white"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600')`,
          }}
        >
          <p className="text-xl font-semibold">Large Vertical Div 1</p>
        </div>

        {/* Large Vertical Div 2 */}
        <div
          className="h-[400px] bg-cover bg-center rounded-lg shadow-lg flex items-center justify-center text-white"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?auto=compress&cs=tinysrgb&w=600')`,
          }}
        >
          <p className="text-xl font-semibold">Large Vertical Div 2</p>
        </div>

        {/* Small Vertical Div 1 */}
        <div
          className="h-[250px] bg-cover bg-center rounded-lg shadow-lg flex items-center justify-center text-white"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/265125/pexels-photo-265125.jpeg?auto=compress&cs=tinysrgb&w=600')`,
          }}
        >
          <p className="text-xl font-semibold">Small Vertical Div 1</p>
        </div>

        {/* Small Vertical Div 2 */}
        <div
          className="h-[250px] bg-cover bg-center rounded-lg shadow-lg flex items-center justify-center text-white"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1181210/pexels-photo-1181210.jpeg?auto=compress&cs=tinysrgb&w=600')`,
          }}
        >
          <p className="text-xl font-semibold">Small Vertical Div 2</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessComponent;
