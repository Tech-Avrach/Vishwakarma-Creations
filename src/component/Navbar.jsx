// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Dribbble, Instagram, Facebook, Phone } from 'lucide-react';
import { Link } from "react-router-dom";

// Professional Animated Hamburger Menu Component
const AnimatedHamburger = ({ isOpen, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`lg:hidden relative w-12 h-12 rounded-xl bg-slate-700/50 hover:bg-slate-600/70 backdrop-blur-sm border border-slate-600/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 group ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-5 h-4 flex flex-col justify-between">
          {/* Top line */}
          <span 
            className={`block h-0.5 bg-white rounded-full transition-all duration-300 ease-out origin-center group-hover:bg-emerald-300 ${
              isOpen 
                ? 'rotate-45 translate-y-[7px] w-5' 
                : 'rotate-0 translate-y-0 w-5'
            }`}
          />
          {/* Middle line */}
          <span 
            className={`block h-0.5 bg-white rounded-full transition-all duration-200 ease-out group-hover:bg-emerald-300 ${
              isOpen 
                ? 'opacity-0 scale-x-0' 
                : 'opacity-100 scale-x-100 w-4'
            }`}
          />
          {/* Bottom line */}
          <span 
            className={`block h-0.5 bg-white rounded-full transition-all duration-300 ease-out origin-center group-hover:bg-emerald-300 ${
              isOpen 
                ? '-rotate-45 -translate-y-[7px] w-5' 
                : 'rotate-0 translate-y-0 w-3'
            }`}
          />
        </div>
      </div>
      
      {/* Subtle pulse animation when open */}
      {isOpen && (
        <div className="absolute inset-0 rounded-xl bg-emerald-400/10 animate-pulse" />
      )}
    </button>
  );
};

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
              {/* <Dribbble size={16} className="cursor-pointer hover:scale-110 transition-transform" /> */}
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

            {/* Professional Animated Mobile Menu Button */}
            <AnimatedHamburger 
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="z-60 relative"
            />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transform transition-all duration-500 ease-out z-50 shadow-2xl border-l border-slate-700/50 ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          {/* Close button positioned at top-right */}
          <div className="absolute top-6 right-6 z-10">
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full bg-slate-700/50 hover:bg-red-500/20 border border-slate-600/30 hover:border-red-400/50 transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-red-400/50"
            >
              <svg className="w-4 h-4 text-slate-300 group-hover:text-red-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile menu content - full height */}
          <div className="h-screen flex flex-col justify-center px-8 bg-gradient-to-b from-transparent to-slate-900/50">
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-slate-300 hover:text-white hover:bg-slate-700/30 rounded-xl px-4 py-4 transition-all duration-300 font-medium text-lg border border-transparent hover:border-slate-600/30 backdrop-blur-sm group`}
                  onClick={() => setIsOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isOpen ? 'slideInFromRight 0.5s ease-out forwards' : 'none'
                  }}
                >
                  <span className="flex items-center justify-between">
                    {item.name}
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
              
              <div className="pt-8">
                <button 
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
                  onClick={() => setIsOpen(false)}
                >
                  Request a quote
                </button>
              </div>
            </div>
          </div>
        </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
      </nav>
    </>
  );
};

export default Navbar;