import React from "react";

const Box = ({isOverLaping}) => {
    console.log("isOver",isOverLaping);
    
  return (
    <div className={isOverLaping ? `w-full flex justify-center relative -mt-16 z-20 my-10` : `w-full flex justify-center relative z-20 my-10`}>
      <div className="max-w-[400px] h-auto bg-[rgb(168,214,255)] px-6 py-2 rounded-lg shadow-lg border-2 border-[rgb(23,42,68)]">
        <h1 className="text-center font-semibold text-lg md:text-xl text-[rgb(23,42,68)]">Lorem ipsum dolor sit amet.</h1>
        <p className="py-2 text-md text-[rgb(50,74,103)] text-center mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          inventore sit blanditiis provident. Ea inventore aperiam laborum
          quaerat, voluptas modi!
        </p>
        <div className="flex justify-center items-center -mt-4 absolute ml-[90px]">
          {isOverLaping && <button className="bg-[rgb(254,254,254)] px-6 py-2 rounded-xl text-gray-700 shadow border-2 border-cyan-900 font-semibold">
             Connect with us
          </button>}
        </div>
      </div>
    </div>
  );
};

export default Box;
