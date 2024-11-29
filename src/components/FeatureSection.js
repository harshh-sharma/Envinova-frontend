import React from 'react';
import { RiBattery2ChargeFill } from "react-icons/ri";
import { FaWifi } from "react-icons/fa";
import { FiTv } from "react-icons/fi";
import { HiSpeakerWave } from "react-icons/hi2";


const FeatureSection = () => {
  const features = [
    {
      feature:"Lorem ipsum dolor sit amet, consectetur adipisicing.",
      icon:<RiBattery2ChargeFill className='w-8 h-8'/>
    },
    {
      feature:"Lorem ipsum dolor sit amet, consectetur adipisicing.",
      icon:<FaWifi className='w-8 h-8'/>
    },
    {
      feature:"Lorem ipsum dolor sit amet, consectetur adipisicing.",
      icon:<FiTv className='w-8 h-8'/>
    },
    {
      feature:"Lorem ipsum dolor sit amet, consectetur adipisicing.",
      icon:<HiSpeakerWave className='w-8 h-8'/>
    },
    {
      feature:"Lorem ipsum dolor sit amet, consectetur adipisicing.",
      icon:<RiBattery2ChargeFill className='w-8 h-8'/>
    },
    {
      feature:"Lorem ipsum dolor sit amet, consectetur adipisicing.",
      icon:<RiBattery2ChargeFill className='w-8 h-8'/>
    }
  ];

  return (
    <div className="my-16 px-6">
      <div className="flex flex-row gap-16">
        {/* Left Section - Features List */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Key Features:</h3>
          <div className="space-y-4 pl-10 overflow-y-auto max-h-[300px] scrollbar-hidden">
  {features.map((item, index) => (
    <div
      key={index}
      className="flex gap-4 items-center p-4 bg-blue-100 rounded-full shadow-md border-2 border-gray-800  relative" // Using flex for alignment
    >
      {/* Icon inside a circle, positioned at the top left of the div */}
      <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full absolute left-[-18px]"> 
        {item?.icon}
      </div>

      {/* Feature Text */}
      <p className="text-lg font-medium text-gray-800 pl-10">{item?.feature}</p> {/* Added padding to shift text right */}
    </div>
  ))}
</div>

        </div>

        {/* Right Section - Image */}
        <div className="flex-1">
          <p className="mb-4 text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et harum deserunt similique?</p>
          <img
            src="https://images.pexels.com/photos/4629633/pexels-photo-4629633.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Gallery"
            className="w-full h-[300px] rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
