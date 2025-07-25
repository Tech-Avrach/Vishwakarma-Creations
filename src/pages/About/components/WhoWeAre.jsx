import React from 'react';
import { Home, Building, Palette, Settings } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <div className="py-16 lg:py-24" style={{ backgroundColor: '#F7F6F2' }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Modern architectural design by Vishwakarma Creations"
                className="w-full aspect-[4/3] object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute top-6 left-6 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg" style={{ backgroundColor: 'rgba(247, 246, 242, 0.95)', color: '#0B3D2E' }}>
                <div className="font-semibold text-sm">Since 2012</div>
              </div>
              
              {/* Bottom Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-6 -left-6 w-full h-full rounded-2xl" style={{ background: 'linear-gradient(to bottom right, rgba(11, 61, 46, 0.1), rgba(183, 110, 121, 0.1))' }}></div>
            <div className="absolute -z-20 top-12 left-12 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}></div>
            <div className="absolute -z-20 -bottom-6 -right-6 w-64 h-64 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(183, 110, 121, 0.15)' }}></div>
          </div>

          {/* Right Content Section */}
          <div className="space-y-8">
            
            {/* Header */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(to bottom right, #D4AF37, #0B3D2E)' }}>
                  <span className="text-xl font-bold" style={{ color: '#F7F6F2' }}>🧱</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: '#333333' }}>
                  Who We Are
                </h2>
              </div>
              
              <div className="w-16 h-1 rounded-full mx-auto lg:mx-0" style={{ background: 'linear-gradient(to right, #D4AF37, #B76E79)' }}></div>
            </div>

            {/* Main Description */}
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-lg lg:text-xl leading-relaxed" style={{ color: '#333333' }}>
                Vishwakarma Creations is a multidisciplinary design studio specializing in{' '}
                <span className="font-semibold" style={{ color: '#0B3D2E' }}>Residential Architecture</span>,{' '}
                <span className="font-semibold" style={{ color: '#0B3D2E' }}>Commercial Spaces</span>,{' '}
                <span className="font-semibold" style={{ color: '#0B3D2E' }}>Interior Design</span>, and{' '}
                <span className="font-semibold" style={{ color: '#0B3D2E' }}>Project Consultancy</span>.
              </p>
              
              <p className="text-lg leading-relaxed" style={{ color: '#5C5C5C' }}>
                With a vision to create sustainable, aesthetic, and highly functional spaces, we combine{' '}
                <span className="font-semibold" style={{ color: '#333333' }}>artistic sensibility</span>,{' '}
                <span className="font-semibold" style={{ color: '#333333' }}>technical precision</span>, and{' '}
                <span className="font-semibold" style={{ color: '#333333' }}>client-centered thinking</span>.
              </p>
            </div>

            {/* Services Grid - Commented out in original, keeping structure with brand colors */}
            {/* <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="backdrop-blur-sm p-4 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 group" style={{ backgroundColor: 'rgba(247, 246, 242, 0.8)', borderColor: 'rgba(11, 61, 46, 0.1)' }}>
                <Home className="w-8 h-8 mb-3 group-hover:opacity-80 transition-colors duration-300" style={{ color: '#0B3D2E' }} />
                <h3 className="font-semibold mb-1" style={{ color: '#333333' }}>Residential</h3>
                <p className="text-sm" style={{ color: '#5C5C5C' }}>Architecture & Design</p>
              </div>
              
              <div className="backdrop-blur-sm p-4 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 group" style={{ backgroundColor: 'rgba(247, 246, 242, 0.8)', borderColor: 'rgba(11, 61, 46, 0.1)' }}>
                <Building className="w-8 h-8 mb-3 group-hover:opacity-80 transition-colors duration-300" style={{ color: '#0B3D2E' }} />
                <h3 className="font-semibold mb-1" style={{ color: '#333333' }}>Commercial</h3>
                <p className="text-sm" style={{ color: '#5C5C5C' }}>Spaces & Planning</p>
              </div>
              
              <div className="backdrop-blur-sm p-4 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 group" style={{ backgroundColor: 'rgba(247, 246, 242, 0.8)', borderColor: 'rgba(11, 61, 46, 0.1)' }}>
                <Palette className="w-8 h-8 mb-3 group-hover:opacity-80 transition-colors duration-300" style={{ color: '#0B3D2E' }} />
                <h3 className="font-semibold mb-1" style={{ color: '#333333' }}>Interior</h3>
                <p className="text-sm" style={{ color: '#5C5C5C' }}>Design & Execution</p>
              </div>
              
              <div className="backdrop-blur-sm p-4 rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 group" style={{ backgroundColor: 'rgba(247, 246, 242, 0.8)', borderColor: 'rgba(11, 61, 46, 0.1)' }}>
                <Settings className="w-8 h-8 mb-3 group-hover:opacity-80 transition-colors duration-300" style={{ color: '#0B3D2E' }} />
                <h3 className="font-semibold mb-1" style={{ color: '#333333' }}>Project</h3>
                <p className="text-sm" style={{ color: '#5C5C5C' }}>Consultancy (PMC)</p>
              </div>
            </div> */}

            {/* Core Values - Commented out in original, keeping structure with brand colors */}
            {/* <div className="p-6 rounded-xl border" style={{ background: 'linear-gradient(to right, rgba(11, 61, 46, 0.05), rgba(183, 110, 121, 0.05))', borderColor: 'rgba(11, 61, 46, 0.1)' }}>
              <h3 className="font-semibold mb-4 flex items-center" style={{ color: '#333333' }}>
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#D4AF37' }}></div>
                Our Foundation
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="font-bold text-lg mb-1" style={{ color: '#0B3D2E' }}>Artistic</div>
                  <div className="text-sm" style={{ color: '#5C5C5C' }}>Sensibility</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg mb-1" style={{ color: '#0B3D2E' }}>Technical</div>
                  <div className="text-sm" style={{ color: '#5C5C5C' }}>Precision</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg mb-1" style={{ color: '#0B3D2E' }}>Client-Centered</div>
                  <div className="text-sm" style={{ color: '#5C5C5C' }}>Thinking</div>
                </div>
              </div>
            </div> */}

            {/* CTA Button */}
            <div className="pt-2 text-center lg:text-left">
              <button 
                className="group px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ 
                  backgroundColor: '#B76E79', 
                  color: '#F7F6F2',
                  boxShadow: '0 10px 25px rgba(183, 110, 121, 0.25)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(183, 110, 121, 0.9)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#B76E79';
                }}
              >
                Explore Our Work
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;