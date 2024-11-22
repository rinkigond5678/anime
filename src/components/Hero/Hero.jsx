import React, { useState, useEffect } from "react";
import Image from "../../assets/spy-family.webp";
import www from "../../assets/ani.jpg";
import stres from "../../assets/anime girl.jpg";
import full from "../../assets/one-piece.jpg";
import jo from "../../assets/anim.jpg";

const GymData = [
  {
    image: Image,
    desc: "Most loved and Watched Anime",
  },
  {
    image: stres,
    desc: "Japanese - Anime - - U/A 16+",
  },
  {
    image: www,
    desc: "2 New Episodes Daily Now In Hindi",
  },
  {
    image: full,
    desc: "News Episodes Daily In Hindi",
  },
  {
    image: jo,
    desc:"Available In Hindi",
  },
];

const TopList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === GymData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  const currentItem = GymData[currentIndex];

  return (
    <div className="container py-1">
      <div className="relative bg-white/0 p-3 rounded-3xl">
        {/* Image with text overlay */}
        <div className="relative mb-6">
          <img
            src={currentItem.image}
            alt=""
            className="w-full h-auto mx-auto object-contain rounded-2xl"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h6 className="text-3xl font-semibold text-white mb-1">
              NEW EPISODES
            </h6>
            <h2 className="text-4xl font-semibold text-white">
              <span className="text-red-700">EVERY</span> SUNDAY
            </h2>
            <h3 className="text-white/75">{currentItem.desc}</h3>
            <div className="flex gap-4 items-center mt-4">
              <button className="bg-red-700 text-white py-2 px-4   rounded-full">
                Watch Now
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopList;
