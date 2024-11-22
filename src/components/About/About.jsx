import React from "react";
import Image from "../../assets/cc.jpg";
import Man from "../../assets/nu.jpg";
import Port from "../../assets/mm.jpg";
import ll from "../../assets/rr.jpg";
import pp from "../../assets/0o.jpg";
import yy from "../../assets/ea.jpg";
import tc from "../../assets/ss.jpg";
import drb from "../../assets/drb.jpg";
import jj from "../../assets/jj.jpg";
import nno from "../../assets/nno.jpg";

const GymData = [
  { image: ll, text: "Demon Slayer" },
  { image: Port, text: "Mushoku Tensei" },
  { image: nno, text: "Your Name" },
  { image: yy, text: "Spy-Family" },
  { image: jj, text: "Jujutsu Kaisen" },
  { image: pp, text: "One Piece" },
  { image: Image, text: "Bleach" },
  { image: Man, text: "Naruto" },
  { image: drb, text: "Dragon Ball Z " },
  { image: tc, text: "Suzume no Tojimari" },
];

const TopList = () => {
  return (
    <div className="container mx-auto py-14 px-4">
      {/* Header section */}
      <div className="mb-4">
        <h1 className="text-3xl font-semibold text-white mb-2">
          Trending in Anime⚡
        </h1>
        <p className="text-lg text-gray-400">
          Check out the latest trending anime!
        </p>
      </div>

      {/* Card section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {GymData.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-xl hover:scale-105 transition-all duration-300"
          >
            <img
              src={item.image}
              alt={`Image ${index + 1}`}
              className="w-full h-60 object-cover rounded-xl group-hover:opacity-80 transition-opacity duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-xl"></div>

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

export default TopList;
