import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            {/* Contact Information */}
            <div className="md:w-2/5 bg-green-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-600 p-3 rounded-full">
                    <FaPhoneAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-green-100">+233 (0) XXX XXX XXX</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-green-600 p-3 rounded-full">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-green-100">contact@epowerconstruction.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-600 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-green-100">Sekondi, Western Region, Ghana</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-green-600">
                <h3 className="font-semibold mb-6">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com/epowerconstruction" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-600 p-3 rounded-full hover:bg-green-500 transition-colors"
                  >
                    <FaFacebookF className="text-white text-xl" />
                  </a>
                  <a 
                    href="https://instagram.com/epowerconstruction" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-600 p-3 rounded-full hover:bg-green-500 transition-colors"
                  >
                    <FaInstagram className="text-white text-xl" />
                  </a>
                  <a 
                    href="https://x.com/epowerconstruct" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-600 p-3 rounded-full hover:bg-green-500 transition-colors"
                  >
                    <FaXTwitter className="text-white text-xl" />
                  </a>
                  <a 
                    href="https://tiktok.com/@epowerconstruction" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-600 p-3 rounded-full hover:bg-green-500 transition-colors"
                  >
                    <FaTiktok className="text-white text-xl" />
                  </a>
                  <a 
                    href="https://wa.me/233XXXXXXXXX" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-600 p-3 rounded-full hover:bg-green-500 transition-colors"
                  >
                    <FaWhatsapp className="text-white text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-3/5 p-8">
              <h2 className="text-3xl font-bold text-green-800 mb-8">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors font-semibold"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;