import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Dribbble, 
  Instagram, 
  Facebook
} from 'lucide-react';
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    // { name: 'Testimonials', path: '/testimonials' }, // Optional: Create route if needed
  ];
  
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    // { icon: Dribbble, href: '#', label: 'Dribbble' }
  ];

  return (
    <footer className="text-white relative overflow-hidden" 
      style={{ 
        background: 'linear-gradient(135deg, #0B3D2E 0%, #333333 50%, #0B3D2E 100%)' // Deep Emerald to Charcoal gradient
      }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl" 
          style={{ background: 'linear-gradient(135deg, #D4AF37, #B76E79)' }} /> {/* Royal Gold to Rose Gold */}
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl" 
          style={{ background: 'linear-gradient(135deg, #B76E79, #D4AF37)' }} /> {/* Rose Gold to Royal Gold */}
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.jpeg" 
                alt="Vishwakarma Creations Logo" 
                className="w-12 h-12 object-contain rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-bold">
                  <span style={{ color: '#F7F6F2' }}>Vishwakarma </span>
                  <span style={{ color: '#D4AF37' }}>Creations</span>
                </h3>
              </div>
            </div>
            
            <p className="leading-relaxed max-w-sm" style={{ color: '#F7F6F2' }}>
              Transforming spaces with innovative architecture and design solutions. We create environments that inspire and function beautifully.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 rounded-full border-2 transition-all duration-300 hover:scale-110 transform group"
                    style={{ 
                      backgroundColor: 'transparent',
                      borderColor: '#D4AF37', // Royal Gold border
                      color: '#D4AF37' // Royal Gold icon
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#D4AF37'; // Royal Gold background on hover
                      e.currentTarget.style.color = '#F7F6F2'; // Off-White icon on hover
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#D4AF37';
                    }}
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold" style={{ color: '#F7F6F2' }}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="transition-colors duration-200 hover:scale-105 transform inline-block"
                    style={{ color: '#F7F6F2' }} // Off-White for links
                    onMouseEnter={(e) => e.target.style.color = '#D4AF37'} // Royal Gold on hover
                    onMouseLeave={(e) => e.target.style.color = '#F7F6F2'} // Back to Off-White
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold" style={{ color: '#F7F6F2' }}>Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <Phone size={18} style={{ color: '#B76E79' }} className="transition-colors duration-200 group-hover:scale-110 transform" />
                <div>
                  <p style={{ color: '#F7F6F2' }} className="group-hover:text-opacity-80 transition-colors duration-200">
                    +91 98765 43210
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Mail size={18} style={{ color: '#B76E79' }} className="transition-colors duration-200 group-hover:scale-110 transform" />
                <div>
                  <p style={{ color: '#F7F6F2' }} className="group-hover:text-opacity-80 transition-colors duration-200">
                    info@vishwakarmacreations.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <MapPin size={18} style={{ color: '#B76E79' }} className="transition-colors duration-200 group-hover:scale-110 transform" />
                <div>
                  <p style={{ color: '#F7F6F2' }} className="group-hover:text-opacity-80 transition-colors duration-200">
                    Indore, Madhya Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative py-6" 
        style={{ borderTop: '1px solid rgba(212, 175, 55, 0.3)' }}> {/* Royal Gold divider line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm">
              <span style={{ color: '#F7F6F2' }}>
                © 2024 Vishwakarma Creations. All rights reserved.
              </span>
              <a 
                href="#" 
                className="transition-colors duration-200"
                style={{ color: '#F7F6F2' }}
                onMouseEnter={(e) => e.target.style.color = '#B76E79'} // Rose Gold on hover
                onMouseLeave={(e) => e.target.style.color = '#F7F6F2'}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="transition-colors duration-200"
                style={{ color: '#F7F6F2' }}
                onMouseEnter={(e) => e.target.style.color = '#B76E79'} // Rose Gold on hover
                onMouseLeave={(e) => e.target.style.color = '#F7F6F2'}
              >
                Terms of Service
              </a>
            </div>
            
            <div className="text-sm" style={{ color: '#F7F6F2' }}>
              <span>Designed & Developed with </span>
              <span style={{ color: '#B76E79' }}>♥</span> {/* Rose Gold heart */}
              <span> by Vishwakarma Creations</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;