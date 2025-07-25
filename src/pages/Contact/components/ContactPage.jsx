import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  MessageCircle,
  User,
  MessageSquare
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setShowSuccess(true);
      setIsSubmitting(false);
      setFormData({
        fullName: '',
        email: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  const openWhatsApp = () => {
    const phoneNumber = '+919876543210'; // Replace with actual WhatsApp number
    const message = 'Hello! I would like to discuss a project with Vishwakarma Creations.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F6F2' }}>
      
      {/* Contact Banner */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#0B3D2E' }}>
        <div className="absolute inset-0 p-8">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-2xl opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:py-24 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get In <span style={{ color: '#D4AF37' }}>Touch</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your architectural vision to life? Let's discuss your project and create something extraordinary together.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-20 space-y-12">
        
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2" style={{ borderColor: '#D4AF37' }}>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-3" style={{ color: '#0B3D2E' }}>Send Us a Message</h2>
            <p style={{ color: '#5C5C5C' }}>We will get back soon.</p>
          </div>

          {/* Success Alert */}
          {showSuccess && (
            <div className="mb-6 p-4 rounded-xl flex items-center space-x-3" style={{ backgroundColor: '#F0F9F0', border: '1px solid #0B3D2E' }}>
              <CheckCircle className="w-6 h-6" style={{ color: '#0B3D2E' }} />
              <div>
                <h3 className="font-semibold" style={{ color: '#0B3D2E' }}>Message Sent Successfully!</h3>
                <p className="text-sm" style={{ color: '#5C5C5C' }}>We'll get back to you soon.</p>
              </div>
            </div>
          )}

          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#D4AF37' }} />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 border rounded-xl transition-colors ${
                    errors.fullName ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:ring-2 focus:border-transparent'
                  }`}
                  style={!errors.fullName ? { 
                    '--tw-ring-color': '#D4AF37',
                    borderColor: '#D4AF37'
                  } : {}}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#D4AF37' }} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 border rounded-xl transition-colors ${
                    errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:ring-2 focus:border-transparent'
                  }`}
                  style={!errors.email ? { 
                    '--tw-ring-color': '#D4AF37',
                    borderColor: '#D4AF37'
                  } : {}}
                  placeholder="your@email.com"
                />
              </div>
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: '#333333' }}>
                Message *
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 w-5 h-5" style={{ color: '#D4AF37' }} />
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 border rounded-xl transition-colors resize-none ${
                    errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:ring-2 focus:border-transparent'
                  }`}
                  style={!errors.message ? { 
                    '--tw-ring-color': '#D4AF37',
                    borderColor: '#D4AF37'
                  } : {}}
                  placeholder="Tell us about your project requirements..."
                />
              </div>
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              style={{ 
                backgroundColor: '#B76E79',
                '&:hover': { backgroundColor: '#A55D6B' }
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#A55D6B'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#B76E79'}
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Contact Information Panel */}
        <div className="rounded-2xl shadow-xl p-8 border-2" style={{ backgroundColor: '#F7F6F2', borderColor: '#0B3D2E' }}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-3" style={{ color: '#0B3D2E' }}>Contact Information</h3>
            <p style={{ color: '#5C5C5C' }}>Get in touch with us through any of these channels</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow flex-1 min-h-[144px]" style={{ borderColor: '#D4AF37' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md" style={{ backgroundColor: '#D4AF37' }}>
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg" style={{ color: '#333333' }}>Office Address</h4>
                  <p className="leading-relaxed" style={{ color: '#5C5C5C' }}>
                    123 Architecture Lane<br />
                    Design District<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow flex-1 min-h-[144px]" style={{ borderColor: '#D4AF37' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md" style={{ backgroundColor: '#D4AF37' }}>
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg" style={{ color: '#333333' }}>Phone Numbers</h4>
                  <p style={{ color: '#5C5C5C' }}>+91 98765 43210</p>
                  <p style={{ color: '#5C5C5C' }}>+91 87654 32109</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow flex-1 min-h-[144px]" style={{ borderColor: '#D4AF37' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md" style={{ backgroundColor: '#D4AF37' }}>
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg" style={{ color: '#333333' }}>Email Addresses</h4>
                  <p style={{ color: '#5C5C5C' }}>info@vishwakarma.com</p>
                  <p style={{ color: '#5C5C5C' }}>projects@vishwakarma.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow flex-1 min-h-[144px]" style={{ borderColor: '#D4AF37' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md" style={{ backgroundColor: '#D4AF37' }}>
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg" style={{ color: '#333333' }}>Business Hours</h4>
                  <p style={{ color: '#5C5C5C' }}>
                    Mon - Fri: 9:00 AM - 7:00 PM<br />
                    Sat: 10:00 AM - 5:00 PM<br />
                    Sun: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2" style={{ borderColor: '#0B3D2E' }}>
          <div className="h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9374536573444!2d72.8332!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676b55d89%3A0x5aa2fb957830c9d8!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 w-14 h-14 hover:bg-green-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center z-50 group"
        style={{ backgroundColor: '#25D366' }}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
        <div className="absolute bottom-16 right-0 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#333333' }}>
          Chat with us on WhatsApp
        </div>
      </button>
    </div>
  );
};

export default ContactPage;