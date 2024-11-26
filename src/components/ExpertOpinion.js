import React from "react";

const ExpertOpinion = () => {
  return (
    <div>
    <div className="flex flex-col w-full items-center py-12 bg-gradient-to-r from-[rgb(168,214,255)]  to-[rgb(254,254,254)]">
      {/* Heading Section */}
      <div className="text-center text-white mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[rgb(50,74,103)]">
          Expert Opinions
        </h1>
        <p className="mt-4 text-md md:text-lg leading-relaxed font-bold">
          Discover insights from our experts on various topics, providing you with valuable knowledge and perspectives.
        </p>
      </div>

      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 md:px-20">
        {/* Image 1 */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
          <img
            src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Expert 1"
            className="w-44 h-44 object-cover mb-4 rounded-md"
          />
          {/* <h2 className="text-lg font-semibold text-gray-800">John Doe</h2>
          <p className="text-sm text-gray-600 mt-2 text-center">
            "Innovation and creativity are key to success."
          </p> */}
        </div>
        {/* Image 2 */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
          <img
            src="https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Expert 2"
            className="w-44 h-44 object-cover mb-4 rounded-md"
          />
          {/* <h2 className="text-lg font-semibold text-gray-800">Jane Smith</h2>
          <p className="text-sm text-gray-600 mt-2 text-center">
            "Technology is the bridge to the future."
          </p> */}
        </div>
        {/* Image 3 */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
          <img
            src="https://images.pexels.com/photos/3665442/pexels-photo-3665442.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Expert 3"
            className="w-44 h-44 object-cover mb-4 rounded-md"
          />
          {/* <h2 className="text-lg font-semibold text-gray-800">Alice Brown</h2>
          <p className="text-sm text-gray-600 mt-2 text-center">
            "Collaboration fosters growth and success."
          </p> */}
        </div>
        {/* Image 4 */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6">
          <img
            src="https://images.pexels.com/photos/1432675/pexels-photo-1432675.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Expert 4"
            className="w-44 h-44 object-cover rounded-md mb-4"
          />
          {/* <h2 className="text-lg font-semibold text-gray-800">Mark Wilson</h2>
          <p className="text-sm text-gray-600 mt-2 text-center">
            "Learning is the foundation of leadership."
          </p> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ExpertOpinion;
