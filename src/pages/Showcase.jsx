import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaSun, FaUsers } from 'react-icons/fa';
import { BsFillLightningFill } from 'react-icons/bs';
import { MdSolarPower, MdWaterDrop } from 'react-icons/md';


const Showcase = () => {

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-green-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solar solutions for homes and agriculture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="bg-green-600 text-white p-6">
              <h3 className="text-2xl font-semibold mb-2">Household Solutions</h3>
              <p>Affordable solar energy for every home</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <FaSun className="text-green-600" />
                  <span>Solar panel installation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <BsFillLightningFill className="text-green-600" />
                  <span>Battery storage systems</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaUsers className="text-green-600" />
                  <span>Community power sharing</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="bg-green-600 text-white p-6">
              <h3 className="text-2xl font-semibold mb-2">Agricultural Solutions</h3>
              <p>Solar-powered irrigation systems</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <MdWaterDrop className="text-green-600" />
                  <span>Irrigation systems</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaLeaf className="text-green-600" />
                  <span>Sustainable farming</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MdSolarPower className="text-green-600" />
                  <span>Solar pump solutions</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;