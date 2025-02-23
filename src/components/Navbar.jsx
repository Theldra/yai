import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsFillLightningFill } from 'react-icons/bs';
import { MdClose, MdEngineering, MdMenu, MdSolarPower } from 'react-icons/md';
import { FaPhone, FaSun } from 'react-icons/fa';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-green-700 to-green-900 text-white sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center space-x-2"
                    >
                        <BsFillLightningFill className="text-2xl text-yellow-400" />
                        <span className="text-xl font-bold">E-Power Construction</span>
                    </motion.div>

                    <button 
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                    </button>

                    <div className="hidden md:flex space-x-8">
                        <a href="#about" className="flex items-center space-x-2 hover:text-green-200 transition-colors">
                            <FaSun />
                            <span>About</span>
                        </a>
                        <a href="#innovator" className="flex items-center space-x-2 hover:text-green-200 transition-colors">
                            <MdEngineering />
                            <span>Innovator</span>
                        </a>
                        <a href="#services" className="flex items-center space-x-2 hover:text-green-200 transition-colors">
                            <MdSolarPower />
                            <span>Showcase</span>
                        </a>
                        <a href="#contact" className="flex items-center space-x-2 hover:text-green-200 transition-colors">
                            <FaPhone />
                            <span>Contact</span>
                        </a>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden py-4 space-y-4"
                    >
                        <a href="#about" className="block py-2 hover:text-green-200">About</a>
                        <a href="#innovator" className="block py-2 hover:text-green-200">Innovator</a>
                        <a href="#services" className="block py-2 hover:text-green-200">Showcase</a>
                        <a href="#contact" className="block py-2 hover:text-green-200">Contact</a>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;