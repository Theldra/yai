import React, { useEffect, useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import 'aos/dist/aos.css';
import logo from "../assets/images/e-power.png"
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
            className={`transition-colors ${
                isActive(to)
                    ? 'text-red-500 font-semibold' 
                    : 'text-white hover:text-blue-200' 
            }`}
        >
            {children}
        </Link>
    );

    return (
        <nav className="bg-gradient-to-r from-blue-800 to-blue-900 text-white sticky top-0 z-50 border-b-2 border-red-600"> {/* Changed gradient and added red border */}
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" onClick={handleClick}>
                        <div 
                            data-aos="fade-right"
                            className="flex items-center space-x-2"
                        >
                            <img 
                                src={logo} 
                                alt="E-Power Construction Logo" 
                                className="h-12 w-auto" 
                            />
                            <span className="text-xl font-bold text-white">E-Powers Construction</span>
                        </div>
                    </Link>

                    <button 
                        className="md:hidden text-white hover:text-red-500 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6" data-aos="fade-left">
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
                        data-aos="fade-down"
                        className="md:hidden py-4 space-y-4 border-t border-blue-700"
                    >
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/innovator">Innovator</NavLink>
                        <NavLink to="/showcase">Showcase</NavLink>
                        <NavLink to="/resources">Resources</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;