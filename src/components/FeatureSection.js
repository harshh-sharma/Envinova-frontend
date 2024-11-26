import React from 'react'

const FeatureSection = () => {

    const features = [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
        "Feature 6",
        "Feature 7",
      ];

  return (
    <div className="my-16 px-6">
    {/* <div className="mb-8">
      <h2 className="text-3xl font-bold text-left text-gray-800">
        Our Features
      </h2>
    </div> */}

    <div className="flex flex-row gap-16">
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Key Features:</h3>
        <div className="space-y-4 overflow-y-auto max-h-[300px] scrollbar-hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-100 p-4 rounded-lg shadow-md"
            >
              <p className="text-lg font-medium text-gray-800">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1">
       <p>Lorem ipsum dolor sit amet.</p>
        <img
          src="https://images.pexels.com/photos/4629633/pexels-photo-4629633.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Gallery"
          className="w-full h-[300px] rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
  )
}

export default FeatureSection