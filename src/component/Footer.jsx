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
    { icon: Dribbble, href: '#', label: 'Dribbble' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-700 to-emerald-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-3xl" />
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
                  <span className="text-white">Vishwakarma </span>
                  <span className="text-yellow-400">Creations</span>
                </h3>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Transforming spaces with innovative architecture and design solutions. We create environments that inspire and function beautifully.
            </p>
            
            <div className="flex space-x-4">
            <ul className="space-y-3">
  {quickLinks.map((link, index) => (
    <li key={index}>
      <Link 
        to={link.path}
        className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
      >
        {link.name}
      </Link>
    </li>
  ))}
</ul>

            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-emerald-400" />
                <div>
                  <p className="text-gray-300">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-emerald-400" />
                <div>
                  <p className="text-gray-300">info@vishwakarmacreations.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-emerald-400" />
                <div>
                  <p className="text-gray-300">Indore, Madhya Pradesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-slate-600/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <span>© 2024 Vishwakarma Creations. All rights reserved.</span>
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            </div>
            
            <div className="text-sm text-gray-400">
              <span>Designed & Developed with </span>
              <span className="text-red-400">♥</span>
              <span> by Vishwakarma Creations</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;