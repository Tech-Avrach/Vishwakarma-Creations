import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUsSnapshot = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden" style={{ backgroundColor: '#F7F6F2' }}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-15 blur-2xl"
          style={{ backgroundColor: 'rgba(212, 175, 55, 0.3)' }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full opacity-15 blur-2xl"
          style={{ backgroundColor: 'rgba(183, 110, 121, 0.3)' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full opacity-10 blur-xl"
          style={{ backgroundColor: 'rgba(11, 61, 46, 0.3)' }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Badge */}
        <div className="text-center mb-16">
          <div 
            className="inline-flex items-center px-8 py-4 rounded-full border-2 shadow-lg"
            style={{ 
              backgroundColor: 'rgba(212, 175, 55, 0.1)',
              borderColor: '#D4AF37'
            }}
          >
            <Sparkles className="w-5 h-5 mr-3" style={{ color: '#D4AF37' }} />
            <span className="font-semibold text-lg tracking-wide" style={{ color: '#0B3D2E' }}>
              About Vishwakarma Creations
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-8" style={{ color: '#0B3D2E' }}>
            Crafting Spaces That{' '}
            <span style={{ color: '#D4AF37' }}>
              Transform Lives
            </span>
          </h2>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-10">
            <div 
              className="h-0.5 w-24"
              style={{ backgroundColor: '#D4AF37', opacity: 0.6 }}
            ></div>
            <div 
              className="mx-6 w-3 h-3 rounded-full"
              style={{ backgroundColor: '#D4AF37' }}
            ></div>
            <div 
              className="h-0.5 w-24"
              style={{ backgroundColor: '#D4AF37', opacity: 0.6 }}
            ></div>
          </div>
        </div>

        {/* Content Paragraphs */}
        <div className="max-w-5xl mx-auto space-y-10 mb-20">
          <p className="text-xl lg:text-2xl leading-relaxed text-center font-light" style={{ color: '#333333' }}>
            At Vishwakarma Creations, we believe architecture is more than just buildings—it's about creating 
            environments that enhance human experiences. Our multidisciplinary approach combines 
            innovative design thinking with practical execution, delivering spaces that are both beautiful and functional.
          </p>
          
          <p className="text-lg lg:text-xl leading-relaxed text-center font-light" style={{ color: '#5C5C5C' }}>
            From residential sanctuaries to commercial landmarks, we specialize in bringing your vision to life 
            through comprehensive design-build services, interior execution, and project management consultancy.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-12">
          {/* Primary CTA - Rose Gold */}
          <button 
            className="group relative px-12 py-5 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl"
            style={{ 
              backgroundColor: '#B76E79',
              color: '#F7F6F2'
            }}
          >
                <Link to={'/about'}>
                  <span className="text-lg">Learn More About Us</span>
                </Link>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          {/* Secondary Button - Transparent with Gold border */}
          <Link to={'/projects'}>
          <button 
            className="group font-semibold transition-all duration-300 flex items-center space-x-3 relative px-8 py-5 rounded-xl border-2"
            style={{ 
              color: '#D4AF37',
              borderColor: '#D4AF37',
              backgroundColor: 'transparent'
            }}
          >
            <span className="relative text-lg">
              View Our Portfolio
              <div 
                className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: '#D4AF37' }}
              ></div>
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          </Link>
        </div>

        {/* Bottom Accent */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center space-x-4">
            <div 
              className="w-12 h-px"
              style={{ backgroundColor: '#5C5C5C', opacity: 0.4 }}
            ></div>
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: '#D4AF37' }}
            ></div>
            <div 
              className="w-12 h-px"
              style={{ backgroundColor: '#5C5C5C', opacity: 0.4 }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSnapshot;