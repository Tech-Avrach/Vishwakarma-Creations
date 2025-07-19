import React from 'react';
import { Building, MapPin, Calendar, Eye, ArrowRight, Star, Award } from 'lucide-react';

const ProjectHeader = () => {
  return (
    <div className="relative min-h-[80vh] flex overflow-hidden">
      {/* Left Side - Content Section */}
      <div className="relative w-full lg:w-1/2 bg-gradient-to-br from-slate-800 via-slate-700 to-emerald-900 flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-10 w-64 h-64 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 w-full px-8 lg:px-16 py-16">
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-emerald-600/20 rounded-full border border-emerald-400/30">
              <Building className="w-5 h-5 text-emerald-300 mr-3" />
              <span className="text-emerald-200 text-base font-semibold">Featured Projects</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Creating
                <span className="block text-transparent bg-gradient-to-r from-emerald-300 via-blue-300 to-purple-300 bg-clip-text">
                  Architectural
                </span>
                <span className="block text-white">
                  Masterpieces
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-lg">
                Discover our portfolio of exceptional designs that blend innovation, sustainability, and timeless elegance to create spaces that inspire.
              </p>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">250+</div>
                <div className="text-emerald-300 text-sm uppercase tracking-wide font-semibold">Projects Delivered</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">50+</div>
                <div className="text-blue-300 text-sm uppercase tracking-wide font-semibold">Awards Won</div>
              </div>
            </div>

            {/* Key Features */}
            {/* <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-emerald-400/20 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Premium Design Quality</h3>
                  <p className="text-slate-400 text-sm">Award-winning architectural solutions</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-blue-400/20 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Pan-India Presence</h3>
                  <p className="text-slate-400 text-sm">Projects across major cities</p>
                </div>
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-emerald-500/25 flex items-center justify-center space-x-3">
                <span>View All Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-white/20 hover:border-white/30 flex items-center justify-center space-x-3">
                <Eye className="w-5 h-5" />
                <span>Take a Tour</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-10 w-4 h-4 bg-emerald-400/40 rounded-full animate-float"></div>
          <div className="absolute bottom-1/3 left-20 w-3 h-3 bg-blue-400/40 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute top-2/3 left-32 w-5 h-5 bg-yellow-400/40 rounded-full animate-float animation-delay-2000"></div>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div className="hidden lg:block relative w-1/2">
        {/* Main Image */}
        <div className="absolute inset-0">
          <img 
            src="https://blog.trianglehomez.com/wp-content/uploads/2020/11/Praveen_06-copy-25-1000x563.jpg"
            alt="Vishwakarma Creations Project Showcase"
            className="w-full h-full object-cover"
          />
          
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
        </div>

        {/* Floating Project Info Card */}
        <div className="absolute bottom-8 left-8 right-8 bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                <span className="text-white/90 text-sm font-medium uppercase tracking-wider">Featured Project</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white">Modern Villa Design</h3>
              
              <div className="flex items-center space-x-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Mumbai, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">2023</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
              ))}
            </div>
          </div>
        </div>

        {/* Corner Decorative Element */}
        <div className="absolute top-8 right-8 bg-gradient-to-br from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
          <div className="text-center">
            <div className="text-lg font-bold">2023</div>
            <div className="text-xs opacity-90">Latest</div>
          </div>
        </div>

        {/* Animated Border Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-emerald-400 to-transparent"></div>
          <div className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-emerald-400 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-32 h-1 bg-gradient-to-l from-blue-400 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1 h-32 bg-gradient-to-t from-blue-400 to-transparent"></div>
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