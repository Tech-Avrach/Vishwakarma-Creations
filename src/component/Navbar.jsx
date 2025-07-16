import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Dribbble, Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const VishwakarmaWebsite = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0 });

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Counter animation
  useEffect(() => {
    const targets = { projects: 150, clients: 200, years: 8 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const counters = Object.keys(targets).map(key => {
      const target = targets[key];
      const increment = target / steps;
      let current = 0;
      
      return setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounts(prev => ({ ...prev, [key]: target }));
          clearInterval(counters[Object.keys(targets).indexOf(key)]);
        } else {
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, stepTime);
    });

    return () => counters.forEach(clearInterval);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const heroImages = [
    'https://edwardgeorgelondon.com/wp-content/uploads/content/11-small-home-interior-design-ideas-3.jpg',
    'https://www.mydomaine.com/thmb/aGN3PPNUeEi27rCvkih2LTcZyhQ=/1754x0/filters:no_upscale():strip_icc()/decorating-tips-1-katie-hodges-design-midwilshire-1-cc8e4ad1f4ff4aae8205f2106e956b42.png', 
    'https://5.imimg.com/data5/SELLER/Default/2023/5/309216039/AT/IN/LK/189509502/bedroom-interior-designing-service.jpeg'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-emerald-900 text-white relative overflow-hidden">
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
          : 'bg-transparent'
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
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
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
              className="lg:hidden p-2 rounded-lg text-white hover:bg-gray-700 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-slate-800 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 pt-20">
            <div className="space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
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

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-slate-700/50 rounded-full text-sm border border-slate-600">
                <span className="text-gray-300">Architecture Design Excellence</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Modern Architecture
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                    Design
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  Rooted in innovative design principles, our collection blends minimalism with functionality, bringing elegance and precision into every corner of your space.
                </p>
              </div>

              {/* Stats */}
              <div className="flex space-x-12 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-400">
                    {counts.projects}+
                  </div>
                  <div className="text-gray-400 text-sm mt-2">Completed Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-400">
                    {counts.clients}+
                  </div>
                  <div className="text-gray-400 text-sm mt-2">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-400">
                    {counts.years}+
                  </div>
                  <div className="text-gray-400 text-sm mt-2">Years Experience</div>
                </div>
              </div>

              {/* CTA and Social */}
              <div className="flex items-center space-x-8 pt-8">
                <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-800 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-200 flex items-center space-x-2">
                  <span>Contact</span>
                  <ArrowRight size={20} />
                </button>
                
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                    <Dribbble size={20} />
                  </div>
                  <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                    <Instagram size={20} />
                  </div>
                  <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors cursor-pointer">
                    <Facebook size={20} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Images */}
            <div className="relative">
              <div className="flex space-x-4 h-96">
                {heroImages.map((src, index) => (
                  <div
                    key={index}
                    className={`relative rounded-2xl overflow-hidden transition-all duration-1000 ease-in-out ${
                      activeImage === index
                        ? 'flex-[2] opacity-100'
                        : 'flex-[0.8] opacity-70'
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Architecture ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                ))}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default VishwakarmaWebsite;