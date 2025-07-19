import React from 'react';
import { Award, Users, Building2, Sparkles, ArrowRight, Star } from 'lucide-react';

const ServiceHeader = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-emerald-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-2xl" />
      </div>

      <div className="relative container mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          
          {/* Left Text Section */}
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-emerald-600/20 rounded-full border border-emerald-400/30">
                <Building2 className="w-5 h-5 text-emerald-300 mr-3" />
                <span className="text-emerald-200 text-base font-semibold">Our Premium Services</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Transforming
                <span className="block text-transparent bg-gradient-to-r from-emerald-300 via-blue-300 to-purple-300 bg-clip-text mt-2">
                  Dreams into Reality
                </span>
              </h1>
              
              <p className="text-2xl text-slate-300 leading-relaxed">
                At Vishwakarma Creations, our services are tailored to turn ideas into iconic, high-performing spaces. From sketch to structure, we guide our clients through every stage with creativity, clarity, and craftsmanship.
              </p>
            </div>

            {/* Key Points */}
            {/* <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-emerald-400/20 shadow-sm hover:shadow-md hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Award-Winning Designs</h3>
                  <p className="text-slate-300">Recognized for innovation in residential and commercial architecture with industry-leading creativity.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-blue-400/20 shadow-sm hover:shadow-md hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Client-Centric Approach</h3>
                  <p className="text-slate-300">Every project begins with understanding your unique vision and transforming it into exceptional reality.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-400/20 shadow-sm hover:shadow-md hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">End-to-End Solutions</h3>
                  <p className="text-slate-300">From concept to completion, we handle every aspect of your project with precision and care.</p>
                </div>
              </div>
            </div> */}

            {/* CTA Button */}
            <div className="pt-6">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-800 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-200 flex items-center space-x-2">
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-sm text-emerald-300 uppercase tracking-wide font-semibold">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-sm text-blue-300 uppercase tracking-wide font-semibold">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-sm text-purple-300 uppercase tracking-wide font-semibold">Client Satisfaction</div>
              </div>
            </div> */}
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="relative">
              {/* Golden Border Container - now with darker tones */}
              <div className="relative p-2 bg-gradient-to-br from-yellow-400/80 via-yellow-500/80 to-amber-500/80 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                {/* Inner Image Container */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-800 shadow-inner">
                  <img 
                    src="/serviceHero.png" 
                    alt="Vishwakarma Creations Services Showcase"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  
                  {/* Image Overlay - darker overlay for dark theme */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/5"></div>
                </div>

                {/* Golden Shine Effect - adjusted for dark theme */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-300/30 via-transparent to-amber-400/30 pointer-events-none"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5" fill="currentColor" />
                  <span className="font-bold text-lg">Premium Services</span>
                </div>
              </div>

              {/* Quality Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-2xl shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span className="font-bold text-lg">Quality Assured</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements - adjusted for dark theme */}
            <div className="absolute -z-10 top-12 -left-12 w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-12 -right-12 w-96 h-96 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-full blur-3xl"></div>
            
            {/* Floating Particles - brighter colors to stand out on dark background */}
            <div className="absolute top-16 right-16 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-32 left-8 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 left-4 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-75"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements Background - adjusted for dark theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-6 h-6 bg-emerald-400/40 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-20 w-4 h-4 bg-blue-400/40 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-5 h-5 bg-yellow-400/40 rounded-full animate-float animation-delay-2000"></div>
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