import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="py-4 bg-black">
      <div className="container flex justify-between items-center">
        {/* Title section */}
        <div>
          <p className=" text-white font-semibold text-3xl">
            ANIME🎥</p> 
            <p><span className="text-red-800 font-semibold  text-2xl"> WATCHER</span>
          </p>
        </div>

        
        <div className="hidden md:flex justify-center items-center gap-6">
          <ul className="flex gap-8">
            <li className="hover:border-b-2 border-red-800 uppercase font-mons text-white/75 text-nowrap">
              Home
            </li>
            <li className="hover:border-b-2 border-red-800 uppercase font-mons text-white/75 text-nowrap">
              Trending Anime
            </li>
            <li className="hover:border-b-2 border-red-800 uppercase font-mons text-white/75 text-nowrap">
              Connect with Us
            </li>
            
          </ul>
        </div>

      
        <div className="flex md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <FaBars className="w-8 h-8" />
          </button>
        </div>
      </div>

    
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-black py-4">
          <ul className="flex flex-col gap-4">
            <li className="hover:border-b-2 border-red-800 uppercase font-mons text-white/75 text-nowrap">
              Home
            </li>
            <li className="hover:border-b-2 border-red-800 uppercase font-mons text-white/75 text-nowrap">
            Trending Anime
            </li>
            <li className="hover:border-b-2 border-red-800 uppercase font-mons text-white/75 text-nowrap">
            Connect with Us
            </li>
            
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
