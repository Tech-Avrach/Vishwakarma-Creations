import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const AboutUsSnapshot = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-24 px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-100 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-100 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-100 rounded-full opacity-15 blur-xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-emerald-50 rounded-full border border-emerald-200 shadow-sm">
            <Sparkles className="w-5 h-5 text-emerald-600 mr-2" />
            <span className="text-emerald-700 font-semibold text-sm tracking-wide">About Vishwakarma Creations</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
            Crafting Spaces That{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
              Transform Lives
            </span>
          </h2>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-8">
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent w-32"></div>
            <div className="mx-4 w-2 h-2 bg-emerald-400 rounded-full"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent w-32"></div>
          </div>
        </div>

        {/* Content Paragraphs */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed text-center font-light">
            At Vishwakarma Creations, we believe architecture is more than just buildings—it's about creating 
            environments that enhance human experiences. Our multidisciplinary approach combines 
            innovative design thinking with practical execution, delivering spaces that are both beautiful and functional.
          </p>
          
          <p className="text-lg lg:text-xl text-slate-600 leading-relaxed text-center font-light">
            From residential sanctuaries to commercial landmarks, we specialize in bringing your vision to life 
            through comprehensive design-build services, interior execution, and project management consultancy.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <button className="group relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-10 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <span>Learn More About Us</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-xl transition-opacity"></div>
          </button>
          
          <button className="group text-emerald-600 font-semibold hover:text-emerald-700 transition-all duration-300 flex items-center space-x-2 relative">
            <span className="relative">
              View Our Portfolio
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></div>
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Accent */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-2 text-slate-400">
            <div className="w-8 h-px bg-slate-300"></div>
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
            <div className="w-8 h-px bg-slate-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSnapshot;