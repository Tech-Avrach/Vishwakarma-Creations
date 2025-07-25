import React from 'react';
import { ArrowRight, Building, Briefcase, Home, Cog, Hammer, Sparkles, Heart, Star, Users, Award } from 'lucide-react';

const ServicesOffered = () => {
    const services = [
        {
            id: 1,
            title: "Residential Architecture",
            description: "Transform your dream home into reality with our comprehensive residential architecture services. We specialize in creating personalized living spaces that reflect your lifestyle while maintaining structural integrity and aesthetic appeal. From contemporary minimalist designs to traditional family homes, our expertise spans across all architectural styles.",
            features: ["Custom Home Design", "Space Planning", "3D Visualization", "Building Permits"],
            image: "https://cedreo.com/wp-content/uploads/cloudinary/Visuel_AllHands_2022-04-22_JOUR_554px_prml8g.jpg",
            icon: <Home className="w-10 h-10" />,
            color: "emerald"
        },
        {
            id: 2,
            title: "Commercial Design",
            description: "Elevate your business environment with our cutting-edge commercial design solutions. We understand that commercial spaces need to be both functional and inspiring, creating environments that boost productivity while making lasting impressions on clients and employees alike.",
            features: ["Office Spaces", "Retail Design", "Restaurant Planning", "Corporate Branding"],
            image: "https://5.imimg.com/data5/SELLER/Default/2021/2/XR/GP/MY/24077463/commercial-interior-designer.jpg",
            icon: <Briefcase className="w-10 h-10" />,
            color: "emerald"
        },
        {
            id: 3,
            title: "Interior Design & Execution",
            description: "Experience luxury redefined through our premium interior design and execution services. We bring together innovative design concepts with flawless execution, creating spaces that are not just beautiful but also highly functional and reflective of your personal style.",
            features: ["Luxury Interiors", "Furniture Selection", "Lighting Design", "Complete Execution"],
            image: "https://sumesshmenonassociates.com/wp-content/uploads/2024/02/luxurious-living-room-banner.webp",
            icon: <Building className="w-10 h-10" />,
            color: "emerald"
        },
        {
            id: 4,
            title: "PMC (Project Management Consultancy)",
            description: "Streamline your construction projects with our expert project management consultancy services. We ensure your projects are completed on time, within budget, and to the highest quality standards through meticulous planning, coordination, and execution oversight.",
            features: ["Project Planning", "Cost Management", "Quality Control", "Timeline Management"],
            image: "https://www.ten.com/sites/energies/files/styles/rrss_image/public/2022-08/TEN2021_Bannerimage_A%26S_Project%20management%20consultancy.jpg?itok=us99vHb1",
            icon: <Cog className="w-10 h-10" />,
            color: "emerald"
        },
        {
            id: 5,
            title: "Design-Build Services",
            description: "Experience seamless project delivery with our integrated design-build services. We combine architectural design and construction expertise under one roof, ensuring smooth communication, faster project completion, and cost-effective solutions from concept to completion.",
            features: ["Integrated Solutions", "Single Point Contact", "Cost Optimization", "Quality Assurance"],
            image: "https://zionarch.com/wp-content/uploads/2018/08/DESIGN-BUILD-SERVICES-1024x511.jpg",
            icon: <Hammer className="w-10 h-10" />,
            color: "emerald"
        }
    ];

    const getColorClasses = (color) => {
        const colorMap = {
            emerald: {
                bg: "bg-[#0B3D2E]/10",
                border: "border-[#0B3D2E]/20",
                text: "text-[#0B3D2E]",
                gradient: "from-[#0B3D2E] to-[#0B3D2E]/90",
                hover: "hover:bg-[#0B3D2E]/20"
            },
            rosegold: {
                bg: "bg-[#B76E79]/10",
                border: "border-[#B76E79]/20",
                text: "text-[#B76E79]",
                gradient: "from-[#B76E79] to-[#B76E79]/90",
                hover: "hover:bg-[#B76E79]/20"
            },
            royalgold: {
                bg: "bg-[#D4AF37]/10",
                border: "border-[#D4AF37]/20",
                text: "text-[#D4AF37]",
                gradient: "from-[#D4AF37] to-[#D4AF37]/90",
                hover: "hover:bg-[#D4AF37]/20"
            }
        };
        return colorMap[color] || colorMap.emerald;
    };

    return (
        <>
        <div className="min-h-screen bg-[#F7F6F2] text-[#333333] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-32 left-32 w-96 h-96 bg-[#0B3D2E]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-32 right-32 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#B76E79]/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 py-32">
                <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
                    {/* Section Header */}
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-base border border-[#5C5C5C]/20 mb-8 shadow-sm">
                            <Star className="w-5 h-5 text-[#D4AF37] mr-2" />
                            <span className="text-[#5C5C5C] font-medium">Our Expertise</span>
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                            Professional
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B3D2E] to-[#0B3D2E]/90 block mt-2">
                                Services Offered
                            </span>
                        </h2>
                        <p className="text-2xl text-[#5C5C5C] max-w-4xl mx-auto leading-relaxed">
                            Comprehensive architecture and design solutions tailored to bring your vision to life with precision, creativity, and excellence in every project we undertake.
                        </p>
                        
                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-12 mt-16">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#0B3D2E]">500+</div>
                                <div className="text-[#5C5C5C]">Projects Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#B76E79]">15+</div>
                                <div className="text-[#5C5C5C]">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#D4AF37]">98%</div>
                                <div className="text-[#5C5C5C]">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="space-y-32">
                        {services.map((service, index) => {
                            const colors = getColorClasses(service.color);
                            return (
                                <div key={service.id} className="group">
                                    <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                                        {/* Image Section */}
                                        <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10" />

                                                {/* Floating Icon */}
                                                <div className={`absolute top-8 left-8 w-20 h-20 ${colors.bg} ${colors.border} backdrop-blur-sm rounded-3xl flex items-center justify-center ${colors.text} border-2 shadow-lg`}>
                                                    {service.icon}
                                                </div>
                                            </div>

                                            {/* Decorative Elements */}
                                            <div className={`absolute -top-6 -right-6 w-32 h-32 ${colors.bg} rounded-full blur-2xl opacity-60`} />
                                            <div className={`absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br ${colors.gradient} opacity-20 rounded-full blur-2xl`} />
                                        </div>

                                        {/* Content Section */}
                                        <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                            <div className="space-y-6">
                                                <div className={`inline-block px-4 py-2 ${colors.bg} ${colors.text} rounded-full text-sm font-semibold`}>
                                                    Service #{service.id}
                                                </div>
                                                <h3 className="text-4xl lg:text-5xl font-bold text-[#333333] leading-tight">
                                                    {service.title}
                                                </h3>
                                                <p className="text-xl text-[#5C5C5C] leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>

                                            {/* Features */}
                                            <div className="grid grid-cols-2 gap-4">
                                                {service.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-[#F7F6F2]">
                                                        <div className={`w-3 h-3 bg-gradient-to-r ${colors.gradient} rounded-full`} />
                                                        <span className="text-[#5C5C5C] font-medium">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* CTA Buttons */}
                                            <div className="flex flex-col sm:flex-row gap-6 pt-8">
                                                <button className={`bg-[#B76E79] text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg`}>
                                                    <span>Explore Services</span>
                                                    <ArrowRight size={20} />
                                                </button>
                                                <button className={`bg-white text-[#0B3D2E] border-2 border-[#D4AF37] px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#D4AF37]/10 transition-all duration-300 shadow-sm`}>
                                                    Learn More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="relative bg-[#F7F6F2] py-32 px-6">
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-16 left-16 w-32 h-32 bg-[#0B3D2E]/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-16 right-16 w-40 h-40 bg-[#D4AF37]/10 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#B76E79]/10 rounded-full blur-xl"></div>
            </div>
            
            {/* Content */}
            <div className="relative max-w-6xl mx-auto text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-[#0B3D2E]/10 rounded-full mb-10 shadow-xl">
                    <Sparkles className="w-12 h-12 text-[#0B3D2E]" />
                </div>
                
                {/* Heading */}
                <h3 className="text-4xl lg:text-6xl font-bold mb-10 text-[#333333] leading-tight">
                    Ready to Start Your
                    <span className="block text-[#0B3D2E] mt-4">
                        Dream Project?
                    </span>
                </h3>
                
                {/* Description */}
                <p className="text-2xl text-[#5C5C5C] mb-16 max-w-4xl mx-auto leading-relaxed">
                    Transform your vision into reality with our comprehensive architecture and design services. 
                    Let's create something extraordinary together that exceeds your expectations.
                </p>
                
                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
                    <div className="flex flex-col items-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-[#0B3D2E]/10 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-[#0B3D2E]/10 rounded-full flex items-center justify-center mb-4">
                            <Heart className="w-8 h-8 text-[#0B3D2E]" />
                        </div>
                        <h4 className="text-lg font-bold text-[#333333] mb-2">Personalized Design</h4>
                        <p className="text-[#5C5C5C] text-center">Tailored solutions that reflect your unique style</p>
                    </div>
                    <div className="flex flex-col items-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-[#B76E79]/10 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-[#B76E79]/10 rounded-full flex items-center justify-center mb-4">
                            <Users className="w-8 h-8 text-[#B76E79]" />
                        </div>
                        <h4 className="text-lg font-bold text-[#333333] mb-2">Expert Team</h4>
                        <p className="text-[#5C5C5C] text-center">Experienced professionals dedicated to excellence</p>
                    </div>
                    <div className="flex flex-col items-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-[#D4AF37]/10 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4">
                            <Award className="w-8 h-8 text-[#D4AF37]" />
                        </div>
                        <h4 className="text-lg font-bold text-[#333333] mb-2">Quality Guarantee</h4>
                        <p className="text-[#5C5C5C] text-center">Premium results with satisfaction assured</p>
                    </div>
                </div>
                
                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                    <button className="group relative bg-[#B76E79] text-white px-12 py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 overflow-hidden">
                        <span className="relative z-10">Schedule a Consultation</span>
                        <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    
                    <button className="bg-white/90 backdrop-blur-sm text-[#333333] px-12 py-5 rounded-full font-semibold text-xl border-2 border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl">
                        <span>View Our Portfolio</span>
                    </button>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center gap-12 text-lg text-[#5C5C5C]">
                    <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-[#0B3D2E] rounded-full"></div>
                        <span>Free Consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-[#B76E79] rounded-full"></div>
                        <span>24/7 Support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-[#D4AF37] rounded-full"></div>
                        <span>Satisfaction Guaranteed</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ServicesOffered;