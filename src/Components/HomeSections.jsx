import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Cloud, Network, Database, 
  Code, Headset, Cpu, Zap, Lock, MapPin, 
  Search, PenTool, Terminal, Rocket, HeartHandshake,
  ArrowUpRight
} from 'lucide-react';

const HomeSections = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const services = [
    { title: "Infrastructure & Cloud Services", desc: "Build the backbone your business deserves. Scalable, resilient, and ready to grow with you.", icon: <Cloud /> },
    { title: "Networking & Connectivity", desc: "Fast, secure, and always-on. We design networks that your business can actually rely on.", icon: <Network /> },
    { title: "Cybersecurity Services", desc: "Threats don't take days off. Neither does our security layer. Stay ahead of risks -always.", icon: <ShieldCheck /> },
    { title: "Data Management & Storage", desc: "Your data is one of your most valuable assets. We help you store, secure, and make sense of it.", icon: <Database /> },
    { title: "Software Development & Engineering", desc: "We build software that solves real problems -clean code, intelligent design, and zero cutting corners.", icon: <Code /> },
    { title: "IT Support & Managed Services", desc: "Your dedicated IT team, without the overhead. We handle the complexity so you can focus on what matters.", icon: <Headset /> },
  ];

  return (
    <div className="bg-[#F4F4F2] text-[#1A1A1A]">
      
      {/* --- TRUST BAR --- */}
      <section className="py-12 border-y border-[#1A1A1A]/5 bg-white/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] mb-8 font-bold text-[#3A5A40]">
            Trusted by businesses across Rajasthan and beyond for reliable, intelligent IT solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {["AI-Powered Workflows", "Cloud-Ready Infrastructure", "24/7 Managed Support", "Enterprise-Grade Security", "Jaipur-Based. India-Wide."].map((tag, i) => (
              <span key={i} className="px-5 py-2 rounded-full bg-white border border-[#1A1A1A]/5 text-[11px] font-bold uppercase tracking-wider">
                → {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES SNAPSHOT --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Everything IT. Under One Roof.</h2>
            <p className="max-w-xl text-lg text-[#3A5A40] font-medium">We don't just fix problems -we build systems that prevent them. Here's how we help businesses like yours grow without the tech headaches.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="p-10 bg-white border border-[#1A1A1A]/5 rounded-[2rem] flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#F4F4F2] flex items-center justify-center mb-6 group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                    {React.cloneElement(s.icon, { size: 28 })}
                  </div>
                  <h3 className="text-xl font-bold mb-4 tracking-tight">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-8">{s.desc}</p>
                </div>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest group-hover:text-[#3A5A40]">
                  Learn More <ArrowUpRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY BALAJI INFO TECHLINE --- */}
      <section className="py-24 px-6 bg-[#1A1A1A] text-[#F4F4F2] rounded-[3rem] mx-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">We're Not Just Another IT Vendor.</h2>
            <p className="text-[#E9EDC9]/60 text-lg leading-relaxed mb-12">We're a startup that thinks differently about IT. Small enough to care about every client. Smart enough to build infrastructure that scales. AI-assisted enough to move fast.</p>
            <div className="space-y-8">
              {[
                { icon: <Cpu />, title: "AI-Assisted Operations", desc: "We embed AI into our own delivery workflows -from project monitoring to automated diagnostics -which means faster turnaround and fewer human errors on your end." },
                { icon: <Zap />, title: "Built for Speed and Scale", desc: "Whether you're a 5-person team or scaling to 500, our solutions grow with you -no costly rebuilds, no migrations halfway through growth." },
                { icon: <Lock />, title: "Security First, Always", desc: "Security isn't an add-on for us. It's woven into every layer of what we build -from your network architecture to your application code." },
                { icon: <MapPin />, title: "Local Presence, National Capability", desc: "Based in Jaipur, we serve clients across India with the responsiveness of a local team and the capability of a national IT firm." },
                { icon: <Search />, title: "Transparent, No-Surprises Delivery", desc: "No jargon. No hidden costs. No disappearing acts. You always know what's happening with your project, in plain language." }
              ].map((f, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-[#E9EDC9] shrink-0 mt-1">{f.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{f.title}</h4>
                    <p className="text-sm text-white/50">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full aspect-square border border-white/10 rounded-full flex items-center justify-center relative">
               <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-t-2 border-[#E9EDC9] rounded-full" 
               />
               <span className="text-[120px] font-black opacity-10">BIT</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- HOW WE WORK --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 {...fadeIn} className="text-4xl md:text-6xl font-black tracking-tighter mb-16 text-center">Simple Process. Powerful Results.</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "01", label: "Understand", icon: <Search />, desc: "We listen first. Before writing a single line of code or configuring a single server, we learn your business inside out." },
              { step: "02", label: "Design", icon: <PenTool />, desc: "Our team maps out the right architecture, stack, or solution using AI-assisted analysis and real-world experience." },
              { step: "03", label: "Build", icon: <Terminal />, desc: "We get to work. Fast iterations, constant communication, no surprises." },
              { step: "04", label: "Deploy", icon: <Rocket />, desc: "Live, tested, and production-ready. We make sure everything is locked down before go-live." },
              { step: "05", label: "Support", icon: <HeartHandshake />, desc: "We don't disappear after launch. Ongoing monitoring, maintenance, and managed support keep you covered." }
            ].map((step, i) => (
              <div key={i} className="p-8 border border-[#1A1A1A]/5 rounded-3xl hover:bg-white transition-all">
                <span className="text-[10px] font-black text-[#3A5A40] mb-4 block">{step.step} / STEP</span>
                <h4 className="font-black uppercase text-sm tracking-widest mb-4 flex items-center gap-2">
                  {step.label}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Balaji Info Techline revamped our entire network setup and we haven't had a single downtime since. Their team actually explains what they're doing -which is rare.", author: "Business Owner, Jaipur" },
              { text: "From cloud migration to 24/7 support, they handled everything professionally. The AI-driven monitoring they set up has been a game-changer for our operations.", author: "Retail Chain, Rajasthan" },
              { text: "Their software team built exactly what we described -and suggested improvements we hadn't even thought of. Very impressive.", author: "Logistics Startup, Jaipur" }
            ].map((t, i) => (
              <div key={i} className="p-10 bg-[#F4F4F2] rounded-[2.5rem] italic text-lg text-[#1A1A1A]/80 flex flex-col justify-between">
                <p>"{t.text}"</p>
                <cite className="not-italic block mt-8 font-bold text-xs uppercase tracking-[0.2em] text-[#3A5A40]">-{t.author}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA BANNER --- */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-[#3A5A40] rounded-[3rem] p-12 md:p-24 text-center text-[#F4F4F2] relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6">Ready to Build Something Solid?</h2>
            <p className="text-lg opacity-70 mb-12 max-w-2xl mx-auto">Whether you need to set up your first cloud server, lock down your cybersecurity, or build a custom software product -we're here to make it happen. Let's talk.</p>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-[#E9EDC9] text-[#1A1A1A] px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform">
              Schedule a Free Consultation <ArrowUpRight />
            </Link>
          </div>
          {/* Subtle Decorative Circle */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full" />
        </div>
      </section>

    </div>
  );
};

export default HomeSections;