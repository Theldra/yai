import React from 'react';
import { BsFillLightningFill } from 'react-icons/bs';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BsFillLightningFill className="text-2xl text-yellow-400" />
              <span className="text-xl font-bold">E-Power Construction</span>
            </div>
            <p className="text-green-200 text-sm">
              Innovative solar solutions for rural communities and agricultural development in Ghana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Products', 'Showcase', 'Resources', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-green-200 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaPhone className="text-yellow-400" />
                <span className="text-green-200">+233 (0) XXX XXX XXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-400" />
                <span className="text-green-200">info@epowerconstruction.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-yellow-400" />
                <span className="text-green-200">Sekondi, Western Region, Ghana</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-800 mt-8 pt-8 text-center text-sm text-green-200">
          &copy; {new Date().getFullYear()} E-Power Construction. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;