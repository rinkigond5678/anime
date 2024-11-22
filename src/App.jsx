import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopList from "./components/TopList/TopList";
import BgImage from "./assets/images.jpeg";


import Feature from "./components/Feature/Feature";

import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Kids from "./components/Kids/Kids";








const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition:"center",
};

const App = () => {
  return (
    <div style={bgStyle}className="overflow-x-hidden">
      <div className="min-h-screen bg-black/70 backdrop-blur-3xl">
      <Navbar />
      <Hero />
      <About />
      <Kids />
      
      <TopList />
   
      <Feature />

    
      

      <Footer />
      
     
      </div>
    </div>
  
  );
    
  
};

export default App;