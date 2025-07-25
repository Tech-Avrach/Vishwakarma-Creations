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
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11, 61, 46, 0.7) 0%, transparent 50%, rgba(11, 61, 46, 0.2) 100%)' }}></div>
                
                {/* Project Title Card */}
                <div 
                  className="absolute bottom-4 left-4 right-4 backdrop-blur-xl px-6 py-4 rounded-2xl border shadow-lg"
                  style={{ 
                    backgroundColor: 'rgba(247, 246, 242, 0.15)',
                    borderColor: 'rgba(212, 175, 55, 0.3)',
                    boxShadow: '0 8px 32px rgba(212, 175, 55, 0.1)'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold" style={{ color: '#F7F6F2' }}>{project.title}</h3>
                      <p className="text-sm" style={{ color: '#D4AF37' }}>{project.projectType}</p>
                    </div>
                    <Home className="w-6 h-6" style={{ color: 'rgba(212, 175, 55, 0.8)' }} />
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
                    <div className="absolute inset-0 group-hover:bg-opacity-10 transition-colors duration-300" style={{ backgroundColor: 'rgba(11, 61, 46, 0.2)' }}></div>
                  </div>
                ))}
                
                {remainingCount > 0 && (
                  <div
                    className="relative group cursor-pointer overflow-hidden rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: '#0B3D2E' }}
                    onClick={() => openGallery(project.id, 4)}
                  >
                    <div className="text-center" style={{ color: '#F7F6F2' }}>
                      <div className="text-lg font-bold">+{remainingCount}</div>
                      <div className="text-xs opacity-80">more</div>
                    </div>
                    <div 
                      className="absolute inset-0 group-hover:opacity-80 transition-all duration-300"
                      style={{ background: 'linear-gradient(to top, rgba(11, 61, 46, 0.9) 0%, rgba(11, 61, 46, 0.7) 100%)' }}
                    ></div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Side - Project Information */}
          <div className="space-y-6">
            <div 
              className="rounded-2xl shadow-lg p-6 sm:p-8 border"
              style={{ 
                backgroundColor: '#F7F6F2',
                borderColor: 'rgba(212, 175, 55, 0.2)'
              }}
            >
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>{project.title}</h2>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(project.rating)
                          ? 'fill-current'
                          : ''
                      }`}
                      style={{ color: i < Math.floor(project.rating) ? '#D4AF37' : '#5C5C5C' }}
                    />
                  ))}
                </div>
                <span className="font-semibold" style={{ color: '#333333' }}>{project.rating}</span>
                <span style={{ color: '#5C5C5C' }}>(128 reviews)</span>
              </div>

              {/* Project Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div 
                  className="p-4 rounded-xl border"
                  style={{ 
                    backgroundColor: 'rgba(11, 61, 46, 0.05)',
                    borderColor: 'rgba(11, 61, 46, 0.1)'
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}
                    >
                      <MapPin className="w-5 h-5" style={{ color: '#D4AF37' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm" style={{ color: '#333333' }}>Location</h4>
                      <p className="text-sm" style={{ color: '#5C5C5C' }}>{project.address}</p>
                    </div>
                  </div>
                </div>

                <div 
                  className="p-4 rounded-xl border"
                  style={{ 
                    backgroundColor: 'rgba(11, 61, 46, 0.05)',
                    borderColor: 'rgba(11, 61, 46, 0.1)'
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}
                    >
                      <Ruler className="w-5 h-5" style={{ color: '#D4AF37' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm" style={{ color: '#333333' }}>Area</h4>
                      <p className="text-sm" style={{ color: '#5C5C5C' }}>{project.area}</p>
                    </div>
                  </div>
                </div>

                <div 
                  className="p-4 rounded-xl border"
                  style={{ 
                    backgroundColor: 'rgba(11, 61, 46, 0.05)',
                    borderColor: 'rgba(11, 61, 46, 0.1)'
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}
                    >
                      <User className="w-5 h-5" style={{ color: '#D4AF37' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm" style={{ color: '#333333' }}>Architect</h4>
                      <p className="text-sm" style={{ color: '#5C5C5C' }}>{project.architect}</p>
                    </div>
                  </div>
                </div>

                <div 
                  className="p-4 rounded-xl border"
                  style={{ 
                    backgroundColor: 'rgba(11, 61, 46, 0.05)',
                    borderColor: 'rgba(11, 61, 46, 0.1)'
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}
                    >
                      <Calendar className="w-5 h-5" style={{ color: '#D4AF37' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm" style={{ color: '#333333' }}>Completed</h4>
                      <p className="text-sm" style={{ color: '#5C5C5C' }}>{project.yearCompleted}</p>
                    </div>
                  </div>
                </div>

                <div 
                  className="p-4 rounded-xl border sm:col-span-2"
                  style={{ 
                    backgroundColor: 'rgba(11, 61, 46, 0.05)',
                    borderColor: 'rgba(11, 61, 46, 0.1)'
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(212, 175, 55, 0.15)' }}
                    >
                      <Award className="w-5 h-5" style={{ color: '#D4AF37' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm" style={{ color: '#333333' }}>Client</h4>
                      <p className="text-sm" style={{ color: '#5C5C5C' }}>{project.client}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  className="flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                  style={{ 
                    backgroundColor: '#B76E79',
                    color: '#F7F6F2',
                    boxShadow: '0 4px 15px rgba(183, 110, 121, 0.25)'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#A55B6B'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#B76E79'}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div 
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{ 
        background: 'linear-gradient(135deg, #F7F6F2 0%, rgba(247, 246, 242, 0.8) 50%, rgba(11, 61, 46, 0.05) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#333333' }}>
            Our <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #0B3D2E 0%, #D4AF37 100%)' }}>Portfolio</span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#5C5C5C' }}>
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
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(11, 61, 46, 0.95)' }}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 z-10 backdrop-blur-sm p-2 rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(11, 61, 46, 0.8)',
                color: '#F7F6F2'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(11, 61, 46, 0.9)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(11, 61, 46, 0.8)'}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(11, 61, 46, 0.8)',
                color: '#F7F6F2'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(11, 61, 46, 0.9)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(11, 61, 46, 0.8)'}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 backdrop-blur-sm p-3 rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(11, 61, 46, 0.8)',
                color: '#F7F6F2'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(11, 61, 46, 0.9)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(11, 61, 46, 0.8)'}
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
            <div 
              className="absolute bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-sm px-4 py-2 rounded-full"
              style={{ 
                backgroundColor: 'rgba(11, 61, 46, 0.8)',
                color: '#F7F6F2'
              }}
            >
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