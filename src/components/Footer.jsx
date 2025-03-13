import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/images/repowers.png';

const Footer = () => {
  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 2:00 PM' },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Logo and Description */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2">
              <img 
                src={logo} 
                alt="E-Power Construction Logo" 
                className="h-10 w-auto"
              />
              <span className="text-lg font-bold">E-Powers Construction</span>
            </div>
            <p className="text-blue-200 text-base leading-relaxed">
              Leading the way in innovative solar energy solutions, electrical installations, and sustainable power systems for residential, commercial, and industrial clients in Ghana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
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
                    className="text-blue-200 hover:text-red-400 transition-colors duration-300 text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Business Hours</h3>
            <ul className="space-y-2">
              {businessHours.map((schedule, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <FaClock className="text-red-500 text-base" />
                  <div>
                    <p className="text-blue-200 font-medium text-base">{schedule.day}</p>
                    <p className="text-blue-200 text-base">{schedule.hours}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-red-500 text-base" />
                <span className="text-blue-200 text-base">+233 (0) 592 812 035</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-red-500 text-base" />
                <span className="text-blue-200 text-base">info@epowerconstruction.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-red-500 text-base" />
                <span className="text-blue-200 text-base">Sekondi, Western Region, Ghana</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-3">
              {[
                { icon: <FaFacebookF />, url: "https://www.facebook.com/share/1FJzgYA6FU/?mibextid=wwXIfr" },
                { icon: <FaXTwitter />, url: "https://x.com/epowersgh?s=21" },
                { icon: <FaInstagram />, url: "https://www.instagram.com/epowersconstruction1?igsh=dTdvOWg2MTV6MGdn&utm_source=qr" },
                { icon: <FaTiktok />, url: "https://www.tiktok.com/@epowers_?_t=ZM-8uFJyCHeUj9&_r=1" },
                { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/arahamani-tawiah-a91ba1196?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 p-2 rounded-full hover:bg-red-500 transition-colors duration-300"
                >
                  <span className="text-white text-lg">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-6 pt-4 text-center text-base text-blue-200">
          &copy; {new Date().getFullYear()} E-Powers Construction. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
