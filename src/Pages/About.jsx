import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Cpu, MessageSquare, Heart, CheckCircle2 } from 'lucide-react';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const values = [
    { title: "Transparency", desc: "We don't hide behind technical jargon. We speak plainly about what we're doing, why we're doing it, and what it costs.", icon: <MessageSquare size={20} /> },
    { title: "Reliability", desc: "We show up. Every time. Whether it's a 2 AM incident or a routine support ticket, we're on it.", icon: <Shield size={20} /> },
    { title: "Innovation", desc: "We're not satisfied with how things were done yesterday. We're constantly integrating new tools -including AI -into how we serve clients.", icon: <Cpu size={20} /> },
    { title: "Client-First Thinking", desc: "Every technical decision we make is tied back to a business outcome for our client. If it doesn't serve you, we don't do it.", icon: <Heart size={20} /> },
    { title: "Ownership", desc: "When something goes wrong -and sometimes it does -we don't point fingers. We own it, fix it, and make sure it doesn't happen again.", icon: <CheckCircle2 size={20} /> },
  ];

  const team = [
    { name: "Rajesh Sharma", role: "Founder & CEO | IT Strategy & Cloud Architecture" },
    { name: "Ankit Verma", role: "Head of Engineering | Software Development & AI Integration" },
    { name: "Priya Gupta", role: "Cybersecurity Lead | Network Security & Compliance" },
    { name: "Vikram Meena", role: "Infrastructure Specialist | Cloud & Networking" },
  ];

  return (
    <div className="bg-[#F4F4F2] pt-32 pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-7xl md:text-[140px] font-black tracking-tighter text-[#1A1A1A] leading-none mb-10"
          >
            WHO WE ARE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-3xl text-[#3A5A40] max-w-4xl mx-auto font-medium leading-tight"
          >
            A passionate team of IT engineers, cloud architects, and software builders -based in Jaipur, working across India -on a mission to make smart technology accessible to every business.
          </motion.p>
        </div>
      </section>

      {/* --- OUR STORY --- */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9]">
              We Started Because IT Didn't Have to Be This Complicated.
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>Balaji Info Techline Private Limited was born out of a simple observation: businesses in India -especially growing ones -were either overpaying for tech they didn't need, or struggling without the infrastructure they did. The gap between what was available and what was actually needed was huge.</p>
              <p>So we built a company to close that gap.</p>
              <p>Headquartered in Jaipur's Sanganer -one of Rajasthan's most energetic commercial corridors -we set out to build an IT services firm that would combine technical depth with real business understanding. One that could speak the language of both the engineer and the entrepreneur.</p>
              <p>Today, Balaji Info Techline delivers a full spectrum of IT services: from cloud infrastructure setup and managed networking, to cybersecurity, data management, custom software, and always-on IT support. And unlike many IT firms, we've embedded AI into our own operational workflows -which means faster delivery, smarter diagnostics, and better outcomes for every client we work with.</p>
              <p className="font-bold text-[#1A1A1A]">We're a startup. We move fast, we care deeply, and we're still building -which means every client we take on genuinely matters to us.</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
              alt="Office space" 
              className="w-full h-[700px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div {...fadeIn} className="bg-[#1A1A1A] p-16 rounded-[3rem] text-[#F4F4F2]">
            <Target className="text-[#E9EDC9] mb-6" size={48} />
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-6">Our Mission</h3>
            <p className="text-xl text-white/70 leading-relaxed">To empower Indian businesses with reliable, intelligent, and scalable IT infrastructure -making world-class technology accessible without the world-class price tag.</p>
          </motion.div>
          <motion.div {...fadeIn} className="bg-[#3A5A40] p-16 rounded-[3rem] text-[#F4F4F2]">
            <Eye className="text-[#E9EDC9] mb-6" size={48} />
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-6">Our Vision</h3>
            <p className="text-xl text-white/70 leading-relaxed">A future where every business in India -from Jaipur's bazaars to Mumbai's boardrooms -runs on infrastructure that's fast, secure, and built to last.</p>
          </motion.div>
        </div>
      </section>

      {/* --- OUR VALUES --- */}
      <section className="px-6 mb-32 bg-white py-24 rounded-[4rem]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 {...fadeIn} className="text-5xl md:text-7xl font-black tracking-tighter mb-16 text-center">What We Stand For</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {values.map((v, i) => (
              <motion.div key={i} {...fadeIn} className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#F4F4F2] rounded-full flex items-center justify-center text-[#3A5A40]">
                  {v.icon}
                </div>
                <h4 className="font-black text-sm uppercase tracking-widest">{v.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE TEAM (Typographic Layout) --- */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">The People Behind the Infrastructure</h2>
            <p className="text-xl text-[#3A5A40] font-medium max-w-3xl">We're a tight-knit team of engineers, security specialists, cloud architects, and developers who genuinely love what we do. Based in Jaipur -connected everywhere else.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                className="p-10 border-l-4 border-[#3A5A40] bg-white rounded-r-[2rem] hover:bg-[#1A1A1A] hover:text-[#F4F4F2] transition-colors duration-300 group"
              >
                <h4 className="font-black text-3xl uppercase tracking-tighter mb-3">{member.name}</h4>
                <p className="text-sm font-bold text-[#3A5A40] uppercase tracking-[0.2em] group-hover:text-[#E9EDC9] transition-colors duration-300">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COMPANY DETAILS BOX --- */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto bg-white border border-[#1A1A1A]/5 rounded-[2.5rem] p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <Cpu size={150} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 relative z-10">
            {[
              { label: "Company Name", value: "Balaji Info Techline Private Limited" },
              { label: "CIN / Registration", value: "[To be filled]" },
              { label: "Type", value: "Private Limited Company" },
              { label: "Industry", value: "Information Technology Services" },
              { label: "Headquarters", value: "61, Vaishno Vihar, 3rd Block C, Kokawas, Sanganer Bazar, Sanganer, Jaipur, Rajasthan - 302029" },
              { label: "Website", value: "infotechbalaji.in" },
              { label: "Service Area", value: "Pan-India" }
            ].map((detail, i) => (
              <div key={i} className="pr-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3A5A40] block mb-1">{detail.label}</span>
                <span className="text-sm font-bold text-[#1A1A1A]">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;