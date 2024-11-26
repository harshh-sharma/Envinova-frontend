import React from "react";

const GetInTouch = () => {
  const contactDetails = [
    {
      image: "https://img.icons8.com/ios-filled/50/000000/home.png",
      title: "Home",
      description: "123 Main Street, Springfield, USA",
    },
    {
      image: "https://img.icons8.com/ios-filled/50/000000/phone.png",
      title: "Phone",
      description: "+1 (555) 123-4567",
    },
    {
      image: "https://img.icons8.com/ios-filled/50/000000/email.png",
      title: "Email",
      description: "contact@example.com",
    },
  ];

  return (
    <div className="w-full bg-transparent p-10">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Get In Touch
        </h1>
        <p className="text-gray-600 mt-2">
          We&apos;re here to help and answer any question you might have.
        </p>
      </div>

      {/* Contact Details Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {contactDetails.map((detail, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg w-full md:w-[300px]"
          >
            {/* Icon/Image */}
            <div>
              <img
                src={detail.image}
                alt={detail.title}
                className="w-12 h-12 object-cover"
              />
            </div>
            {/* Text */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {detail.title}
              </h2>
              <p className="text-gray-600 text-sm mt-1">{detail.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center items-center my-5">
        <img
          src="https://images.pexels.com/photos/33153/raisting-sattelit-reception-signal.jpg?auto=compress&cs=tinysrgb&w=600"
          alt="Satellites"
          className="w-[500px] h-[300px] rounded-md border-2 border-gray-800 object-cover"
        />
      </div>

      {/* Button Section */}
      <div className="w-full flex justify-center items-center">
        <button className="px-6 py-2 rounded-2xl font-bold text-gray-800 border-2 border-gray-800">
          Get Quotation
        </button>
      </div>
    </div>
  );
};

export default GetInTouch;
