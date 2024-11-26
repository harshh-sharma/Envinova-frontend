import React from "react";
import ContactUs from "./Contactus";
import GetInTouch from "./GetInTouch";

const GradientSection = () => {
  return (
    <div className="w-full p-10 bg-gradient-to-r from-[rgb(168,214,255)]  to-[rgb(254,254,254)]">
      {/* Contact Us Component */}
      <ContactUs />

      {/* Get In Touch Component */}
      <GetInTouch />
    </div>
  );
};

export default GradientSection;
