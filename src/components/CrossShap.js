import React from "react";

const CrossShapeComponent = () => {
  return (
    <div className="flex flex-col mt-5">
      {/* Heading */}
      <div className="w-full justify-center items-center py-5">
        <h2 className="text-center text-lg md:text-xl font-semibold">
          Know more
        </h2>
      </div>

      {/* Main Container */}
      <div className="px-10">
        <div className="bg-orange-500 main-container relative">
          {/* Shape 1 */}
          <div className="flex justify-between w-full items-center py-16 shape1 absolute ml-20">
           
          </div>

          {/* Shape 2 */}
          <div className="shape2 flex flex-col justify-center items-center">
            {/* <img
              src="https://via.placeholder.com/100"
              alt="Placeholder"
              className="w-20 h-20 mb-4 rounded-full"
            />
            <p className="text-center text-gray-800 font-medium text-lg">
              Shape 2 Content
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrossShapeComponent;
