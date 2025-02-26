import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsFillLightningFill } from 'react-icons/bs';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useScrollToTop();

    const handleClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-gradient-to-r from-green-700 to-green-900 text-white sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" onClick={handleClick}>
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
                        <Link to="/about" onClick={handleClick} className="hover:text-green-200 transition-colors">
                            About
                        </Link>
                        <Link to="/innovator" onClick={handleClick} className="hover:text-green-200 transition-colors">
                            Innovator
                        </Link>
                        <Link to="/showcase" onClick={handleClick} className="hover:text-green-200 transition-colors">
                            Showcase
                        </Link>
                        <Link to="/resources" onClick={handleClick} className="hover:text-green-200 transition-colors">
                            Resources
                        </Link>
                        <Link to="/contact" onClick={handleClick} className="hover:text-green-200 transition-colors">
                            Contact
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
                        <Link to="/about" onClick={handleClick} className="block py-2 hover:text-green-200">About</Link>
                        <Link to="/innovator" onClick={handleClick} className="block py-2 hover:text-green-200">Innovator</Link>
                        <Link to="/showcase" onClick={handleClick} className="block py-2 hover:text-green-200">Showcase</Link>
                        <Link to="/resources" onClick={handleClick} className="block py-2 hover:text-green-200">Resources</Link>
                        <Link to="/contact" onClick={handleClick} className="block py-2 hover:text-green-200">Contact</Link>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;