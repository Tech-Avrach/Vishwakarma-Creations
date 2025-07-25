import React, { useEffect, useState } from 'react';
import { Award, Users, Eye, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reasons = [
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "A decade of multidisciplinary expertise across residential, commercial, and interior design projects."
    },
    {
      icon: Eye,
      title: "Innovative Portfolio",
      description: "A curated collection of successful, cutting-edge projects that showcase our creative vision and technical excellence."
    },
    {
      icon: Heart,
      title: "Client-Focused Process",
      description: "Meticulous attention to detail with a collaborative approach that puts your vision at the center of everything we do."
    },
    {
      icon: Users,
      title: "Trusted by All",
      description: "From homeowners to developers and commercial brands, we've built lasting relationships through quality and reliability."
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

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full border mb-6" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', borderColor: 'rgba(212, 175, 55, 0.3)' }}>
              <span className="text-sm font-medium" style={{ color: '#0B3D2E' }}>Our Advantage</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#333333' }}>
              Why Choose
              <span className="block" style={{ color: '#0B3D2E' }}>
                Our Team?
              </span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#5C5C5C' }}>
              Experience the difference that expertise, innovation, and dedication make in bringing your architectural dreams to life
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
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
                    <h3 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: '#333333' }}>
                      {reason.title}
                    </h3>
                    
                    <p className="leading-relaxed transition-colors duration-300 text-lg" style={{ color: '#5C5C5C' }}>
                      {reason.description}
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

          {/* Stats Section */}
          <div className="mt-20 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#D4AF37' }}>
                  10+
                </div>
                <p className="font-medium" style={{ color: '#5C5C5C' }}>Years Experience</p>
              </div>
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#D4AF37' }}>
                  200+
                </div>
                <p className="font-medium" style={{ color: '#5C5C5C' }}>Projects Completed</p>
              </div>
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#D4AF37' }}>
                  100%
                </div>
                <p className="font-medium" style={{ color: '#5C5C5C' }}>Client Satisfaction</p>
              </div>
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#D4AF37' }}>
                  24/7
                </div>
                <p className="font-medium" style={{ color: '#5C5C5C' }}>Support Available</p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
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
              Let's Discuss Your Project
              <span className="inline-block ml-3 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -z-10 top-8 -left-8 w-72 h-72 bg-[#0B3D2E]/5 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 -bottom-8 -right-8 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default WhyChooseUs;