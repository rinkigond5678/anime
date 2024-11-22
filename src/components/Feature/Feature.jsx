import React from "react";
import Image from "../../assets/with.jpg";


const GymData =[
    {
        image:Image
        
    },
   
];



const TopList = () => {
  return (
    <div className="container py-14">
   
      <div className=" mb-4">
        <h1 className="text-3xl font-semibold text-white text-nowrap mb-3">Hot Right Now🔥</h1>
        
      </div>

      {/* Card section */}
      <div className="flex justify-between items-center space-x-4 gap-1">

      {GymData.map((item,index) => (
            <div key={index} className=" p-3 rounded-3xl hover:scale-110 transition duration-300">
                <img src={item.image} alt="" className="w-35 h-30 mx-auto object-cover rounded-xl" />
            

                
            </div>
                    
            
           
         ))}
        
        
      </div>
    </div>
  );
};

export default TopList;        