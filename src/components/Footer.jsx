import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold text-primary mb-2">
              Gloria Dennis
            </div>
            <p className="text-sm">Software Developer</p>
          </div>
          
          <div className="mb-4 md:mb-0 text-center">
            <p className="flex items-center justify-center gap-1">
              Made with <FaHeart className="text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
          
          <div>
            <p className="text-sm">
              © {currentYear} Gloria Dennis. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>
            Technologies showcased: React, HTML5, CSS3, JavaScript, ASP.NET Core MVC, Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;