import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/images/e-power.png';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={logo} 
                alt="E-Power Construction Logo" 
                className="h-12 w-auto"
              />
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
              {[
                { name: 'About', path: '/about' },
                { name: 'Innovator', path: '/innovator' },
                { name: 'Showcase', path: '/showcase' },
                { name: 'Resources', path: '/resources' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-green-200 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-yellow-400" />
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

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/epowerconstruction"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-800 p-3 rounded-full hover:bg-green-700 transition-colors"
              >
                <FaFacebookF className="text-white text-xl" />
              </a>
              <a
                href="https://x.com/epowerconstruct"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-800 p-3 rounded-full hover:bg-green-700 transition-colors"
              >
                <FaXTwitter className="text-white text-xl" />
              </a>
              <a
                href="https://instagram.com/epowerconstruction"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-800 p-3 rounded-full hover:bg-green-700 transition-colors"
              >
                <FaInstagram className="text-white text-xl" />
              </a>
              <a
                href="https://tiktok.com/@epowerconstruction"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-800 p-3 rounded-full hover:bg-green-700 transition-colors"
              >
                <FaTiktok className="text-white text-xl" />
              </a>
            </div>
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