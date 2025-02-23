import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative h-screen bg-green-900 text-white flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <motion.div 
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Powering Rural Communities Through Solar Innovation
        </h1>
        <p className="text-xl mb-8">
          Bringing affordable and sustainable energy solutions to households and farmers across Ghana.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-yellow-400 text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;