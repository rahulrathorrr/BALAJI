import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Asterisk } from 'lucide-react';
import logo from "../assets/logo.png"
const Header = () => {
  const location = useLocation();
  
  // Page ke top par scroll karne ka function
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'AI Workflow', path: '/ai-workflow' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-8 inset-x-0 z-[100] flex justify-center">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-[#1A1A1A]/95 backdrop-blur-lg rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl border border-white/10"
      >
        {/* Logo - Added scroll to top here as well */}
        <Link to="/" onClick={handleScrollToTop} className="flex items-center gap-2">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Asterisk className="text-[#E9EDC9]" size={20} />
          </motion.div>
          <span className="text-white font-black tracking-tighter text-sm uppercase">Balaji Info</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={handleScrollToTop}
              className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-all ${
                location.pathname === link.path ? 'text-[#E9EDC9]' : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;