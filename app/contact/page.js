"use client";

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import InteractiveBackground from '../../components/InteractiveBackground';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          // Updated to match your EmailJS template placeholders
          name: formData.name,      // Matches {{name}}
          email: formData.email,    // Matches {{email}}
          title: formData.message,  // Matches {{title}}
          phone: formData.phone,    // Available if needed
        },
        publicKey
      );

      alert('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again later or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const SOCIAL_LINKS = {
    instagram: 'https://www.instagram.com/geekroom_srmist_ghz/',
    linkedin: 'https://www.linkedin.com/company/geek-room-srmist/posts/?feedView=all',
  };

  const CONTACT_INFO = {
    address: 'SRM Institute of Science and Technology, Ghaziabad Campus',
    email: 'contact@geekroom-srmist.co.in',
    phone: '+91 9236555905',
  };

  const ICONS = {
    address: 'M12 21s-7-6.75-7-11a7 7 0 0114 0c0 4.25-7 11-7 11zM12 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
    email: 'M2 7l10 7 10-7',
    phone: 'M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.1 5.18 2 2 0 015.09 3h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 17z',
    follow: 'M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3',
    instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.013 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.013 8.333 0 8.741 0 12c0 3.259.013 3.668.072 4.948.085 1.856.601 3.698 1.942 5.039 1.341 1.341 3.183 1.857 5.039 1.942C8.333 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.856-.085 3.698-.601 5.039-1.942 1.341-1.341 1.857-3.183 1.942-5.039C23.987 15.668 24 15.259 24 12c0-3.259-.013-3.668-.072-4.948-.085-1.856-.601-3.698-1.942-5.039C20.645.673 18.803.157 16.948.072 15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
    linkedin: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
  };

  const InfoItem = ({ iconKey, title, content, isSocial = false }) => (
    <div className="flex items-start gap-5">
      <div className="w-11 h-11 flex shrink-0 items-center justify-center bg-gradient-to-r from-cyan-500 to-orange-500 text-white rounded-xl mt-0.5">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5.5 h-5.5">
          <path d={ICONS[iconKey]} />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1.5">{title}</h3>
        <p className="text-gray-600 leading-relaxed font-semibold text-sm">{content}</p>
        {isSocial && (
          <div className="flex gap-3 mt-2">
            {Object.entries(SOCIAL_LINKS).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-orange-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
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
      <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto flex-grow py-32 px-6 animate-fadeIn">
        {/* Hero title */}
        <div className="text-center mb-12 animate-slideInUp">
          <h1 className="text-5xl md:text-8xl font-semibold tracking-tighter text-[#1a1a1a] select-none uppercase leading-none mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-cyan-500 to-cyan-600">Us</span>
          </h1>
          <p className="text-lg sm:text-2xl font-semibold tracking-[0.2em] text-gray-400 uppercase">
            Start a Conversation
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white/40 backdrop-blur-3xl border-2 border-black/5 rounded-[3rem] p-16 w-full max-w-4xl shadow-2xl relative overflow-hidden animate-glassIn group hover:border-black/10 transition-all duration-700">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
            {/* Form Column */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-semibold text-black tracking-tighter">
                Get In Touch
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 ml-1">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/50 border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-cyan-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 ml-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/50 border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-cyan-500 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label className="block text-sm font-semibold text-gray-700 ml-1">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/50 border-2 border-transparent rounded-2xl text-gray-900 placeholder-gray-400 focus:bg-white focus:border-cyan-500 focus:outline-none transition-all duration-300 resize-none shadow-sm hover:shadow-md"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full lg:w-auto bg-black text-white font-semibold py-5 px-12 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 text-lg uppercase tracking-[0.2em] disabled:opacity-50 disabled:cursor-wait"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Info Column */}
            <div className="space-y-8 pt-4 lg:pt-0 text-left">
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
