import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="container mx-auto flex justify-between">
        {/* Column 1: About */}
        <div className="footer-column hover:text-red-400 transition duration-200">
          <h5 className="font-semibold text-2xl">Support</h5>
          <p className="text-gray-400">Help Center</p>
          <p className="text-gray-400">Terms of Use</p>
          <p className="text-gray-400">Privacy Policy</p>
        </div>

      

     
        <div className="footer-column hover:text-red-400 transition duration-200 ">
          <h5 className="font-semibold text-2xl">Connect With Us</h5>
          <p className="text-gray-400">📲 ▶️ 🌐</p>
         
        </div>

        {/* Column 4: Services */}
        <div className="footer-column hover:text-red-400 transition duration-200">
          <h5 className="font-semibold text-2xl">Download the App</h5>
          <ul className="text-gray-400 list-disc ml-5">
            <li>Google Play🔼</li>
            <li>App Stores🍏</li>
           
          </ul>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-gray-400">© 2024 Anime Watcher🎥. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
