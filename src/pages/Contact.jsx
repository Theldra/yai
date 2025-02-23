import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Contact Us</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <FaPhone className="text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+233 (0) XXX XXX XXX</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <FaEnvelope className="text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">contact@epowerconstruction.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <FaMapMarkerAlt className="text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">Sekondi, Western Region, Ghana</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;