import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Globe, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan API integration (jaise EmailJS ya backend) aayega
    setIsSubmitted(true);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-[#F4F4F2] pt-32 pb-24 text-[#1A1A1A] min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="px-6 mb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-[100px] font-black tracking-tighter leading-none mb-8"
          >
            GET IN TOUCH
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#3A5A40] font-medium leading-relaxed max-w-3xl mx-auto"
          >
            Whether you have a specific project in mind or just want to talk through your IT situation -we're genuinely happy to hear from you. No sales pressure, just a real conversation.
          </motion.p>
        </div>
      </section>

      {/* --- MAIN CONTENT (Form & Details) --- */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          
          {/* LEFT: CONTACT FORM */}
          <motion.div {...fadeIn} className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-[#1A1A1A]/5 shadow-sm relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">Full Name *</label>
                        <input type="text" required className="w-full bg-[#F4F4F2] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#3A5A40] outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">Company Name</label>
                        <input type="text" className="w-full bg-[#F4F4F2] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#3A5A40] outline-none transition-all" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">Email Address *</label>
                      <input type="email" required className="w-full bg-[#F4F4F2] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#3A5A40] outline-none transition-all" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">Service Interested In</label>
                      <select className="w-full bg-[#F4F4F2] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#3A5A40] outline-none transition-all appearance-none cursor-pointer">
                        <option>Infrastructure & Cloud</option>
                        <option>Networking</option>
                        <option>Cybersecurity</option>
                        <option>Data Management</option>
                        <option>Software Development</option>
                        <option>IT Support</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">Message / Tell us about your needs *</label>
                      <textarea required rows="4" className="w-full bg-[#F4F4F2] border-none rounded-xl px-5 py-4 focus:ring-2 focus:ring-[#3A5A40] outline-none transition-all resize-none"></textarea>
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <input type="checkbox" required id="privacy" className="mt-1 w-4 h-4 text-[#3A5A40] bg-[#F4F4F2] border-gray-300 rounded focus:ring-[#3A5A40]" />
                      <label htmlFor="privacy" className="text-sm text-slate-500 cursor-pointer">I agree to the Privacy Policy</label>
                    </div>

                    <button type="submit" className="w-full flex items-center justify-center gap-3 bg-[#1A1A1A] text-[#F4F4F2] px-8 py-5 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-[#3A5A40] transition-colors mt-4">
                      Send Message <Send size={16} />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-20 h-20 bg-[#E9EDC9] rounded-full flex items-center justify-center mb-6 text-[#3A5A40]">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-black tracking-tighter mb-4">Message Sent Successfully</h3>
                    <p className="text-slate-600 max-w-md">Thank you for reaching out to Balaji Info Techline. Our team will review your message and get back to you shortly.</p>
                    <button onClick={() => setIsSubmitted(false)} className="mt-8 text-xs font-bold uppercase tracking-widest text-[#3A5A40] border-b border-[#3A5A40] pb-1">
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* RIGHT: CONTACT INFO */}
          <motion.div {...fadeIn} className="lg:col-span-2 space-y-12">
            
            {/* Contact Details */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#1A1A1A] mb-8 border-b border-[#1A1A1A]/10 pb-4">Contact Details</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <MapPin className="text-[#3A5A40] shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="block text-sm font-bold text-[#1A1A1A] mb-1">Address</strong>
                    <span className="text-slate-600 leading-relaxed block">61, Vaishno Vihar, 3rd Block C, Kokawas, Sanganer Bazar, Sanganer, Jaipur, Rajasthan - 302029, India</span>
                  </div>
                </li>
                <li className="flex gap-4 items-center">
                  <Globe className="text-[#3A5A40] shrink-0" size={20} />
                  <div>
                    <strong className="block text-sm font-bold text-[#1A1A1A]">Website</strong>
                    <a href="https://www.infotechbalaji.in" className="text-slate-600 hover:text-[#3A5A40] transition-colors">www.infotechbalaji.in</a>
                  </div>
                </li>
                <li className="flex gap-4 items-center">
                  <Mail className="text-[#3A5A40] shrink-0" size={20} />
                  <div>
                    <strong className="block text-sm font-bold text-[#1A1A1A]">Email</strong>
                    <a href="mailto:hello@infotechbalaji.in" className="text-slate-600 hover:text-[#3A5A40] transition-colors">[hello@infotechbalaji.in]</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Office Hours */}
            <div className="bg-[#1A1A1A] p-8 rounded-[2rem] text-[#F4F4F2]">
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[#E9EDC9] mb-6 flex items-center gap-3">
                <Clock size={18} /> Office Hours
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-white/70">Monday – Saturday:</span>
                  <span className="font-bold">9:00 AM – 7:00 PM IST</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-4">
                  <span className="text-white/70">Sunday:</span>
                  <span className="font-bold">By appointment</span>
                </li>
                <li className="pt-2">
                  <span className="block text-white/70 mb-1">Emergency IT Support:</span>
                  <span className="font-bold text-[#E9EDC9]">24/7 for managed services clients</span>
                </li>
              </ul>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Contact;