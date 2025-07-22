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

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-emerald-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0 bg-custom-pattern"></div>

</div>


      <div className="relative container mx-auto px-6 py-16 lg:py-24 lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Text Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-600/20 rounded-full border border-emerald-400/30">
                <Building2 className="w-4 h-4 text-emerald-300 mr-2" />
                <span className="text-emerald-200 text-sm font-medium">About Vishwakarma Creations</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Crafting Spaces that
                <span className="block text-transparent bg-gradient-to-r from-emerald-300 via-rose-300 to-emerald-400 bg-clip-text">
                  Inspire Life
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed">
                We are passionate architects and designers who believe that exceptional spaces have the power to transform lives. With over a decade of experience, we blend innovative design with sustainable practices to create environments that are both beautiful and functional.
              </p>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white mb-1">150+</div>
                <div className="text-sm text-emerald-300 uppercase tracking-wide">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white mb-1">12+</div>
                <div className="text-sm text-emerald-300 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-emerald-300 uppercase tracking-wide">Client Satisfaction</div>
              </div>
            </div> */}

            {/* Key Points */}
            {/* <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-rose-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Award-Winning Designs</h3>
                  <p className="text-slate-400 text-sm">Recognized for innovation in residential and commercial architecture</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-rose-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Client-Centric Approach</h3>
                  <p className="text-slate-400 text-sm">Every project begins with understanding your unique vision and needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Building2 className="w-5 h-5 text-rose-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">End-to-End Solutions</h3>
                  <p className="text-slate-400 text-sm">From concept to completion, we handle every aspect of your project</p>
                </div>
              </div>
            </div> */}

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                Discover Our Story
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>

          {/* Right Video Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Thumbnail */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-600 to-slate-800">
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
                      className="group relative bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-6 transition-all duration-300 transform hover:scale-110 border border-white/20"
                    >
                      <Play className="w-12 h-12 text-white ml-1 group-hover:text-emerald-200 transition-colors duration-300" fill="currentColor" />
                      
                      {/* Animated Ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-white/40 animate-pulse"></div>
                      <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"></div>
                    </button>
                  </div>
                )}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="text-sm font-semibold">Watch Our Story</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-8 -left-8 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <button
              onClick={handleCloseVideo}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Video Player Placeholder */}
            <div className="w-full h-full bg-slate-900 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
                <p className="text-white text-lg mb-2">Company Introduction Video</p>
                <p className="text-slate-400 text-sm">Video player would be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutHeader;