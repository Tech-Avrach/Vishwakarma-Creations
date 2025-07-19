import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Upload, 
  X, 
  CheckCircle,
  MessageCircle,
  User,
  Building,
  MessageSquare
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    projectLocation: '',
    message: '',
    attachment: null
  });
  
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceTypes = [
    'Architecture',
    'Interior Design',
    'PMC (Project Management)',
    'Design-Build',
    'Consultation',
    'Other'
  ];

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
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type';
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

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        attachment: file
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
        phone: '',
        serviceType: '',
        projectLocation: '',
        message: '',
        attachment: null
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      
      {/* Contact Banner */}
      <div className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-emerald-900 overflow-hidden">
        <div className="absolute inset-0 p-8">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover rounded-2xl opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 sm:py-24 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get In <span className="text-transparent bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text">Touch</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your architectural vision to life? Let's discuss your project and create something extraordinary together.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-20 space-y-12">
        
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">Send Us a Message</h2>
            <p className="text-slate-600">Fill out the form below and we'll get back to you within 24 hours.</p>
          </div>

          {/* Success Alert */}
          {showSuccess && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              <div>
                <h3 className="font-semibold text-emerald-800">Message Sent Successfully!</h3>
                <p className="text-emerald-600 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            </div>
          )}

          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                    errors.fullName ? 'border-rose-300 bg-rose-50' : 'border-slate-300'
                  }`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.fullName && <p className="text-rose-600 text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                      errors.email ? 'border-rose-300 bg-rose-50' : 'border-slate-300'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
                {errors.email && <p className="text-rose-600 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${
                      errors.phone ? 'border-rose-300 bg-rose-50' : 'border-slate-300'
                    }`}
                    placeholder="+91 98765 43210"
                  />
                </div>
                {errors.phone && <p className="text-rose-600 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Service Type & Project Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="serviceType" className="block text-sm font-semibold text-slate-700 mb-2">
                  Service Type *
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors appearance-none ${
                      errors.serviceType ? 'border-rose-300 bg-rose-50' : 'border-slate-300'
                    }`}
                  >
                    <option value="">Select a service</option>
                    {serviceTypes.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                {errors.serviceType && <p className="text-rose-600 text-sm mt-1">{errors.serviceType}</p>}
              </div>

              <div>
                <label htmlFor="projectLocation" className="block text-sm font-semibold text-slate-700 mb-2">
                  Project Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    id="projectLocation"
                    name="projectLocation"
                    value={formData.projectLocation}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="City, State"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Message / Project Description *
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-slate-400" />
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none ${
                    errors.message ? 'border-rose-300 bg-rose-50' : 'border-slate-300'
                  }`}
                  placeholder="Tell us about your project requirements, timeline, budget, and any specific details..."
                />
              </div>
              {errors.message && <p className="text-rose-600 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Attachment (Optional)
              </label>
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors">
                <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-slate-600 mb-2">Upload blueprints, images, or documents</p>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.jpg,.jpeg,.png,.dwg"
                />
                <label
                  htmlFor="file-upload"
                  className="inline-block px-4 py-2 bg-slate-100 text-slate-700 rounded-lg cursor-pointer hover:bg-slate-200 transition-colors"
                >
                  Choose File
                </label>
                {formData.attachment && (
                  <p className="text-sm text-emerald-600 mt-2">
                    Selected: {formData.attachment.name}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-emerald-500/25"
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
        <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50 rounded-2xl shadow-xl p-8 border border-emerald-100">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-3">Contact Information</h3>
            <p className="text-slate-600">Get in touch with us through any of these channels</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2 text-lg">Office Address</h4>
                  <p className="text-slate-600 leading-relaxed">
                    123 Architecture Lane<br />
                    Design District<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2 text-lg">Phone Numbers</h4>
                  <p className="text-slate-600">+91 98765 43210</p>
                  <p className="text-slate-600">+91 87654 32109</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2 text-lg">Email Addresses</h4>
                  <p className="text-slate-600">info@vishwakarma.com</p>
                  <p className="text-slate-600">projects@vishwakarma.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-emerald-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2 text-lg">Business Hours</h4>
                  <p className="text-slate-600">
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
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-emerald-100">
            <h3 className="text-2xl font-bold text-slate-800 text-center">Find Our Office</h3>
            <p className="text-slate-600 text-center mt-2">Visit us at our Mumbai location</p>
          </div>
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
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center z-50 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
        <div className="absolute bottom-16 right-0 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Chat with us on WhatsApp
        </div>
      </button>
    </div>
  );
};

export default ContactPage;