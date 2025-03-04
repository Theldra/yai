import React, { useEffect, useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import 'aos/dist/aos.css';
import logo from "../assets/images/epowers.png"
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
            className={`transition-colors text-xl md:text-2xl w-full text-center py-4 ${
                isActive(to)
                    ? 'text-red-500 font-semibold' 
                    : 'text-white hover:text-blue-200' 
            }`}
        >
            {children}
        </Link>
    );

    return (
        <nav className="bg-gradient-to-r from-blue-800 to-blue-900 text-white fixed w-full top-0 z-50 border-b-2 border-red-600">
            <div className="container mx-auto px-4 relative">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" onClick={handleClick}>
                        <div 
                            data-aos="fade-right"
                            className="flex items-center space-x-3"
                        >
                            <img 
                                src={logo} 
                                alt="E-Power Construction Logo" 
                                className="h-12 md:h-16 w-auto" // Responsive logo size
                            />
                            <span className="text-xl md:text-3xl font-bold text-white">
                                E-Powers
                                <span className="hidden md:inline"> Construction</span>
                            </span>
                        </div>
                    </Link>

                    <button 
                        className="md:hidden text-white hover:text-red-500 transition-colors z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <MdClose size={32} /> : <MdMenu size={32} />}
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8" data-aos="fade-left">
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
                        className="fixed inset-0 top-[74px] bg-gradient-to-r from-blue-800 to-blue-900 z-40"
                    >
                        <div className="flex flex-col w-full h-full">
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