import React, { useEffect, useState } from 'react';
import { Award, Users, Eye, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reasons = [
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "A decade of multidisciplinary expertise across residential, commercial, and interior design projects."
    },
    {
      icon: Eye,
      title: "Innovative Portfolio",
      description: "A curated collection of successful, cutting-edge projects that showcase our creative vision and technical excellence."
    },
    {
      icon: Heart,
      title: "Client-Focused Process",
      description: "Meticulous attention to detail with a collaborative approach that puts your vision at the center of everything we do."
    },
    {
      icon: Users,
      title: "Trusted by All",
      description: "From homeowners to developers and commercial brands, we've built lasting relationships through quality and reliability."
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-slate-50 to-emerald-50/30 overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23059669" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div> */}

      {/* Parallax Background Elements */}
      {/* <div 
        className="absolute inset-0 w-full h-[120%] opacity-5"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      /> */}

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100/60 rounded-full border border-emerald-200/50 mb-6">
              <span className="text-emerald-700 text-sm font-medium">Our Advantage</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
              Why Choose
              <span className="block text-transparent bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-600 bg-clip-text">
                Our Team?
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference that expertise, innovation, and dedication make in bringing your architectural dreams to life
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-8 hover:border-emerald-400/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-xl"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-500 group-hover:scale-110">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                      {reason.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed transition-colors duration-300 text-lg">
                      {reason.description}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-emerald-500/30 transition-all duration-500"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/10 to-rose-500/10"></div>
                </div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="mt-20 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text mb-2">
                  10+
                </div>
                <p className="text-slate-600 font-medium">Years Experience</p>
              </div>
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text mb-2">
                  200+
                </div>
                <p className="text-slate-600 font-medium">Projects Completed</p>
              </div>
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text mb-2">
                  100%
                </div>
                <p className="text-slate-600 font-medium">Client Satisfaction</p>
              </div>
              <div className="group">
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text mb-2">
                  24/7
                </div>
                <p className="text-slate-600 font-medium">Support Available</p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <button className="group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-emerald-500/25">
              Let's Discuss Your Project
              <span className="inline-block ml-3 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -z-10 top-8 -left-8 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 -bottom-8 -right-8 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
    </div>
  );
};

export default WhyChooseUs;