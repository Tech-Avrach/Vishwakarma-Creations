import React from 'react';
import { Award, Users, Building2, Sparkles, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceHeader = () => {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #0B3D2E, #333333, #0B3D2E)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(212, 175, 55, 0.3)' }} />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(183, 110, 121, 0.3)' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }} />
      </div>

      <div className="relative container mx-auto px-6 py-16 lg:py-24 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          
          {/* Left Text Section */}
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full border" style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)', borderColor: 'rgba(212, 175, 55, 0.4)' }}>
                <Building2 className="w-5 h-5 mr-3" style={{ color: '#D4AF37' }} />
                <span className="text-base font-semibold" style={{ color: '#F7F6F2' }}>Our Premium Services</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight" style={{ color: '#F7F6F2' }}>
                Transforming
                <span className="block mt-2" style={{ color: '#D4AF37' }}>
                  Dreams into Reality
                </span>
              </h1>
              
              <p className="text-2xl leading-relaxed" style={{ color: '#F7F6F2' }}>
                At Vishwakarma Creations, our services are tailored to turn ideas into iconic, high-performing spaces. From sketch to structure, we guide our clients through every stage with creativity, clarity, and craftsmanship.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button 
                className="px-8 py-4 rounded-full font-bold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-xl"
                style={{ 
                  backgroundColor: '#B76E79', 
                  color: '#F7F6F2',
                  boxShadow: '0 20px 40px rgba(183, 110, 121, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#D4AF37';
                  e.target.style.boxShadow = '0 25px 50px rgba(212, 175, 55, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#B76E79';
                  e.target.style.boxShadow = '0 20px 40px rgba(183, 110, 121, 0.3)';
                }}
                onClick={() => scrollTo({ top: window.innerHeight, behavior: 'smooth' })} // Smooth scroll to services section
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="relative">
              {/* Golden Border Container */}
              <div className="relative p-2 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500" style={{ background: 'linear-gradient(to bottom right, #D4AF37, #B76E79)' }}>
                {/* Inner Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-inner" style={{ backgroundColor: '#333333' }}>
                  <img 
                    src="/serviceHero.png" 
                    alt="Vishwakarma Creations Services Showcase"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11, 61, 46, 0.4), transparent, rgba(247, 246, 242, 0.1))' }}></div>
                </div>

                {/* Golden Shine Effect */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ background: 'linear-gradient(to bottom right, rgba(212, 175, 55, 0.3), transparent, rgba(183, 110, 121, 0.3))' }}></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 px-6 py-3 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300" style={{ background: 'linear-gradient(to right, #0B3D2E, #D4AF37)', color: '#F7F6F2' }}>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5" fill="currentColor" />
                  <span className="font-bold text-lg">Premium Services</span>
                </div>
              </div>

              {/* Quality Badge */}
              <div className="absolute -bottom-6 -left-6 px-6 py-3 rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300" style={{ background: 'linear-gradient(to right, #B76E79, #0B3D2E)', color: '#F7F6F2' }}>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span className="font-bold text-lg">Quality Assured</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-12 -left-12 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }}></div>
            <div className="absolute -z-10 -bottom-12 -right-12 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(183, 110, 121, 0.2)' }}></div>
            
            {/* Floating Particles */}
            <div className="absolute top-16 right-16 w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: '#D4AF37' }}></div>
            <div className="absolute bottom-32 left-8 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#B76E79' }}></div>
            <div className="absolute top-1/3 left-4 w-4 h-4 rounded-full animate-ping opacity-75" style={{ backgroundColor: '#D4AF37' }}></div>
          </div>
        </div>
      </div>

      {/* Floating Elements Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-6 h-6 rounded-full animate-float" style={{ backgroundColor: 'rgba(212, 175, 55, 0.4)' }}></div>
        <div className="absolute bottom-1/4 right-20 w-4 h-4 rounded-full animate-float animation-delay-1000" style={{ backgroundColor: 'rgba(183, 110, 121, 0.4)' }}></div>
        <div className="absolute top-3/4 left-1/3 w-5 h-5 rounded-full animate-float animation-delay-2000" style={{ backgroundColor: 'rgba(212, 175, 55, 0.4)' }}></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default ServiceHeader;