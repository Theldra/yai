import React, { useEffect, useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import 'aos/dist/aos.css';
import logo from "../assets/images/repowers.png"
import Aos from 'aos';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    useScrollToTop();

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true
        });
    }, []);

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
            className={`transition-colors text-lg md:text-lg w-full text-center py-4 focus:outline-none focus-visible:bg-blue-700/50 rounded-lg ${
                isActive(to)
                    ? 'text-red-500 font-semibold' 
                    : 'text-white hover:text-blue-200' 
            }`}
            role="menuitem"
            aria-current={isActive(to) ? "page" : undefined}
        >
            {children}
        </Link>
    );

    return (
        <nav 
            className="bg-gradient-to-r from-blue-800 to-blue-900 text-white fixed w-full top-0 z-50 border-b-2 border-red-600"
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="container mx-auto px-4 relative">
                <div className="flex justify-between items-center py-4">
                    <Link 
                        to="/" 
                        onClick={handleClick}
                        className="focus:outline-none focus-visible:bg-blue-700/50 rounded-lg p-1"
                        aria-label="E-Powers Construction - Home"
                    >
                        <div 
                            data-aos="fade-right"
                            className="flex items-center space-x-3"
                        >
                            <img 
                                src={logo} 
                                alt="E-Power Construction Logo" 
                                className="h-10 md:h-16 w-auto"
                                width="64"
                                height="64"
                            />
                            <span className="text-xl md:text-xl font-bold text-white">
                                E-Powers
                                <span className="hidden md:inline"> Construction</span>
                            </span>
                        </div>
                    </Link>

                    <button 
                        className="md:hidden text-white hover:text-red-500 transition-colors z-50 p-2 focus:outline-none focus-visible:bg-blue-700/50 rounded-lg"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? <MdClose size={32} aria-hidden="true" /> : <MdMenu size={32} aria-hidden="true" />}
                    </button>

                    {/* Desktop Menu */}
                    <div 
                        className="hidden md:flex space-x-8" 
                        data-aos="fade-left"
                        role="menubar"
                        aria-label="Desktop navigation"
                    >
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/innovator">Innovator</NavLink>
                        <NavLink to="/showcase">Showcase</NavLink>
                        <NavLink to="/resources">Resources</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div 
                        id="mobile-menu"
                        className="fixed inset-0 top-[74px] bg-gradient-to-r from-blue-800 to-blue-900 z-40"
                        role="menu"
                        aria-label="Mobile navigation"
                    >
                        <div 
                            className="flex flex-col w-full h-full"
                            role="menubar"
                            aria-label="Mobile menu items"
                        >
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/innovator">Innovator</NavLink>
                            <NavLink to="/showcase">Showcase</NavLink>
                            <NavLink to="/resources">Resources</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;