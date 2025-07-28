import React, { useEffect, useState } from 'react';
import { Home, Building, Palette, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Home,
      title: "Residential",
      subtitle: "Architecture & Design",
      description: "Creating dream homes that reflect your lifestyle and aspirations with innovative design solutions."
    },
    {
      icon: Building,
      title: "Commercial",
      subtitle: "Spaces & Planning",
      description: "Designing functional commercial spaces that enhance productivity and create lasting impressions."
    },
    {
      icon: Palette,
      title: "Interior",
      subtitle: "Design & Execution",
      description: "Transforming interiors with carefully curated aesthetics and optimal space utilization."
    },
    {
      icon: Settings,
      title: "Project",
      subtitle: "Consultancy (PMC)",
      description: "Comprehensive project management ensuring timely delivery and quality execution."
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#F7F6F2' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(183, 110, 121, 0.2)' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(11, 61, 46, 0.1)' }}></div>
      </div>

      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 w-full h-[120%] opacity-5"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: `url('https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full border mb-6" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', borderColor: 'rgba(212, 175, 55, 0.3)' }}>
              <span className="text-sm font-medium" style={{ color: '#0B3D2E' }}>Our Expertise</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#333333' }}>
              What We
              <span className="block" style={{ color: '#0B3D2E' }}>
                Specialize In
              </span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#5C5C5C' }}>
              From concept to completion, we deliver exceptional results across diverse architectural and design disciplines
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group relative backdrop-blur-sm border rounded-2xl p-8 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl"
                  style={{ 
                    backgroundColor: 'rgba(247, 246, 242, 0.9)', 
                    borderColor: 'rgba(11, 61, 46, 0.1)' 
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(11, 61, 46, 0.1)';
                  }}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110" style={{ background: 'linear-gradient(to bottom right, #D4AF37, #0B3D2E)' }}>
                      <Icon className="w-8 h-8" style={{ color: '#F7F6F2' }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 transition-colors duration-300" style={{ color: '#333333' }}>
                        {service.title}
                      </h3>
                      <p className="font-medium text-sm uppercase tracking-wide" style={{ color: '#D4AF37' }}>
                        {service.subtitle}
                      </p>
                    </div>
                    
                    <p className="leading-relaxed transition-colors duration-300" style={{ color: '#5C5C5C' }}>
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-opacity-100 transition-all duration-500" style={{ borderColor: 'transparent' }}></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(to bottom right, rgba(212, 175, 55, 0.05), rgba(183, 110, 121, 0.05))' }}></div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Link to="/contact">
            <button 
              className="group px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              style={{ 
                backgroundColor: '#B76E79', 
                color: '#F7F6F2',
                boxShadow: '0 20px 40px rgba(183, 110, 121, 0.25)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(183, 110, 121, 0.9)';
                e.target.style.boxShadow = '0 25px 50px rgba(183, 110, 121, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#B76E79';
                e.target.style.boxShadow = '0 20px 40px rgba(183, 110, 121, 0.25)';
              }}
            >
              Start Your Project Today
              <span className="inline-block ml-3 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -z-10 top-8 -left-8 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(11, 61, 46, 0.08)' }}></div>
      <div className="absolute -z-10 -bottom-8 -right-8 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(212, 175, 55, 0.08)' }}></div>
    </div>
  );
};

export default ServicesParallax;