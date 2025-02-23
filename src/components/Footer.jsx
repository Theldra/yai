import React from 'react';
import { BsFillLightningFill } from 'react-icons/bs';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BsFillLightningFill className="text-yellow-400" />
            <span className="font-bold">E-Power Construction</span>
          </div>
          <div className="flex space-x-6">
            <FaLinkedin className="text-xl cursor-pointer hover:text-green-200" />
            <FaTwitter className="text-xl cursor-pointer hover:text-green-200" />
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-green-200">
          &copy; {new Date().getFullYear()} E-Power Construction. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;