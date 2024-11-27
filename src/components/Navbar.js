import { getContents } from "@/store/slices/dataSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const options = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Features",
  },
  {
    id: 3,
    name: "Products",
  },
  {
    id: 4,
    name: "Projects",
  },
  {
    id: 5,
    name: "About us",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const data = useSelector(store => store?.eninova.contents);
  console.log("data--",data);
  

  const dispatch = useDispatch();

  const getAllContent = async () => {
      try {
         dispatch(getContents('6746caf59fa82535cc25fe0e'));
      } catch (error) {
        console.log(error);
      }
  }

  useEffect(() => {
    getAllContent();
  },[])

  return (
    <div className="w-full bg-[rgb(254,254,254)] shadow-lg">
      {/* Main Navbar */}
      <div className="flex justify-between px-5 w-full h-[80px] items-center">
        {/* Logo */}
        <div>
          <h2 className="text-xl font-bold">Company Logo</h2>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>

        {/* Nav Links (Desktop View) */}
        <div className="hidden md:flex gap-5 list-none font-semibold">
          {options.map((item) => (
            <li key={item?.id} className="hover:text-blue-500 cursor-pointer">
              {item?.name}
            </li>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <button className="bg-black text-white border-2 font-semibold border-black rounded-lg px-4 py-1 hover:bg-white hover:text-black">
            Contact us
          </button>
        </div>
      </div>

      {/* Mobile Menu (Shown when menu is toggled) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col gap-3 p-5 list-none font-semibold">
            {options.map((item) => (
              <li
                key={item?.id}
                className="hover:text-blue-500 cursor-pointer"
              >
                {item?.name}
              </li>
            ))}
          </ul>
          <div className="p-5">
            <button className="w-full bg-black text-white border-2 font-semibold border-black rounded-lg px-4 py-1 hover:bg-white hover:text-black">
              Contact us
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
