import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import logo from "../assets/images/e-power.png"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    useScrollToTop();

    const handleClick = () => {
        setIsMenuOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    const NavLink = ({ to, children }) => (
        <Link
            to={to}
            onClick={handleClick}
            className={`transition-colors ${
                isActive(to)
                    ? 'text-yellow-400 font-semibold'
                    : 'text-white hover:text-green-200'
            }`}
        >
            {children}
        </Link>
    );

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
                            <img 
                                src={logo} 
                                alt="E-Power Construction Logo" 
                                className="h-12 w-auto" 
                            />
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
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/innovator">Innovator</NavLink>
                        <NavLink to="/showcase">Showcase</NavLink>
                        <NavLink to="/resources">Resources</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden py-4 space-y-4"
                    >
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/innovator">Innovator</NavLink>
                        <NavLink to="/showcase">Showcase</NavLink>
                        <NavLink to="/resources">Resources</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;