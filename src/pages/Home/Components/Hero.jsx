import React, { useState, useEffect } from 'react';
import { ArrowRight, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [counts, setCounts] = useState({ projects: 0, clients: 0, years: 0 });

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

  const heroImages = [
    'https://edwardgeorgelondon.com/wp-content/uploads/content/11-small-home-interior-design-ideas-3.jpg',
    'https://www.mydomaine.com/thmb/aGN3PPNUeEi27rCvkih2LTcZyhQ=/1754x0/filters:no_upscale():strip_icc()/decorating-tips-1-katie-hodges-design-midwilshire-1-cc8e4ad1f4ff4aae8205f2106e956b42.png', 
    'https://5.imimg.com/data5/SELLER/Default/2023/5/309216039/AT/IN/LK/189509502/bedroom-interior-designing-service.jpeg'
  ];

  return (
    <div className="relative pt-32 pb-20" style={{ backgroundColor: '#0B3D2E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm border" 
                 style={{ 
                   backgroundColor: 'rgba(212, 175, 55, 0.1)', 
                   borderColor: '#D4AF37',
                   color: '#D4AF37'
                 }}>
              <span>Architecture Design Excellence</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#F7F6F2' }}>
                Modern Architecture
                <br />
                <span style={{ color: '#D4AF37' }}>
                  Design
                </span>
              </h1>
              
              <p className="text-xl leading-relaxed max-w-lg" style={{ color: '#F7F6F2', opacity: 0.8 }}>
                Rooted in innovative design principles, our collection blends minimalism with functionality, bringing elegance and precision into every corner of your space.
              </p>
            </div>

            {/* Stats */}
            <div className="flex space-x-12 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: '#D4AF37' }}>
                  {counts.projects}+
                </div>
                <div className="text-sm mt-2" style={{ color: '#F7F6F2', opacity: 0.7 }}>Completed Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: '#D4AF37' }}>
                  {counts.clients}+
                </div>
                <div className="text-sm mt-2" style={{ color: '#F7F6F2', opacity: 0.7 }}>Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: '#D4AF37' }}>
                  {counts.years}+
                </div>
                <div className="text-sm mt-2" style={{ color: '#F7F6F2', opacity: 0.7 }}>Years Experience</div>
              </div>
            </div>

            {/* CTA and Social */}
            <div className="flex items-center space-x-8 pt-8">
              {/* Primary CTA Button - Rose Gold */}
              <button 
                className="px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-200 flex items-center space-x-2"
                style={{ 
                  backgroundColor: '#B76E79', 
                  color: '#F7F6F2' 
                }}
              >
                <Link to={'/contact'}>
                  <span>Contact</span>
                </Link>
                <ArrowRight size={20} />
              </button>
              
              <div className="flex space-x-4">
                {/* Secondary Button Style - Transparent with Gold border */}
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
                  style={{ 
                    backgroundColor: 'transparent', 
                    border: '2px solid #D4AF37',
                    color: '#D4AF37'
                  }}
                >
                  <Instagram size={20} />
                </div>
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
                  style={{ 
                    backgroundColor: 'transparent', 
                    border: '2px solid #D4AF37',
                    color: '#D4AF37'
                  }}
                >
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
                  className={`relative rounded-2xl overflow-hidden transition-all duration-1000 ease-in-out border-2 ${
                    activeImage === index
                      ? 'flex-[2] opacity-100'
                      : 'flex-[0.8] opacity-70'
                  }`}
                  style={{ 
                    borderColor: activeImage === index ? '#D4AF37' : 'rgba(212, 175, 55, 0.3)'
                  }}
                >
                  <img
                    src={src}
                    alt={`Architecture ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: activeImage === index 
                        ? 'linear-gradient(to top, rgba(212, 175, 55, 0.2), transparent)'
                        : 'linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent)'
                    }}
                  />
                </div>
              ))}
            </div>
            
            {/* Decorative Elements - Gold and Rose Gold */}
            <div 
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full blur-xl"
              style={{ backgroundColor: 'rgba(212, 175, 55, 0.3)' }}
            />
            <div 
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full blur-xl"
              style={{ backgroundColor: 'rgba(183, 110, 121, 0.3)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;