import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaFacebookF } from 'react-icons/fa';

const AboutInnovator = () => {
  return (
    <section id="innovator" className="py-24 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div className="bg-green-100 w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-green-600">AT</span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">Aramani Tawiah</h2>
                  <p className="text-xl text-gray-600">Founder & Lead Innovator</p>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600 text-lg">
                  <span className="font-semibold">Age:</span> 18-35
                </p>
                <p className="text-gray-600 text-lg">
                  <span className="font-semibold">Location:</span> Sekondi, Western Region, Ghana
                </p>
                <p className="text-gray-600 text-lg">
                  <span className="font-semibold">Focus Area:</span> Renewable Energy & Agricultural Innovation
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mt-4">
                  A passionate innovator dedicated to bringing sustainable energy solutions to rural communities 
                  through innovative price-sharing models and solar-powered systems.
                </p>
              </div>
            </div>
            <div className="flex space-x-6 justify-center pt-6 border-t border-gray-200">
              <a 
                href="#" 
                className="text-green-600 hover:text-green-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-3xl" />
              </a>
              <a 
                href="#" 
                className="text-green-600 hover:text-green-700 transition-colors"
                aria-label="Twitter Profile"
              >
                <FaTwitter className="text-3xl" />
              </a>
              <a 
                href="#" 
                className="text-green-600 hover:text-green-700 transition-colors"
                aria-label="Facebook Profile"
              >
                <FaFacebookF className="text-3xl" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutInnovator;