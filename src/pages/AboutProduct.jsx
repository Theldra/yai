import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaSun } from 'react-icons/fa';
import { MdWaterDrop } from 'react-icons/md';


const AboutProduct = () => {

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-green-800 mb-4">Our Solution</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Innovative price-sharing model making solar energy accessible to all.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <FaSun className="text-3xl text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Solar Home Systems</h3>
            <p className="text-gray-600">
              Affordable solar solutions for household energy needs through our unique price-sharing model.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <MdWaterDrop className="text-3xl text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Irrigation Systems</h3>
            <p className="text-gray-600">
              Solar-powered irrigation solutions for farmer cooperatives ensuring year-round cultivation.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <FaLeaf className="text-3xl text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-600">
              Reducing reliance on fossil fuels while promoting environmental sustainability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;