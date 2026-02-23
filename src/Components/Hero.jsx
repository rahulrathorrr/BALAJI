import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#F4F4F2] flex flex-col justify-center items-center overflow-hidden px-6">
      
      {/* Unique Geometric Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-10 w-64 h-64 bg-[#E9EDC9] rounded-full mix-blend-multiply filter blur-[80px] opacity-40"
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#CCD5AE] rounded-full mix-blend-multiply filter blur-[100px] opacity-30"
        />
      </div>

      <div className="max-w-6xl w-full text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-[120px] font-black text-[#1A1A1A] leading-[0.85] tracking-tighter mb-10"
        >
          YOUR BUSINESS <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '2px #1A1A1A' }}>RUNS ON TECH.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-[#3A5A40] max-w-2xl mx-auto font-medium leading-relaxed mb-12"
        >
          Balaji Info Techline delivers end-to-end IT services -from cloud infrastructure and cybersecurity 
          to software engineering and managed support -powered by AI-driven workflows that keep 
          you faster, leaner, and always protected.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link 
            to="/contact" 
            className="group relative px-10 py-5 bg-[#1A1A1A] text-[#F4F4F2] rounded-full overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10 font-bold uppercase text-xs tracking-widest">Talk to Our Team</span>
            <motion.div className="absolute inset-0 bg-[#3A5A40] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          <Link 
            to="/services" 
            className="flex items-center gap-3 group text-[#1A1A1A] font-bold uppercase text-xs tracking-widest"
          >
            <span className="w-12 h-12 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-all">
              <Plus size={16} />
            </span>
            Explore Our Services
          </Link>
        </motion.div>
      </div>

      {/* Side Decorative Text */}
      <div className="absolute left-10 bottom-10 hidden lg:block overflow-hidden">
        <span className="text-[120px] font-black text-[#1A1A1A]/5 select-none leading-none">TECHLINE</span>
      </div>
    </section>
  );
};

export default Hero;