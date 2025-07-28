import React, { useState } from 'react';
import { Play, X, Award, Users, Building2 } from 'lucide-react';

const AboutHeader = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  const handleScroll100vh = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #0B3D2E, #1a5a3e, #0B3D2E)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl" style={{ background: 'linear-gradient(to bottom right, rgba(212, 175, 55, 0.15), rgba(183, 110, 121, 0.15))' }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl" style={{ background: 'linear-gradient(to bottom right, rgba(183, 110, 121, 0.15), rgba(212, 175, 55, 0.15))' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-2xl" style={{ background: 'rgba(212, 175, 55, 0.08)' }}></div>
      </div>

      <div className="relative container mx-auto px-6 py-16 lg:py-24 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Text Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full border" style={{ backgroundColor: 'rgba(11, 61, 46, 0.3)', borderColor: 'rgba(212, 175, 55, 0.4)' }}>
                <Building2 className="w-4 h-4 mr-2" style={{ color: '#D4AF37' }} />
                <span className="text-sm font-medium" style={{ color: '#F7F6F2' }}>About Vishwakarma Creations</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight" style={{ color: '#F7F6F2' }}>
                Crafting Spaces that
                <span className="block" style={{ color: '#D4AF37' }}>
                  Inspire Life
                </span>
              </h1>
              
              <p className="text-xl leading-relaxed" style={{ color: '#F7F6F2', opacity: 0.9 }}>
                We are passionate architects and designers who believe that exceptional spaces have the power to transform lives. With over a decade of experience, we blend innovative design with sustainable practices to create environments that are both beautiful and functional.
              </p>
            </div>

            {/* Stats - Commented out in original, keeping structure */}
            {/* <div className="grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold mb-1" style={{ color: '#F7F6F2' }}>150+</div>
                <div className="text-sm uppercase tracking-wide" style={{ color: '#D4AF37' }}>Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold mb-1" style={{ color: '#F7F6F2' }}>12+</div>
                <div className="text-sm uppercase tracking-wide" style={{ color: '#D4AF37' }}>Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold mb-1" style={{ color: '#F7F6F2' }}>98%</div>
                <div className="text-sm uppercase tracking-wide" style={{ color: '#D4AF37' }}>Client Satisfaction</div>
              </div>
            </div> */}

            {/* Key Points - Commented out in original, keeping structure */}
            {/* <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#B76E79' }} />
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#F7F6F2' }}>Award-Winning Designs</h3>
                  <p className="text-sm" style={{ color: '#F7F6F2', opacity: 0.7 }}>Recognized for innovation in residential and commercial architecture</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#B76E79' }} />
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#F7F6F2' }}>Client-Centric Approach</h3>
                  <p className="text-sm" style={{ color: '#F7F6F2', opacity: 0.7 }}>Every project begins with understanding your unique vision and needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Building2 className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#B76E79' }} />
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#F7F6F2' }}>End-to-End Solutions</h3>
                  <p className="text-sm" style={{ color: '#F7F6F2', opacity: 0.7 }}>From concept to completion, we handle every aspect of your project</p>
                </div>
              </div>
            </div> */}

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                className="group px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
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
                onClick={handleScroll100vh}
              >
                Discover Our Story
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>

          {/* Right Video Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Thumbnail */}
              <div className="relative aspect-[4/3]" style={{ background: 'linear-gradient(to bottom right, #5C5C5C, #333333)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80" 
                  alt="Architectural design showcase"
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                {!isVideoPlaying && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button
                      onClick={handlePlayVideo}
                      className="group relative backdrop-blur-sm rounded-full p-6 transition-all duration-300 transform hover:scale-110 border"
                      style={{ 
                        backgroundColor: 'rgba(212, 175, 55, 0.2)', 
                        borderColor: 'rgba(212, 175, 55, 0.4)' 
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(212, 175, 55, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'rgba(212, 175, 55, 0.2)';
                      }}
                    >
                      <Play className="w-12 h-12 ml-1 transition-colors duration-300" style={{ color: '#D4AF37' }} fill="currentColor" />
                      
                      {/* Animated Ring */}
                      <div className="absolute inset-0 rounded-full border-2 animate-pulse" style={{ borderColor: 'rgba(212, 175, 55, 0.6)' }}></div>
                      <div className="absolute inset-0 rounded-full border-2 animate-ping" style={{ borderColor: 'rgba(212, 175, 55, 0.4)' }}></div>
                    </button>
                  </div>
                )}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-lg shadow-lg" style={{ backgroundColor: '#D4AF37', color: '#333333' }}>
                <div className="text-sm font-semibold">Watch Our Story</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-8 -left-8 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}></div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(183, 110, 121, 0.1)' }}></div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <button
              onClick={handleCloseVideo}
              className="absolute top-4 right-4 backdrop-blur-sm p-2 rounded-full transition-all duration-300 z-10"
              style={{ 
                backgroundColor: 'rgba(212, 175, 55, 0.2)', 
                color: '#F7F6F2' 
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(212, 175, 55, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(212, 175, 55, 0.2)';
              }}
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Video Player Placeholder */}
            <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#333333' }}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#D4AF37' }}>
                  <Play className="w-8 h-8 ml-1" style={{ color: '#333333' }} fill="currentColor" />
                </div>
                <p className="text-lg mb-2" style={{ color: '#F7F6F2' }}>Company Introduction Video</p>
                <p className="text-sm" style={{ color: '#5C5C5C' }}>Video player would be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutHeader;