import React from 'react';
import { motion } from 'framer-motion';

const ImplementationNotes = () => {
  return (
    <div className="bg-[#F4F4F2] pt-32 pb-24 text-[#1A1A1A] min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-6"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">IMPLEMENTATION & USAGE NOTES</h1>

        <div className="space-y-12 text-lg text-slate-600 leading-relaxed">
          <section className="bg-white p-8 rounded-[2rem] border border-[#1A1A1A]/5 shadow-sm">
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-6">Placeholders to Fill In</h2>
            <ul className="list-none space-y-3 pl-4">
              <li>→ [ Date of Publication ] -Fill in actual launch date on all legal pages</li>
              <li>→ [ Year ] -Company founding year on About page</li>
              <li>→ [ Team Names & Photos ] -Update team section with actual team members</li>
              <li>→ [ Email Addresses ] -Replace all placeholder emails with actual working addresses</li>
              <li>→ [ Phone Number ] -Add actual contact number</li>
              <li>→ [ CIN / Registration Number ] -Add company CIN from MCA records</li>
              <li>→ [ Testimonials ] -Replace placeholder testimonials with actual client quotes once received</li>
              <li>→ [ Pricing / Plans ] -Fill in managed services pricing once finalized</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-[2rem] border border-[#1A1A1A]/5 shadow-sm">
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-6">SEO Notes</h2>
            <p className="mb-4 font-bold text-[#1A1A1A]">Primary keyword targets per page:</p>
            <ul className="list-none space-y-3 pl-4">
              <li>→ Home: 'IT services Jaipur', 'IT company Rajasthan', 'managed IT services India'</li>
              <li>→ Cloud page: 'cloud services Jaipur', 'cloud infrastructure setup India'</li>
              <li>→ Cybersecurity: 'cybersecurity services Jaipur', 'IT security company India'</li>
              <li>→ Software Dev: 'custom software development Jaipur', 'web app development Rajasthan'</li>
              <li>→ About: 'IT company Sanganer Jaipur', 'Balaji Info Techline'</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-[2rem] border border-[#1A1A1A]/5 shadow-sm">
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-6">Tone Reminders</h2>
            <p>This content is written in a startup-authentic, human tone -confident but not arrogant, technical but not jargon-heavy, professional but never stiff. Avoid rewriting in a corporate agency tone. The brand voice is: clear, direct, smart, and honest.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default ImplementationNotes;