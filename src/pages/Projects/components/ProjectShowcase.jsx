import React, { useState } from 'react';
import { MapPin, Ruler, User, Star, X, ChevronLeft, ChevronRight, Home, Calendar, Award } from 'lucide-react';

const ProjectShowcase = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeProjectId, setActiveProjectId] = useState(null);

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Modern Stone Villa",
      thumbnailImg: "https://gbdmagazine.com/wp-content/uploads/2022/10/studio-804-08.jpg",
      otherImgs: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
        "https://images.unsplash.com/photo-1600566752734-eb5ef58dfe1a?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753051-6057a35bed5d?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
        "https://images.unsplash.com/photo-1600607688960-e095a632717e?w=800&q=80",
        "https://images.unsplash.com/photo-1600566752734-eb5ef58dfe1a?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753229-f3f5c1a15b14?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
        "https://images.unsplash.com/photo-1600566752734-eb5ef58dfe1a?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753051-6057a35bed5d?w=800&q=80",
        "https://images.unsplash.com/photo-1600607688960-e095a632717e?w=800&q=80"
      ],
      address: "Bandra West, Mumbai, Maharashtra",
      area: "4,500 sq ft",
      architect: "Vishwakarma Creations",
      rating: 4.8,
      yearCompleted: "2023",
      projectType: "Residential Villa",
      client: "Private Client"
    },
    {
      id: 2,
      title: "Contemporary Urban Home",
      thumbnailImg: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      otherImgs: [
        "https://gbdmagazine.com/wp-content/uploads/2022/10/studio-804-08.jpg",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
        "https://images.unsplash.com/photo-1600566752734-eb5ef58dfe1a?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753051-6057a35bed5d?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
        "https://images.unsplash.com/photo-1600607688960-e095a632717e?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753229-f3f5c1a15b14?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
        "https://images.unsplash.com/photo-1600566752734-eb5ef58dfe1a?w=800&q=80"
      ],
      address: "Koregaon Park, Pune, Maharashtra",
      area: "3,200 sq ft",
      architect: "Vishwakarma Creations",
      rating: 4.9,
      yearCompleted: "2024",
      projectType: "Urban Residence",
      client: "Tech Executive"
    },
    {
      id: 3,
      title: "Luxury Garden Estate",
      thumbnailImg: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      otherImgs: [
        "https://gbdmagazine.com/wp-content/uploads/2022/10/studio-804-08.jpg",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
        "https://images.unsplash.com/photo-1600566752734-eb5ef58dfe1a?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753051-6057a35bed5d?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
        "https://images.unsplash.com/photo-1600607688960-e095a632717e?w=800&q=80"
      ],
      address: "Whitefield, Bangalore, Karnataka",
      area: "6,200 sq ft",
      architect: "Vishwakarma Creations",
      rating: 4.7,
      yearCompleted: "2024",
      projectType: "Luxury Estate",
      client: "Business Owner"
    },
        {
      id: 1,
      title: "Modern Stone Villa",
      thumbnailImg: "https://gbdmagazine.com/wp-content/uploads/2022/10/studio-804-08.jpg",
      otherImgs: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
        "https://images.unsplash.com/photo-1600566752734-eb5ef58dfe1a?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753051-6057a35bed5d?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
        "https://images.unsplash.com/photo-1600607688960-e095a632717e?w=800&q=80",
        "https://images.unsplash.com/photo-1600566752734-eb5ef58dfe1a?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753229-f3f5c1a15b14?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
        "https://images.unsplash.com/photo-1600566752734-eb5ef58dfe1a?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753051-6057a35bed5d?w=800&q=80",
        "https://images.unsplash.com/photo-1600607688960-e095a632717e?w=800&q=80"
      ],
      address: "Bandra West, Mumbai, Maharashtra",
      area: "4,500 sq ft",
      architect: "Vishwakarma Creations",
      rating: 4.8,
      yearCompleted: "2023",
      projectType: "Residential Villa",
      client: "Private Client"
    },
    {
      id: 2,
      title: "Contemporary Urban Home",
      thumbnailImg: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      otherImgs: [
        "https://gbdmagazine.com/wp-content/uploads/2022/10/studio-804-08.jpg",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
        "https://images.unsplash.com/photo-1600566752734-eb5ef58dfe1a?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753051-6057a35bed5d?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
        "https://images.unsplash.com/photo-1600607688960-e095a632717e?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753229-f3f5c1a15b14?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
        "https://images.unsplash.com/photo-1600566752734-eb5ef58dfe1a?w=800&q=80"
      ],
      address: "Koregaon Park, Pune, Maharashtra",
      area: "3,200 sq ft",
      architect: "Vishwakarma Creations",
      rating: 4.9,
      yearCompleted: "2024",
      projectType: "Urban Residence",
      client: "Tech Executive"
    },
    {
      id: 3,
      title: "Luxury Garden Estate",
      thumbnailImg: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      otherImgs: [
        "https://gbdmagazine.com/wp-content/uploads/2022/10/studio-804-08.jpg",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
        "https://images.unsplash.com/photo-1600566752734-eb5ef58dfe1a?w=800&q=80",
        "https://images.unsplash.com/photo-1600566753051-6057a35bed5d?w=800&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
        "https://images.unsplash.com/photo-1600607688960-e095a632717e?w=800&q=80"
      ],
      address: "Whitefield, Bangalore, Karnataka",
      area: "6,200 sq ft",
      architect: "Vishwakarma Creations",
      rating: 4.7,
      yearCompleted: "2024",
      projectType: "Luxury Estate",
      client: "Business Owner"
    }
  ];

  const openGallery = (projectId, index = 0) => {
    setActiveProjectId(projectId);
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setActiveProjectId(null);
  };

  const nextImage = () => {
    const activeProject = projects.find(p => p.id === activeProjectId);
    const allImages = [activeProject.thumbnailImg, ...activeProject.otherImgs];
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    const activeProject = projects.find(p => p.id === activeProjectId);
    const allImages = [activeProject.thumbnailImg, ...activeProject.otherImgs];
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const getVisibleImages = (project) => {
    const otherImgs = project.otherImgs;
    if (otherImgs.length <= 3) {
      return { visible: otherImgs, remaining: 0 };
    }
    return { visible: otherImgs.slice(0, 3), remaining: otherImgs.length - 3 };
  };

  const ProjectCard = ({ project, index }) => {
    const { visible: visibleImages, remaining: remainingCount } = getVisibleImages(project);

    return (
      <div className="mb-16 last:mb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side - Image Gallery */}
          <div className="space-y-6">
            {/* Main Thumbnail */}
            <div className="relative group cursor-pointer" onClick={() => openGallery(project.id, 0)}>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={project.thumbnailImg}
                  alt={project.title}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
                
                {/* Project Title Card */}
                <div className="absolute bottom-4 left-4 right-4 
                bg-white/10 backdrop-blur-xl 
                text-white px-6 py-4 
                rounded-2xl border border-white/20 
                shadow-lg shadow-white/10">
  <div className="flex items-center justify-between">
    <div>
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-slate-200 text-sm">{project.projectType}</p>
    </div>
    <Home className="w-6 h-6 text-white/60" />
  </div>
</div>

              </div>
            </div>

            {/* Other Images Grid */}
            {project.otherImgs.length > 0 && (
              <div className="grid grid-cols-4 gap-3">
                {visibleImages.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="relative group cursor-pointer overflow-hidden rounded-xl"
                    onClick={() => openGallery(project.id, imgIndex + 1)}
                  >
                    <img
                      src={img}
                      alt={`${project.title} ${imgIndex + 1}`}
                      className="w-full h-20 sm:h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
                  </div>
                ))}
                
                {remainingCount > 0 && (
                  <div
                    className="relative group cursor-pointer overflow-hidden rounded-xl bg-slate-800 flex items-center justify-center"
                    onClick={() => openGallery(project.id, 4)}
                  >
                    <div className="text-white text-center">
                      <div className="text-lg font-bold">+{remainingCount}</div>
                      <div className="text-xs opacity-80">more</div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-700/80 group-hover:from-slate-800/80 group-hover:to-slate-600/80 transition-all duration-300"></div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Side - Project Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">{project.title}</h2>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(project.rating)
                          ? 'text-emerald-500 fill-current'
                          : 'text-slate-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-slate-700 font-semibold">{project.rating}</span>
                <span className="text-slate-500">(128 reviews)</span>
              </div>

              {/* Project Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">Location</h4>
                      <p className="text-slate-600 text-sm">{project.address}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Ruler className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">Area</h4>
                      <p className="text-slate-600 text-sm">{project.area}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">Architect</h4>
                      <p className="text-slate-600 text-sm">{project.architect}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">Completed</h4>
                      <p className="text-slate-600 text-sm">{project.yearCompleted}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 sm:col-span-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">Client</h4>
                      <p className="text-slate-600 text-sm">{project.client}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
                  View Details
                </button>
                {/* <button className="flex-1 bg-white border-2 border-emerald-200 text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300">
                  Contact Us
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-emerald-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Our <span className="text-transparent bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text">Portfolio</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Discover our latest architectural masterpieces, each designed with precision and crafted with excellence.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Image Gallery Modal */}
      {isGalleryOpen && activeProjectId && (
        <div className="fixed inset-0 bg-slate-900/95 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 z-10 bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <img
              src={(() => {
                const activeProject = projects.find(p => p.id === activeProjectId);
                const allImages = [activeProject.thumbnailImg, ...activeProject.otherImgs];
                return allImages[currentImageIndex];
              })()}
              alt={`Gallery image ${currentImageIndex + 1}`}
              className="w-full h-full object-contain rounded-lg"
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-800/80 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {(() => {
                const activeProject = projects.find(p => p.id === activeProjectId);
                return [activeProject.thumbnailImg, ...activeProject.otherImgs].length;
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;