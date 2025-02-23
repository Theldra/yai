import React from 'react';
import { motion } from 'framer-motion';
import { MdEngineering } from 'react-icons/md';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';


const AboutInnovator = () => {
  return (
    <section id="innovator" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-green-100 w-48 h-48 rounded-full flex items-center justify-center">
              <MdEngineering className="text-6xl text-green-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-4">Aramani Tawiah</h2>
              <p className="text-gray-600 mb-4">
                A visionary innovator from Sekondi, Western Region, dedicated to bringing sustainable 
                energy solutions to rural communities through innovative price-sharing models and 
                solar-powered systems.
              </p>
              <div className="flex space-x-4">
                <FaLinkedin className="text-green-600 text-xl cursor-pointer hover:text-green-700" />
                <FaTwitter className="text-green-600 text-xl cursor-pointer hover:text-green-700" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutInnovator;