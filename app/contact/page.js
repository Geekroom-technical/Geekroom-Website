"use client";

import { useState } from 'react';
import InteractiveBackground from '../../components/InteractiveBackground';
import { Linkedin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // TODO: integrate with /api/contact/route.js
    alert('Message sent! (Demo - connect your API)');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const SOCIAL_LINKS = {
    instagram: 'https://www.instagram.com/geekroom_srmist_ghz/',
    Linkedin: 'https://www.linkedin.com/company/geek-room-srmist/posts/?feedView=all',
    
  };

  const CONTACT_INFO = {
    address: 'SRM Institute of Science and Technology, Ghaziabad Campus',
    email:   'geekroom@srmist.edu.in',
    phone:   '+91 12345 67890',
  };

  const ICONS = {
    address: 'M12 21s-7-6.75-7-11a7 7 0 0114 0c0 4.25-7 11-7 11zM12 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
    email:   'M2 7l10 7 10-7',
    phone:   'M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.1 5.18 2 2 0 015.09 3h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 17z',
    follow:  'M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3',
    instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.013 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.013 8.333 0 8.741 0 12c0 3.259.013 3.668.072 4.948.085 1.856.601 3.698 1.942 5.039 1.341 1.341 3.183 1.857 5.039 1.942C8.333 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.856-.085 3.698-.601 5.039-1.942 1.341-1.341 1.857-3.183 1.942-5.039C23.987 15.668 24 15.259 24 12c0-3.259-.013-3.668-.072-4.948-.085-1.856-.601-3.698-1.942-5.039C20.645.673 18.803.157 16.948.072 15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
    facebook:  'M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.028 4.388 11.02 10.125 11.927v-8.44H7.078v-3.487h3.047V9.41c0-3.025 1.792-4.696 4.533-4.696 1.313 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.487h-2.796v8.44C19.612 23.093 24 18.1 24 12.073z',
    twitter:   'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    youtube:   'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
  };

  const InfoItem = ({ iconKey, title, content, isSocial = false }) => (
    <div className="flex items-start gap-5">
      <div className="w-11 h-11 flex shrink-0 items-center justify-center bg-gradient-to-r from-[#f1a283] to-[#74e0ee] text-white rounded-xl mt-0.5">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5.5 h-5.5">
          <path d={ICONS[iconKey]} />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-1.5">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{content}</p>
        {isSocial && (
          <div className="flex gap-3 mt-2">
            {Object.entries(SOCIAL_LINKS).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-gradient-to-r hover:from-[#f1a283] hover:to-[#74e0ee] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                aria-label={`Follow on ${key}`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
                  <path d={ICONS[key]} />
                </svg>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <InteractiveBackground>
      <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto flex-grow py-24 px-6 animate-fadeIn">
        {/* Hero title */}
        <div className="text-center mb-12 animate-slideInUp">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-[#e88b66] to-[#4fb5c2] bg-clip-text text-transparent mb-4 leading-tight">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to start a conversation? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white/90 backdrop-blur-xl border border-white/50 rounded-3xl p-16 w-full max-w-4xl shadow-2xl relative overflow-hidden animate-glassIn">
          {/* Gradient orb */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-[#f1a283]/20 via-[#74e0ee]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form Column */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#f1a283] to-[#74e0ee] bg-clip-text text-transparent leading-tight">
                Get In Touch
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                    placeholder="Phone number"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-300 resize-none shadow-sm hover:shadow-md"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full lg:w-auto bg-gradient-to-r from-[#f1a283] to-[#74e0ee] text-white font-bold py-5 px-8 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Info Column */}
            <div className="space-y-8 pt-4 lg:pt-0">
              <InfoItem 
                iconKey="address" 
                title="Address" 
                content={CONTACT_INFO.address} 
              />
              <InfoItem 
                iconKey="email" 
                title="Email" 
                content={CONTACT_INFO.email} 
              />
              <InfoItem 
                iconKey="phone" 
                title="Phone" 
                content={CONTACT_INFO.phone} 
              />
              <InfoItem 
                iconKey="follow" 
                title="Follow Us"
                isSocial
              />
            </div>
          </div>
        </div>
      </div>
    </InteractiveBackground>
  );
}
