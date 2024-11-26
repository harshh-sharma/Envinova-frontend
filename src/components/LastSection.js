import React from "react";

const LastSection = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      image: "https://img.icons8.com/ios-filled/50/000000/linkedin.png",
      url: "https://www.linkedin.com",
    },
    {
      name: "Instagram",
      image: "https://img.icons8.com/ios-filled/50/000000/instagram-new.png",
      url: "https://www.instagram.com",
    },
    {
      name: "X (Twitter)",
      image: "https://img.icons8.com/ios-filled/50/000000/twitter--v1.png",
      url: "https://www.twitter.com",
    },
  ];

  return (
    <div className="w-full bg-gray-100 p-10">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Stay Connected
        </h1>
        <p className="text-gray-600 mt-2">
          Follow us on our social platforms to stay updated.
        </p>
      </div>

      {/* Social Links Section */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-10">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            {/* Social Icon */}
            <img
              src={social.image}
              alt={social.name}
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover hover:scale-110 transition-transform duration-300"
            />
            {/* Social Name */}
            <p className="mt-2 text-gray-700 font-medium">{social.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LastSection;
