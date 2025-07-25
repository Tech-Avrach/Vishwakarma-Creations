import React from 'react';
import { Building, MapPin, Calendar, Eye, ArrowRight, Star, Award } from 'lucide-react';

const ProjectHeader = () => {
  return (
    <div className="relative min-h-[80vh] flex overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B3D2E 0%, #0B3D2E 40%, #1a5a42 100%)' }}>
      {/* Background Pattern - Emerald themed */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, #D4AF37 0%, #B76E79 50%, transparent 100%)' }} />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, #D4AF37 0%, #0B3D2E 50%, transparent 100%)' }} />
        <div className="absolute top-1/2 right-10 w-64 h-64 rounded-full blur-2xl" style={{ background: 'radial-gradient(circle, #B76E79 0%, #D4AF37 50%, transparent 100%)' }} />
        <div className="absolute top-32 right-32 w-72 h-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 100%)' }} />
        <div className="absolute bottom-32 right-20 w-60 h-60 rounded-full blur-2xl" style={{ background: 'radial-gradient(circle, #B76E79 0%, transparent 100%)' }} />
      </div>
      
      {/* Left Side - Content Section */}
      <div className="relative w-full lg:w-1/2 flex items-center">
        <div className="relative z-10 w-full px-8 lg:px-16 py-16">
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full border" style={{ 
              backgroundColor: 'rgba(212, 175, 55, 0.15)', 
              borderColor: 'rgba(212, 175, 55, 0.4)' 
            }}>
              <Building className="w-5 h-5 mr-3" style={{ color: '#D4AF37' }} />
              <span className="text-base font-semibold" style={{ color: '#D4AF37' }}>Featured Projects</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight" style={{ color: '#F7F6F2' }}>
                Creating
                <span className="block text-transparent bg-clip-text" style={{ 
                  backgroundImage: 'linear-gradient(90deg, #D4AF37 0%, #B76E79 50%, #D4AF37 100%)' 
                }}>
                  Architectural
                </span>
                <span className="block" style={{ color: '#F7F6F2' }}>
                  Masterpieces
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl leading-relaxed max-w-lg" style={{ color: '#F7F6F2' }}>
                Discover our portfolio of exceptional designs that blend innovation, sustainability, and timeless elegance to create spaces that inspire.
              </p>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold" style={{ color: '#F7F6F2' }}>250+</div>
                <div className="text-sm uppercase tracking-wide font-semibold" style={{ color: '#D4AF37' }}>Projects Delivered</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold" style={{ color: '#F7F6F2' }}>50+</div>
                <div className="text-sm uppercase tracking-wide font-semibold" style={{ color: '#B76E79' }}>Awards Won</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                className="group px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-3"
                style={{ 
                  backgroundColor: '#B76E79',
                  color: '#F7F6F2',
                  boxShadow: '0 20px 25px -5px rgba(183, 110, 121, 0.25)'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#A55B6B'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#B76E79'}
              >
                <span>View All Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button 
                className="group px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border-2 flex items-center justify-center space-x-3"
                style={{ 
                  backgroundColor: 'transparent',
                  color: '#D4AF37',
                  borderColor: '#D4AF37'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                  e.target.style.borderColor = '#B76E79';
                  e.target.style.color = '#B76E79';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.borderColor = '#D4AF37';
                  e.target.style.color = '#D4AF37';
                }}
              >
                <Eye className="w-5 h-5" />
                <span>Take a Tour</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-10 w-4 h-4 rounded-full animate-float" style={{ backgroundColor: 'rgba(212, 175, 55, 0.4)' }}></div>
          <div className="absolute bottom-1/3 left-20 w-3 h-3 rounded-full animate-float animation-delay-1000" style={{ backgroundColor: 'rgba(183, 110, 121, 0.4)' }}></div>
          <div className="absolute top-2/3 left-32 w-5 h-5 rounded-full animate-float animation-delay-2000" style={{ backgroundColor: 'rgba(212, 175, 55, 0.4)' }}></div>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="hidden lg:flex w-1/2 items-center justify-center p-8">
        {/* Centered Image Container */}
        <div className="relative w-full max-w-2xl h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          {/* Main Image */}
          <img 
            src="https://blog.trianglehomez.com/wp-content/uploads/2020/11/Praveen_06-copy-25-1000x563.jpg"
            alt="Vishwakarma Creations Project Showcase"
            className="w-full h-full object-cover"
          />
          
          {/* Image Overlay */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11, 61, 46, 0.8) 0%, transparent 50%, rgba(11, 61, 46, 0.3) 100%)' }}></div>

          {/* Floating Project Info Card */}
          <div 
            className="absolute bottom-4 left-4 right-4 backdrop-blur-lg rounded-xl p-4 border"
            style={{ 
              backgroundColor: 'rgba(247, 246, 242, 0.15)',
              borderColor: 'rgba(212, 175, 55, 0.3)'
            }}
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4AF37' }}></div>
                  <span className="text-xs font-medium uppercase tracking-wider" style={{ color: '#F7F6F2' }}>Featured Project</span>
                </div>
                
                <h3 className="text-lg font-bold" style={{ color: '#F7F6F2' }}>Modern Villa Design</h3>
                
                <div className="flex items-center space-x-4" style={{ color: '#5C5C5C' }}>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs">Mumbai, India</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span className="text-xs">2023</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3" style={{ color: '#D4AF37' }} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>

          {/* Corner Decorative Element */}
          <div 
            className="absolute top-4 right-4 px-3 py-2 rounded-lg shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"
            style={{ 
              background: 'linear-gradient(135deg, #D4AF37 0%, #B76E79 100%)',
              color: '#F7F6F2'
            }}
          >
            <div className="text-center">
              <div className="text-sm font-bold">2023</div>
              <div className="text-xs opacity-90">Latest</div>
            </div>
          </div>

          {/* Animated Border Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-16 h-0.5" style={{ background: 'linear-gradient(to right, #D4AF37, transparent)' }}></div>
            <div className="absolute top-0 left-0 w-0.5 h-16" style={{ background: 'linear-gradient(to bottom, #D4AF37, transparent)' }}></div>
            <div className="absolute bottom-0 right-0 w-16 h-0.5" style={{ background: 'linear-gradient(to left, #B76E79, transparent)' }}></div>
            <div className="absolute bottom-0 right-0 w-0.5 h-16" style={{ background: 'linear-gradient(to top, #B76E79, transparent)' }}></div>
          </div>
        </div>
      </div>

      {/* Mobile Image Section */}
      <div className="lg:hidden absolute inset-0 z-0">
        <img 
          src="https://blog.trianglehomez.com/wp-content/uploads/2020/11/Praveen_06-copy-25-1000x563.jpg"
          alt="Vishwakarma Creations Project Showcase"
          className="w-full h-full object-cover opacity-20"
        />
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

export default ProjectHeader;