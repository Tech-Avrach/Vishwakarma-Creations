// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Dribbble, Instagram, Facebook, Phone } from 'lucide-react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-slate-800">
          <div className="flex items-center space-x-6">
            <span className="font-medium">Follow Us</span>
            <div className="flex space-x-3">
              <Dribbble size={16} className="cursor-pointer hover:scale-110 transition-transform" />
              <Instagram size={16} className="cursor-pointer hover:scale-110 transition-transform" />
              <Facebook size={16} className="cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="font-medium">Get 25% Off for All Architecture Services</span>
            <div className="flex items-center space-x-4 text-xs">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-800/95 backdrop-blur-xl shadow-2xl' 
          : 'bg-slate-800/95 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none'
      }`} style={{ top: scrolled ? '0' : '40px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.jpeg" 
                alt="Vishwakarma Creations Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="text-white">Vishwakarma</span>
                  <span className="text-yellow-400">Creations</span>
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button className="bg-transparent border-2 border-emerald-400 text-emerald-400 px-6 py-3 rounded-full font-medium hover:bg-emerald-400 hover:text-slate-800 transition-all duration-300">
                Request a quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-gray-700 transition-colors duration-200 z-60 relative"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-slate-900 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Mobile menu header */}
          <div className="flex justify-between items-center p-6 border-b bg-slate-900">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.jpeg" 
                alt="Vishwakarma Creations Logo" 
                className="w-8 h-8 object-contain"
              />
              <div>
                <h1 className="text-lg font-bold">
                  <span className="text-white">Vishwakarma</span>
                  <span className="text-yellow-400">Creations</span>
                </h1>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-white hover:bg-gray-700 transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile menu content */}
          <div className="p-6 bg-slate-900 h-[100vh]">
            <div className="space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium text-lg py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button 
                className="w-full bg-transparent border-2 border-emerald-400 text-emerald-400 px-6 py-3 rounded-full font-medium hover:bg-emerald-400 hover:text-slate-800 transition-all duration-300 mt-8"
                onClick={() => setIsOpen(false)}
              >
                Request a quote
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;