import React from "react";

const OurExperts = () => {
  const experts = [
    {
      name: "John Doe",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
      info: "Senior Software Engineer with 10+ years of experience in web development.",
    },
    {
      name: "Jane Smith",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      info: "UI/UX Designer with a passion for creating intuitive digital experiences.",
    },
  ];

  return (
    <div className="w-full p-10">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Our Experts
      </h1>

      {/* Experts Container */}
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {experts.map((expert, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-[300px] p-4"
          >
            {/* Profile Image */}
            <div className="flex justify-center mt-4">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow"
              />
            </div>

            {/* Profile Details */}
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-gray-800 mt-4">{expert.name}</h2>
              <p className="text-gray-600 mt-2 text-sm">{expert.info}</p>
              {/* <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
                View Profile
              </button> */}
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-center underline my-4 text-gray-800 font-semibold">Know more</h2>
    </div>
  );
};

export default OurExperts;
