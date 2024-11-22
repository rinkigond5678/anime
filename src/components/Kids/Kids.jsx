import React from "react";
import Image from "../../assets/pff.webp";
import Man from "../../assets/dorea.jpg";
import Port from "../../assets/shi.jpg";
import ll from "../../assets/frozen.jpeg";
import pp from "../../assets/tj.jpeg";

const GymData = [
  { image: ll, text: "Frozen II"  },
  { image: Port, text: "Shinchan"  },
  { image: Man, text: "Doraemon" },
  { image: pp, text: "Tom and Jerry"  },
  { image: Image, text: "Phineas and Ferb"  },
];

const Kids = () => {
  return (
    <div className="container mx-auto py-2 px-4">
      {/* Header section */}
      <div className=" mb-6">
        <h1 className="text-3xl font-bold text-white mb-4 tracking-wide">
          For Kid's🤩
        </h1>
        
      </div>

      {/* Card section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {GymData.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={`Anime ${index + 1}`}
              className="w-full h-60 object-cover rounded-xl group-hover:opacity-90 transition-opacity duration-300"
            />
           
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-xl"></div>
             {/* Hover Text */}

             
             <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kids;
