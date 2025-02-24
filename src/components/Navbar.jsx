import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsFillLightningFill } from 'react-icons/bs';
import { MdClose, MdEngineering, MdMenu, MdSolarPower } from 'react-icons/md';
import { FaBook, FaEnvelope, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-green-700 to-green-900 text-white sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="/">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center space-x-2"
                        >
                            <BsFillLightningFill className="text-2xl text-yellow-400" />
                            <span className="text-xl font-bold">E-Power Construction</span>
                        </motion.div>
                    </Link>

                    <button 
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/about" className="flex items-center space-x-2 hover:text-green-200 transition-colors">
                            <FaSun />
                            <span>About</span>
                        </Link>
                        <Link to="/innovator" className="flex items-center space-x-2 hover:text-green-200 transition-colors">
                            <MdEngineering />
                            <span>Innovator</span>
                        </Link>
                        <Link to="/services" className="flex items-center space-x-2 hover:text-green-200 transition-colors">
                            <MdSolarPower />
                            <span>Showcase</span>
                        </Link>
                        <Link to="/resources" className="flex items-center space-x-2 hover:text-green-200 transition-colors">
                            <FaBook />
                            <span>Resources</span>
                        </Link>
                        <Link to="/contact" className="flex items-center space-x-2 hover:text-green-200 transition-colors">
                            <FaEnvelope />
                            <span>Contact</span>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden py-4 space-y-4"
                    >
                        <Link to="/about" className="block py-2 hover:text-green-200">About</Link>
                        <Link to="/innovator" className="block py-2 hover:text-green-200">Innovator</Link>
                        <Link to="/services" className="block py-2 hover:text-green-200">Showcase</Link>
                        <Link to="/resources" className="block py-2 hover:text-green-200">Resources</Link>
                        <Link to="/contact" className="block py-2 hover:text-green-200">Contact</Link>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;