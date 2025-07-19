import React from 'react';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Living Space",
      location: "Mumbai, Maharashtra",
      year: "2024",
      category: "Residential",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRaHnWYEcusK2HPlJj61OZ3hnawEAylvsCSg&s",
      description: "A contemporary residential project featuring minimalist design with warm accents"
    },
    {
      id: 2,
      title: "Luxury Bathroom Suite",
      location: "Delhi, India",
      year: "2024",
      category: "Interior Design",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPmps-ZDDO-eqVD1Cl0mFoAvQY0wAsUrM9uQ&s",
      description: "Sophisticated bathroom design with premium finishes and elegant lighting"
    },
    {
      id: 3,
      title: "Executive Office Space",
      location: "Bangalore, Karnataka",
      year: "2023",
      category: "Commercial",
      image: "https://arsitagx-master-article.s3.ap-southeast-1.amazonaws.com/article-photo/393/photo-family-room-na-residence-desain-arsitek-oleh-alvin-tjitrowirjo-alvint-studio.jpeg",
      description: "Modern office interior promoting productivity and employee wellbeing"
    }
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Row - Two Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* First Image */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg h-80">
            <img 
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-emerald-600 text-xs font-semibold rounded-full">
                  {projects[0].category}
                </span>
                <h3 className="text-lg font-bold">{projects[0].title}</h3>
                <div className="flex items-center space-x-4 text-sm opacity-90">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{projects[0].location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{projects[0].year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Image */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg h-80">
            <img 
              src={projects[1].image}
              alt={projects[1].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-emerald-600 text-xs font-semibold rounded-full">
                  {projects[1].category}
                </span>
                <h3 className="text-lg font-bold">{projects[1].title}</h3>
                <div className="flex items-center space-x-4 text-sm opacity-90">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{projects[1].location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{projects[1].year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Text Section and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Section with Border */}
          <div className="bg-white p-8 border-4 border-orange-400 rounded-lg shadow-lg">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
                Our Latest Projects
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Discover our most recent architectural and design achievements. Each project represents our commitment to excellence, innovation, and creating spaces that inspire and transform lives through thoughtful design and meticulous execution.
              </p>
              <button className="group relative bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-10 py-4 rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span>READ MORE</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Third Image */}
          <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg h-80">
            <img 
              src={projects[2].image}
              alt={projects[2].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 bg-emerald-600 text-xs font-semibold rounded-full">
                  {projects[2].category}
                </span>
                <h3 className="text-lg font-bold">{projects[2].title}</h3>
                <div className="flex items-center space-x-4 text-sm opacity-90">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{projects[2].location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{projects[2].year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;