import React from 'react';
import { ArrowRight, Building, Briefcase, Home, Cog, Hammer, Sparkles, Heart } from 'lucide-react';

const ServicesOffered = () => {
    const services = [
        {
            id: 1,
            title: "Residential Architecture",
            description: "Transform your dream home into reality with our comprehensive residential architecture services. We specialize in creating personalized living spaces that reflect your lifestyle while maintaining structural integrity and aesthetic appeal. From contemporary minimalist designs to traditional family homes, our expertise spans across all architectural styles.",
            features: ["Custom Home Design", "Space Planning", "3D Visualization", "Building Permits"],
            image: "https://cedreo.com/wp-content/uploads/cloudinary/Visuel_AllHands_2022-04-22_JOUR_554px_prml8g.jpg",
            icon: <Home className="w-8 h-8" />
        },
        {
            id: 2,
            title: "Commercial Design",
            description: "Elevate your business environment with our cutting-edge commercial design solutions. We understand that commercial spaces need to be both functional and inspiring, creating environments that boost productivity while making lasting impressions on clients and employees alike.",
            features: ["Office Spaces", "Retail Design", "Restaurant Planning", "Corporate Branding"],
            image: "https://5.imimg.com/data5/SELLER/Default/2021/2/XR/GP/MY/24077463/commercial-interior-designer.jpg",
            icon: <Briefcase className="w-8 h-8" />
        },
        {
            id: 3,
            title: "Interior Design & Execution",
            description: "Experience luxury redefined through our premium interior design and execution services. We bring together innovative design concepts with flawless execution, creating spaces that are not just beautiful but also highly functional and reflective of your personal style.",
            features: ["Luxury Interiors", "Furniture Selection", "Lighting Design", "Complete Execution"],
            image: "https://sumesshmenonassociates.com/wp-content/uploads/2024/02/luxurious-living-room-banner.webp",
            icon: <Building className="w-8 h-8" />
        },
        {
            id: 4,
            title: "PMC (Project Management Consultancy)",
            description: "Streamline your construction projects with our expert project management consultancy services. We ensure your projects are completed on time, within budget, and to the highest quality standards through meticulous planning, coordination, and execution oversight.",
            features: ["Project Planning", "Cost Management", "Quality Control", "Timeline Management"],
            image: "https://www.ten.com/sites/energies/files/styles/rrss_image/public/2022-08/TEN2021_Bannerimage_A%26S_Project%20management%20consultancy.jpg?itok=us99vHb1",
            icon: <Cog className="w-8 h-8" />
        },
        {
            id: 5,
            title: "Design-Build Services",
            description: "Experience seamless project delivery with our integrated design-build services. We combine architectural design and construction expertise under one roof, ensuring smooth communication, faster project completion, and cost-effective solutions from concept to completion.",
            features: ["Integrated Solutions", "Single Point Contact", "Cost Optimization", "Quality Assurance"],
            image: "https://zionarch.com/wp-content/uploads/2018/08/DESIGN-BUILD-SERVICES-1024x511.jpg",
            icon: <Hammer className="w-8 h-8" />
        }
    ];

    return (
        <>
        <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-emerald-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 bg-slate-700/50 rounded-full text-sm border border-slate-600 mb-6">
                            <span className="text-gray-300">Our Expertise</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Services
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 ml-3">
                                Offered
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive architecture and design solutions tailored to bring your vision to life with precision, creativity, and excellence.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="space-y-24">
                        {services.map((service, index) => (
                            <div key={service.id} className="group">
                                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                                    }`}>
                                    {/* Image Section */}
                                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                        <div className="relative rounded-2xl overflow-hidden">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                                            {/* Floating Icon */}
                                            <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-emerald-400 border border-emerald-400/30">
                                                {service.icon}
                                            </div>
                                        </div>

                                        {/* Decorative Elements */}
                                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-xl" />
                                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-xl" />
                                    </div>

                                    {/* Content Section */}
                                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                        <div className="space-y-4">
                                            <h3 className="text-3xl lg:text-4xl font-bold text-white">
                                                {service.title}
                                            </h3>
                                            <p className="text-lg text-gray-300 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Features */}
                                        <div className="grid grid-cols-2 gap-3">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center space-x-2">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full" />
                                                    <span className="text-gray-300 text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                            <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-800 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-200 flex items-center justify-center space-x-2">
                                                <span>Explore Services</span>
                                                <ArrowRight size={18} />
                                            </button>
                                            <button className="bg-transparent border-2 border-emerald-400 text-emerald-400 px-8 py-3 rounded-full font-medium hover:bg-emerald-400 hover:text-slate-800 transition-all duration-300">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA Section */}
                </div>
            </div>
        </div>
                    <div className="relative bg-gradient-to-br from-emerald-50 via-green-50 to-rose-50 py-24 px-6 mt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-rose-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-green-200/30 rounded-full blur-lg"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full mb-6 shadow-lg">
          <Sparkles className="w-8 h-8 text-emerald-600" />
        </div>
        
        {/* Heading */}
        <h3 className="text-3xl lg:text-5xl font-bold mb-6 text-slate-800 leading-tight">
          Ready to Start Your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 mt-2">
            Dream Project?
          </span>
        </h3>
        
        {/* Description */}
        <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Transform your vision into reality with our comprehensive architecture and design services. 
          Let's create something extraordinary together.
        </p>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
          <div className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-emerald-100 shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-3">
              <Heart className="w-6 h-6 text-emerald-600" />
            </div>
            <span className="text-sm font-medium text-slate-700">Personalized Design</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-green-100 shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
              <Sparkles className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm font-medium text-slate-700">Expert Guidance</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-rose-100 shadow-sm">
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-3">
              <ArrowRight className="w-6 h-6 text-rose-600" />
            </div>
            <span className="text-sm font-medium text-slate-700">Quick Turnaround</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Schedule a Consultation</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button className="bg-white/80 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-full font-medium text-lg border-2 border-emerald-200 hover:border-emerald-300 hover:bg-white transition-all duration-300 flex items-center space-x-2">
            <span>View Our Portfolio</span>
          </button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-rose-400 rounded-full"></div>
            <span>Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>
    </div>
    </>
    );
};

export default ServicesOffered;