// Navbar.jsx - Recolored for Vishwakarma Creations Brand
import React, { useState, useEffect } from 'react';
import { Dribbble, Instagram, Facebook, Phone } from 'lucide-react';
import { Link } from "react-router-dom";

// Professional Animated Hamburger Menu Component
const AnimatedHamburger = ({ isOpen, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`lg:hidden relative w-12 h-12 rounded-xl bg-gray-700/50 hover:bg-gray-600/70 backdrop-blur-sm border border-gray-600/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 group ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      style={{ backgroundColor: 'rgba(92, 92, 92, 0.5)' }} // Slate Gray background
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-5 h-4 flex flex-col justify-between">
          {/* Top line */}
          <span 
            className={`block h-0.5 rounded-full transition-all duration-300 ease-out origin-center ${
              isOpen 
                ? 'rotate-45 translate-y-[7px] w-5' 
                : 'rotate-0 translate-y-0 w-5'
            }`}
            style={{ backgroundColor: isOpen ? '#D4AF37' : '#F7F6F2' }} // Royal Gold when open, Off-White when closed
          />
          {/* Middle line */}
          <span 
            className={`block h-0.5 rounded-full transition-all duration-200 ease-out ${
              isOpen 
                ? 'opacity-0 scale-x-0' 
                : 'opacity-100 scale-x-100 w-4'
            }`}
            style={{ backgroundColor: '#F7F6F2' }} // Off-White
          />
          {/* Bottom line */}
          <span 
            className={`block h-0.5 rounded-full transition-all duration-300 ease-out origin-center ${
              isOpen 
                ? '-rotate-45 -translate-y-[7px] w-5' 
                : 'rotate-0 translate-y-0 w-3'
            }`}
            style={{ backgroundColor: isOpen ? '#D4AF37' : '#F7F6F2' }} // Royal Gold when open, Off-White when closed
          />
        </div>
      </div>
      
      {/* Subtle pulse animation when open */}
      {isOpen && (
        <div className="absolute inset-0 rounded-xl animate-pulse" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }} />
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
      {/* Top Bar - Using Royal Gold gradient */}
      <div className="px-4 py-2" style={{ background: 'linear-gradient(to right, #D4AF37, #B76E79)' }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm" style={{ color: '#F7F6F2' }}>
          <div className="flex items-center space-x-6">
            <span className="font-medium">Follow Us</span>
            <div className="flex space-x-3">
              <Instagram size={16} className="cursor-pointer hover:scale-110 transition-transform hover:opacity-80" />
              <Facebook size={16} className="cursor-pointer hover:scale-110 transition-transform hover:opacity-80" />
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

      {/* Navigation - Using Deep Emerald background */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-xl shadow-2xl' 
          : 'lg:backdrop-blur-none backdrop-blur-xl'
      }`} 
      style={{ 
        backgroundColor: scrolled ? 'rgba(11, 61, 46, 0.95)' : 'rgba(11, 61, 46, 0.95)', // Deep Emerald
        top: scrolled ? '0' : '40px' 
      }}>
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
                  <span style={{ color: '#F7F6F2' }}>Vishwakarma</span>
                  <span style={{ color: '#D4AF37' }}>Creations</span>
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="transition-colors duration-200 font-medium hover:scale-105 transform"
                  style={{ 
                    color: '#F7F6F2', // Off-White for links
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#D4AF37'} // Royal Gold on hover
                  onMouseLeave={(e) => e.target.style.color = '#F7F6F2'} // Back to Off-White
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button - Primary Rose Gold */}
              <Link to={'/contact'}>
              <div className="hidden lg:block">
              <button 
                className="px-6 py-3 rounded-full font-medium transition-all duration-300 border-2 hover:scale-105 transform focus:outline-none focus:ring-2"
                style={{ 
                  backgroundColor: 'transparent',
                  borderColor: '#B76E79', // Rose Gold border
                  color: '#B76E79' // Rose Gold text
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#B76E79'; // Rose Gold background on hover
                  e.target.style.color = '#F7F6F2'; // Off-White text on hover
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#B76E79';
                }}
              >
                Request a quote
              </button>
            </div>
              </Link>

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
          className={`lg:hidden fixed inset-0 backdrop-blur-sm z-40 transition-all duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          style={{ backgroundColor: 'rgba(51, 51, 51, 0.6)' }} // Charcoal Gray overlay
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed top-0 right-0 h-screen w-80 max-w-[85vw] transform transition-all duration-500 ease-out z-50 shadow-2xl border-l ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
        style={{ 
          background: 'linear-gradient(135deg, #0B3D2E 0%, #333333 50%, #0B3D2E 100%)', // Deep Emerald to Charcoal gradient
          borderLeftColor: 'rgba(212, 175, 55, 0.3)' // Royal Gold border
        }}>
          {/* Close button positioned at top-right */}
          <div className="absolute top-6 right-6 z-10">
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full border transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-2"
              style={{ 
                backgroundColor: 'rgba(92, 92, 92, 0.5)', // Slate Gray background
                borderColor: 'rgba(212, 175, 55, 0.3)', // Royal Gold border
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(183, 110, 121, 0.2)'; // Rose Gold hover
                e.target.style.borderColor = '#B76E79';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(92, 92, 92, 0.5)';
                e.target.style.borderColor = 'rgba(212, 175, 55, 0.3)';
              }}
            >
              <svg className="w-4 h-4 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                style={{ color: '#F7F6F2' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile menu content - full height */}
          <div className="h-screen flex flex-col justify-center px-8" 
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(11, 61, 46, 0.5))' }}>
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block rounded-xl px-4 py-4 transition-all duration-300 font-medium text-lg border group`}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: '#F7F6F2', // Off-White text
                    borderColor: 'transparent',
                    animationDelay: `${index * 50}ms`,
                    animation: isOpen ? 'slideInFromRight 0.5s ease-out forwards' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(92, 92, 92, 0.3)'; // Slate Gray hover background
                    e.target.style.borderColor = 'rgba(212, 175, 55, 0.3)'; // Royal Gold border on hover
                    e.target.style.color = '#D4AF37'; // Royal Gold text on hover
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.borderColor = 'transparent';
                    e.target.style.color = '#F7F6F2';
                  }}
                >
                  <span className="flex items-center justify-between">
                    {item.name}
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" 
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
              
              <div className="pt-8">
              <Link to={'/contact'}>
              <button 
                  className="w-full px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg transform hover:scale-[1.02] focus:outline-none focus:ring-2"
                  onClick={() => setIsOpen(false)}
                  style={{ 
                    background: 'linear-gradient(to right, #B76E79, #D4AF37)', // Rose Gold to Royal Gold gradient
                    color: '#F7F6F2', // Off-White text
                    boxShadow: '0 10px 25px rgba(183, 110, 121, 0.25)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(to right, #D4AF37, #B76E79)'; // Reverse gradient on hover
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(to right, #B76E79, #D4AF37)';
                  }}
                >
                  Request a quote
                </button>
              </Link>
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