import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaYoutube, FaMicrophone, FaBell, FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdOutlineVideoCall } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-14 px-4 sm:px-8 md:px-14 text-center bg-[#212121] opacity-95 sticky top-0 z-50">
      <div className="flex gap-4 sm:gap-6 items-center text-2xl text-white">
        <GiHamburgerMenu />
        <div className="flex items-center gap-2">
          <FaYoutube className="text-red-500 text-2xl" />
          <span className="text-xl font-medium hidden md:block">Youtube</span>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center relative">
        <form className="flex bg-zinc-900 items-center h-10 max-w-3xl rounded-full w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full text-xl bg-zinc-900 rounded-full focus:outline-none border-none px-4 text-white placeholder-white"
          />
          <button className="p-2">
            <CiSearch className="text-2xl font-bold text-white" />
          </button>
        </form>
        <FaMicrophone className="absolute right-4 text-xl text-white" />
      </div>
      <div className="flex gap-4 items-center text-xl text-zinc-500">
        <MdOutlineVideoCall className="text-3xl" />
        <div className="relative">
          <FaBell className="text-2xl" />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 text-white rounded-full px-1">9+</span>
        </div>
        <FaUserCircle className="text-4xl"
        />
    
      </div>
    </div>
  );
};

export default Navbar;
