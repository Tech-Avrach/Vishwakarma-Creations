import React from 'react';
import { Home, Building, Palette, Settings } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-emerald-50 to-rose-50 py-16 lg:py-24">
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
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <div className="text-emerald-700 font-semibold text-sm">Since 2012</div>
              </div>
              
              {/* Bottom Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-6 -left-6 w-full h-full bg-gradient-to-br from-emerald-200/30 to-rose-200/30 rounded-2xl"></div>
            <div className="absolute -z-20 top-12 left-12 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-20 -bottom-6 -right-6 w-64 h-64 bg-rose-300/20 rounded-full blur-2xl"></div>
          </div>

          {/* Right Content Section */}
          <div className="space-y-8">
            
            {/* Header */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">🧱</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-800">
                  Who We Are
                </h2>
              </div>
              
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-rose-400 rounded-full mx-auto lg:mx-0"></div>
            </div>

            {/* Main Description */}
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-lg lg:text-xl text-slate-700 leading-relaxed">
                Vishwakarma Creations is a multidisciplinary design studio specializing in{' '}
                <span className="font-semibold text-emerald-700">Residential Architecture</span>,{' '}
                <span className="font-semibold text-emerald-700">Commercial Spaces</span>,{' '}
                <span className="font-semibold text-emerald-700">Interior Design</span>, and{' '}
                <span className="font-semibold text-emerald-700">Project Consultancy</span>.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                With a vision to create sustainable, aesthetic, and highly functional spaces, we combine{' '}
                <span className="font-semibold text-slate-800">artistic sensibility</span>,{' '}
                <span className="font-semibold text-slate-800">technical precision</span>, and{' '}
                <span className="font-semibold text-slate-800">client-centered thinking</span>.
              </p>
            </div>

            {/* Services Grid */}
            {/* <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <Home className="w-8 h-8 text-emerald-600 mb-3 group-hover:text-emerald-700 transition-colors duration-300" />
                <h3 className="font-semibold text-slate-800 mb-1">Residential</h3>
                <p className="text-sm text-slate-600">Architecture & Design</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <Building className="w-8 h-8 text-emerald-600 mb-3 group-hover:text-emerald-700 transition-colors duration-300" />
                <h3 className="font-semibold text-slate-800 mb-1">Commercial</h3>
                <p className="text-sm text-slate-600">Spaces & Planning</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <Palette className="w-8 h-8 text-emerald-600 mb-3 group-hover:text-emerald-700 transition-colors duration-300" />
                <h3 className="font-semibold text-slate-800 mb-1">Interior</h3>
                <p className="text-sm text-slate-600">Design & Execution</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <Settings className="w-8 h-8 text-emerald-600 mb-3 group-hover:text-emerald-700 transition-colors duration-300" />
                <h3 className="font-semibold text-slate-800 mb-1">Project</h3>
                <p className="text-sm text-slate-600">Consultancy (PMC)</p>
              </div>
            </div> */}

            {/* Core Values */}
            {/* <div className="bg-gradient-to-r from-emerald-50 to-rose-50 p-6 rounded-xl border border-emerald-100/50">
              <h3 className="font-semibold text-slate-800 mb-4 flex items-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                Our Foundation
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-emerald-600 font-bold text-lg mb-1">Artistic</div>
                  <div className="text-slate-600 text-sm">Sensibility</div>
                </div>
                <div className="text-center">
                  <div className="text-emerald-600 font-bold text-lg mb-1">Technical</div>
                  <div className="text-slate-600 text-sm">Precision</div>
                </div>
                <div className="text-center">
                  <div className="text-emerald-600 font-bold text-lg mb-1">Client-Centered</div>
                  <div className="text-slate-600 text-sm">Thinking</div>
                </div>
              </div>
            </div> */}

            {/* CTA Button */}
            <div className="pt-2 text-center lg:text-left">
              <button className="group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
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